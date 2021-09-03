import {
  ErrorHandlerType,
  queryDedupingInterval,
  queryRetryCount,
  queryRetryInterval,
} from 'src/features/common';
import useSWR from 'swr';

/**
 * cache async function result
 * @param param
 * @param asyncFunction
 * @param errorHandler
 */
export const useCachedAsyncFunction = <T>(
  param: string | null,
  asyncFunction: (...params: any) => Promise<T>,
  errorHandler: ErrorHandlerType,
  dedupingInterval?: number,
): T => {
  const { data } = useSWR(param, asyncFunction, {
    dedupingInterval: dedupingInterval ?? queryDedupingInterval, // avoid re-fetch for 5 minutes
    // retry 3 times after 3 seconds wait.
    onErrorRetry: (error, _key, _option, revalidate, { retryCount }) => {
      const count = retryCount ?? 0;
      if (count >= queryRetryCount) {
        // if still error after retry, set error
        errorHandler(error);
        return;
      }
      setTimeout(() => revalidate({ retryCount: count }), queryRetryInterval);
    },
  });
  return data as T;
};
