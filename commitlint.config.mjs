// @ts-check
export default {
  extends: ['@commitlint/config-conventional'],

  // 配置规则
  rules: {
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      // 与配置文件 .cz-config.js 内容的 types 对象顺序保持一致。
      [
        'fix',
        'feat',
        'perf',
        'test',
        'docs',
        'style',
        'build',
        'revert',
        'refactor',
        'chore',
        'cicd',
      ],
    ],
  },
};
