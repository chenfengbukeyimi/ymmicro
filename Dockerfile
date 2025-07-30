## 开发环境
FROM node AS development
ARG APP_NAME
ENV NODE_ENV development
RUN npm install -g pnpm
RUN pnpm config set registry https://registry.npmmirror.com
RUN mkdir -p /usr/src/ymmicro
WORKDIR /usr/src/ymmicro
COPY package.json ./
RUN pnpm install
COPY . .


## 构建环境
FROM node AS building
ARG APP_NAME
ENV NODE_ENV production
RUN npm install -g pnpm
RUN pnpm config set registry https://registry.npmmirror.com
RUN mkdir -p /usr/src/ymmicro
WORKDIR /usr/src/ymmicro
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build -- ${APP_NAME}


## 生产环境
FROM node AS production
ARG APP_NAME
WORKDIR /usr/src/ymmicro
## 仅用构建打包产物 dist 目录，减少镜像体积。
COPY --from=building /usr/src/ymmicro/dist ./dist
CMD [ "node", "dist/apps/${APP_NAME}/main.js" ]

