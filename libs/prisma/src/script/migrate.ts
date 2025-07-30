/** 执行脚本，将各个服务的数据表结构定义同步到各自专用数据库 */

import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

/**
 * 服务配置
 * name 服务名称
 * schema 文件路径
 */
interface ServiceConfig {
  name: string;
  schema: string;
}

const serviceList: ServiceConfig[] = [
  {
    name: 'micro-config',
    schema: join(__dirname, '../../../../apps/micro-config/prisma/schema'),
  },

  {
    name: 'micro-log',
    schema: join(__dirname, '../../../../apps/micro-log/prisma/schema'),
  },

  {
    name: 'micro-user',
    schema: join(__dirname, '../../../../apps/micro-user/prisma/schema'),
  },

  {
    name: 'micro-auth',
    schema: join(__dirname, '../../../../apps/micro-auth/prisma/schema'),
  },

  {
    name: 'owner-admin',
    schema: join(__dirname, '../../../../apps/owner-admin/prisma/schema'),
  },
];

function migrate(service: ServiceConfig) {
  const schema_status: boolean = existsSync(service.schema);

  let migrate_status: boolean = false;

  try {
    if (schema_status) {
      // Generate Prisma Client
      execSync(`npx prisma generate --schema ${service.schema}`, {
        stdio: 'inherit',
      });
      // Push migration to database
      execSync(`npx prisma migrate deploy --schema ${service.schema}`, {
        stdio: 'inherit',
      });
    }

    migrate_status = true;
  } catch (err) {
    console.error(err);
    migrate_status = false;
  } finally {
    const msg = !schema_status
      ? '未找到 schema 数据表定义目录'
      : migrate_status
        ? '同步成功'
        : '同步失败';

    console.log(`${service.name}: ${msg}`);
  }
}

function main() {
  serviceList.forEach(migrate);
}

/** 只有在主模块才执行 */
require.main === module && main();
