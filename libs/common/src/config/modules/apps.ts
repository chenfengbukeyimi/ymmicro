export const AppNames = [
  /** 基础服务 */
  'micro-auth',
  'micro-config',
  'micro-log',
  'micro-user',
  'ymmicro',

  /** 业务应用 */
  'owner-admin',
] as const;

export type AppKey = (typeof AppNames)[number];

const DevApps: Record<AppKey, number> = {
  ymmicro: 3000,
  'micro-config': 3001,
  'micro-log': 3002,
  'micro-auth': 3003,
  'micro-user': 3004,
  'owner-admin': 3005,
};
const ProdApps: Record<AppKey, number> = {
  ymmicro: 3000,
  'micro-config': 3001,
  'micro-log': 3002,
  'micro-auth': 3003,
  'micro-user': 3004,
  'owner-admin': 3005,
};

const IsProdEnv = process.env.NODE_ENV === 'production';

export const LocalApps: Record<AppKey, number> = IsProdEnv ? ProdApps : DevApps;

export const AppImageNames = AppNames.map(
  (name) => `${name}-${IsProdEnv ? 'prod' : 'dev'}`,
);

/**
 * 项目部署端口规划
 * 本地服务：3000-3999
 *
 * 容器开发环境：7000-7999
 *   微服务端口（70xx-71**）
 *     网关服务端口：7000
 *     配置服务端口：7001
 *     日志服务端口：7002
 *     认证服务端口：7003
 *     用户服务端口：7004
 *     后台服务端口：7005
 *
 *   数据库端口（72xx-73**）
 *
 *   服务通信（tcp）端口（74xx-75**）
 *   服务通信（队列）端口（76xx-77**）
 *   服务通信（grpc）端口（78xx-79**）
 *
 * 容器生产环境：8000-8999
 *   微服务端口（80xx-81**）
 *     网关服务端口：8000
 *     配置服务端口：8001
 *     日志服务端口：8002
 *     认证服务端口：8003
 *     用户服务端口：8004
 *     后台服务端口：8005
 *
 *   数据库端口（82xx-83**）
 *
 *   服务通信端口
 *     TCP端口（84xx-85**）
 *     队列端口（86xx-87**）
 *     grpc端口（88xx-89**）
 */
