/**
 * 开发环境：容器定义服务的名称，详见 services 列表(不含数据库);
 * 命名格式： <project_name>-dev
 * 场景用途：docker compose up --build <project_name_1>-dev <project_name_2>-dev ...
 */
export const ContainnerDev_YmMicroNames = [
  'ymmicro-dev',
  'micro-config-dev',
  'micro-log-dev',
  'micro-auth-dev',
  'micro-user-dev',
];

/**
 * 生产环境：容器定义服务的名称，详见 services 列表(不含数据库);
 * 命名格式： <project_name>-prod
 * 场景用途：docker compose up --build <project_name_1>-prod <project_name_2>-prod ...
 */
export const ContainnerProd_YmMicroNames = [
  'ymmicro-prod',
  'micro-config-prod',
  'micro-log-prod',
  'micro-auth-prod',
  'micro-user-prod',
];
