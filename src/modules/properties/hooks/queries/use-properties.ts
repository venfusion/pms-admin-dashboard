import { DefinedInitialDataOptions, useQuery, UseQueryResult } from '@tanstack/react-query';

import axiosInstance from '#/api/httpClient';
import { BaseErrorResponse } from '#/shared/types/base-error-response.type';
import { BaseResponse } from '#/shared/types/base-response.type';

import { Property } from '../../types/properties.type';

const getProperties = async (
  page: number = 1,
  limit: number = 20,
): Promise<BaseResponse<{ properties: Property[] }>> => {
  const response = await axiosInstance.get<BaseResponse<{ properties: Property[] }>>(
    '/properties',
    {
      params: {
        page,
        limit,
      },
    },
  );
  return response.data;
};

type UsePropertiesOptions = {
  page?: number;
  limit?: number;
  queryConfig?: Omit<
    DefinedInitialDataOptions<BaseResponse<{ properties: Property[] }>, BaseErrorResponse>,
    'queryKey' | 'queryFn'
  >;
};

export const useProperties = ({
  queryConfig,
  page = 1,
  limit = 20,
}: UsePropertiesOptions): UseQueryResult<
  BaseResponse<{ properties: Property[] }>,
  BaseErrorResponse
> =>
  useQuery<BaseResponse<{ properties: Property[] }>, BaseErrorResponse>({
    queryKey: ['properties', page],
    queryFn: () => getProperties(page, limit),
    ...queryConfig,
  });
