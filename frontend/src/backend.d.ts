import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Subscriber {
    name: string;
    email: string;
}
export interface SharedSectionAnalytics {
    averageScrollDepth: bigint;
    totalViews: bigint;
    totalScrollDepth: bigint;
    totalDuration: bigint;
    averageDuration: bigint;
}
export interface SharedAnalyticsData {
    totalDuration: bigint;
    averageDuration: bigint;
    totalPageViews: bigint;
    sections: Array<[string, SharedSectionAnalytics]>;
    modulePageViews: Array<[string, bigint]>;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllSubscribers(): Promise<Array<Subscriber>>;
    getAnalyticsData(): Promise<SharedAnalyticsData>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeAccessControl(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    isSubscribed(email: string): Promise<boolean>;
    recordModulePageView(moduleName: string): Promise<void>;
    recordPageView(duration: bigint): Promise<void>;
    recordSectionView(section: string, duration: bigint, scrollDepth: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    subscribe(name: string, email: string): Promise<void>;
}
