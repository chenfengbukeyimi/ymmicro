type DbType = 'mysql' | 'postgres' | 'sqlite';

interface DbConfig {
  type: DbType;
  user: string;
  pass: string;
  host: string;
  port: number;
  database: string;
}

/** 开发环境数据库端口（72xx-73**）*/
export const DEV_DB: Record<string, DbConfig | null> = {
  MICRO_CONFIG: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 7201,
    database: 'config_db_dev',
  },
  MICRO_LOG: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 7202,
    database: 'log_db_dev',
  },
  MICRO_AUTH: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 7203,
    database: 'auth_db_dev',
  },
  MICRO_USER: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 7204,
    database: 'user_db_dev',
  },
  OWNER_ADMINN: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 7205,
    database: 'owner_adminn_db_dev',
  },
};

/** 生产环境数据库端口（82xx-83**）*/
export const PROD_DB: Record<string, DbConfig | null> = {
  MICRO_CONFIG: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 8201,
    database: 'config_db_prod',
  },
  MICRO_LOG: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 8202,
    database: 'log_db_prod',
  },
  MICRO_AUTH: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 8203,
    database: 'auth_db_prod',
  },
  MICRO_USER: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 8204,
    database: 'user_db_prod',
  },
  OWNER_ADMINN: {
    type: 'mysql',
    user: 'root',
    pass: 'root',
    host: 'localhost',
    port: 8205,
    database: 'owner_adminn_db_prod',
  },
};
