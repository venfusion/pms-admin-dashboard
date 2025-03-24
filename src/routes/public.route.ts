import { AuthRoutes } from '#/modules/auth';
import { composeModuleRoutes } from '#/shared/utils/router.util';

export const publicRoutes = composeModuleRoutes(AuthRoutes);
