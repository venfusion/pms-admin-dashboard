import { validatedEnv } from '#/shared/configs/env.config';
import { ROUTES } from '#/shared/constants/routes.constants';

export const PROPERTIES_ROUTES = {
  LIST: `${validatedEnv.VITE_API_URL}${ROUTES.properties.list}`,
};
