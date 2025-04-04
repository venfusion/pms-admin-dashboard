import { DefinedInitialDataOptions, useQuery, UseQueryResult } from '@tanstack/react-query';

import axiosInstance from '#/api/httpClient';
import { BaseErrorResponse } from '#/shared/types/base-error-response.type';
import { BaseResponse } from '#/shared/types/base-response.type';

import { Policy } from '../types/policy.type';

const getPolicies = async (
  page: number = 1,
  limit: number = 20,
): Promise<BaseResponse<{ policies: Policy[] }>> => {
  const response = await axiosInstance.get<BaseResponse<{ policies: Policy[] }>>('/policies', {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

type UsePoliciesOptions = {
  page?: number;
  limit?: number;
  queryConfig?: Omit<
    DefinedInitialDataOptions<BaseResponse<{ policies: Policy[] }>, BaseErrorResponse>,
    'queryKey' | 'queryFn'
  >;
};

export const usePolicies = ({
  queryConfig,
  page = 1,
  limit = 20,
}: UsePoliciesOptions): UseQueryResult<BaseResponse<{ policies: Policy[] }>, BaseErrorResponse> =>
  useQuery<BaseResponse<{ policies: Policy[] }>, BaseErrorResponse>({
    queryKey: ['policies', page],
    queryFn: () => getPolicies(page, limit),
    ...queryConfig,
  });
