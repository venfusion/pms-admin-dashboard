import axiosInstance from '#/api/httpClient';
import { BaseResponse } from '#/shared/types/base-response.type';

import { PROPERTIES_ROUTES } from '../constants/properties.routes';
import { Property } from '../types/properties.type';

export const fetchProperties = async (): Promise<BaseResponse<{ properties: Property[] }>> => {
  const response = await axiosInstance.get(`${PROPERTIES_ROUTES.LIST}`);
  return response.data;
};
