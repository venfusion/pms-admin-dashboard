import { useQuery } from '@tanstack/react-query';

import { BaseResponse } from '#/shared/types/base-response.type';
import { usePropertiesStore } from '#/store';

import { fetchProperties } from '../api/properties.api';
import { Property } from '../types/properties.type';

export const useProperties = () => {
  const setProperties = usePropertiesStore((state) => state.setProperties);

  const query = useQuery<BaseResponse<{ properties: Property[] }>, Error>({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
  if (query.isSuccess) {
    setProperties(query.data.data.properties);
  }
  return query;
};
