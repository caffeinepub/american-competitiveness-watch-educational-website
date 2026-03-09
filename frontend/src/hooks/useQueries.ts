import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type { Subscriber, SharedAnalyticsData, UserProfile } from '../backend';

export function useSubscribe() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.subscribe(name, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscribers'] });
    },
  });
}

export function useIsSubscribed(email: string) {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isSubscribed', email],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isSubscribed(email);
    },
    enabled: !!actor && !isFetching && !!email,
  });
}

export function useGetAllSubscribers() {
  const { actor, isFetching } = useActor();

  return useQuery<Subscriber[]>({
    queryKey: ['subscribers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubscribers();
    },
    enabled: !!actor && !isFetching,
  });
}

// Analytics hooks
export function useRecordPageView() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (duration: number) => {
      if (!actor) return;
      return actor.recordPageView(BigInt(duration));
    },
  });
}

export function useRecordSectionView() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      section,
      duration,
      scrollDepth,
    }: {
      section: string;
      duration: number;
      scrollDepth: number;
    }) => {
      if (!actor) return;
      return actor.recordSectionView(section, BigInt(duration), BigInt(scrollDepth));
    },
  });
}

export function useGetAnalyticsData() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<SharedAnalyticsData>({
    queryKey: ['analytics'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getAnalyticsData();
    },
    enabled: !!actor && !isFetching && !!identity,
    retry: false,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching && !!identity,
    retry: false,
  });
}

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && !!identity,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}
