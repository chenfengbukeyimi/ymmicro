/**
 * 特别提醒：
 * 1. 数据库端口网段在 7001 - 7999 区间范围。
 * 2. 微服务专用数据库微服务项目端口对应；如配置微服务端口 8001 对应配置微服务的数据库端口 7001.
 */

export enum DbPort {
  ConfigDbDev = '7001',
  LogDbDev = '7002',
  AuthDbDev = '7003',
  UserDbDev = '7004',

  /** 环境分隔线 */

  ConfigDbProd = '7501',
  LogDbProd = '7502',
  AuthDbProd = '7503',
  UserDbProd = '7504',
}

/**
 * 特别提醒：
 * 1. 数据库端口网段在 8000 - 8999 区间范围。
 * 2. 开发环境网关端口为 8000，生产环境网关端口为 8500.
 * 3. 微服务专用数据库微服务项目端口对应；如配置微服务端口 8001 对应配置微服务的数据库端口 7001.
 */

export enum ContainerPort {
  YmmicroDev = '8000',
  MicroConfigDev = '8001',
  MicroLogDev = '8002',
  MicroAuthDev = '8003',
  MicroUserDev = '8004',

  /** 环境分割线 */

  YmmicroProd = '8500',
  MicroConfigProd = '8501',
  MicroLogProd = '8502',
  MicroAuthProd = '8503',
  MicroUserProd = '8504',
}

export enum LocalPort {
  /** 网关端口 */
  YmMicro = '3000',

  /** 微服务端口 */
  MicroConfig = '3001',
  MicroLog = '3002',
  MicroAuth = '3003',
  MicroUser = '3004',
}
