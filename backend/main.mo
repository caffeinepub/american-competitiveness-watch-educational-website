import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Nat "mo:core/Nat";

import AccessControl "authorization/access-control";
import Principal "mo:core/Principal";
import List "mo:core/List";



actor {
  // Types
  type Subscriber = {
    name : Text;
    email : Text;
  };

  module Subscriber {
    public func compare(sub1 : Subscriber, sub2 : Subscriber) : Order.Order {
      switch (Text.compare(sub1.name, sub2.name)) {
        case (#equal) { Text.compare(sub1.email, sub2.email) };
        case (order) { order };
      };
    };
  };

  type SectionAnalytics = {
    totalViews : Nat;
    totalDuration : Nat;
    totalScrollDepth : Nat;
    averageDuration : Nat;
    averageScrollDepth : Nat;
  };

  type AnalyticsData = {
    totalPageViews : Nat;
    totalDuration : Nat;
    averageDuration : Nat;
    sections : Map.Map<Text, SectionAnalytics>;
    modulePageViews : Map.Map<Text, Nat>;
  };

  public type UserProfile = {
    name : Text;
  };

  public type SharedSectionAnalytics = {
    totalViews : Nat;
    totalDuration : Nat;
    totalScrollDepth : Nat;
    averageDuration : Nat;
    averageScrollDepth : Nat;
  };

  public type SharedAnalyticsData = {
    totalPageViews : Nat;
    totalDuration : Nat;
    averageDuration : Nat;
    sections : [(Text, SharedSectionAnalytics)];
    modulePageViews : [(Text, Nat)];
  };

  // State
  let subscribers = Map.empty<Text, Subscriber>();
  var analytics : AnalyticsData = {
    totalPageViews = 0;
    totalDuration = 0;
    averageDuration = 0;
    sections = Map.empty<Text, SectionAnalytics>();
    modulePageViews = Map.empty<Text, Nat>();
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Access Control
  let accessControlState = AccessControl.initState();

  // Access Control Functions
  public shared ({ caller }) func initializeAccessControl() : async () {
    AccessControl.initialize(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Subscription Functions
  public shared ({ caller }) func subscribe(name : Text, email : Text) : async () {
    if (subscribers.containsKey(email)) {
      Runtime.trap("This email is already subscribed.");
    };
    let subscriber : Subscriber = {
      name;
      email;
    };
    subscribers.add(email, subscriber);
  };

  public query ({ caller }) func isSubscribed(email : Text) : async Bool {
    subscribers.containsKey(email);
  };

  public query ({ caller }) func getAllSubscribers() : async [Subscriber] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access subscriber list");
    };
    subscribers.values().toArray().sort();
  };

  // Analytics Functions
  public shared ({ caller }) func recordPageView(duration : Nat) : async () {
    // Public function - allows guests to record analytics
    // No authorization check needed as this is for tracking public site usage
    analytics := {
      analytics with
      totalPageViews = analytics.totalPageViews + 1;
      totalDuration = analytics.totalDuration + duration;
      averageDuration = if (analytics.totalPageViews + 1 > 0) {
        (analytics.totalDuration + duration) / (analytics.totalPageViews + 1);
      } else {
        0;
      };
    };
  };

  public shared ({ caller }) func recordSectionView(section : Text, duration : Nat, scrollDepth : Nat) : async () {
    // Public function - allows guests to record analytics
    // No authorization check needed as this is for tracking public site usage
    let currentSection = switch (analytics.sections.get(section)) {
      case (null) {
        {
          totalViews = 0;
          totalDuration = 0;
          totalScrollDepth = 0;
          averageDuration = 0;
          averageScrollDepth = 0;
        };
      };
      case (?section) { section };
    };

    let updatedSection = {
      totalViews = currentSection.totalViews + 1;
      totalDuration = currentSection.totalDuration + duration;
      totalScrollDepth = currentSection.totalScrollDepth + scrollDepth;
      averageDuration = if (currentSection.totalViews + 1 > 0) {
        (currentSection.totalDuration + duration) / (currentSection.totalViews + 1);
      } else {
        0;
      };
      averageScrollDepth = if (currentSection.totalViews + 1 > 0) {
        (currentSection.totalScrollDepth + scrollDepth) / (currentSection.totalViews + 1);
      } else {
        0;
      };
    };

    let newSections = analytics.sections.clone();
    newSections.add(section, updatedSection);

    analytics := {
      analytics with
      sections = newSections;
    };
  };

  public shared ({ caller }) func recordModulePageView(moduleName : Text) : async () {
    // Public function - allows guests to record analytics
    // No authorization check needed as this is for tracking public site usage
    let currentViews = switch (analytics.modulePageViews.get(moduleName)) {
      case (null) { 0 };
      case (?views) { views };
    };

    let newModulePageViews = analytics.modulePageViews.clone();
    newModulePageViews.add(moduleName, currentViews + 1);

    analytics := {
      analytics with
      modulePageViews = newModulePageViews;
    };
  };

  public query ({ caller }) func getAnalyticsData() : async SharedAnalyticsData {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access analytics data");
    };

    let sectionsList = List.empty<(Text, SharedSectionAnalytics)>();
    for ((section, data) in analytics.sections.entries()) {
      sectionsList.add((section, data));
    };

    let modulePageViewsList = List.empty<(Text, Nat)>();
    for ((moduleName, views) in analytics.modulePageViews.entries()) {
      modulePageViewsList.add((moduleName, views));
    };

    {
      totalPageViews = analytics.totalPageViews;
      totalDuration = analytics.totalDuration;
      averageDuration = analytics.averageDuration;
      sections = sectionsList.toArray();
      modulePageViews = modulePageViewsList.toArray();
    };
  };
};


