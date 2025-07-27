// @ts-check
/* 由于 cz-customizable 依赖不支持 ESModule，故用 CommonJS 语法来写。 */

module.exports = {
  types: [
    { value: 'fix', name: '🐛 缺陷修复 (修复 bug)' },
    { value: 'feat', name: '✨ 功能新增 (新业务功能)' },
    { value: 'perf', name: '⚡️ 性能优化 (产品性能提升)' },
    { value: 'test', name: '✅ 测试用例 (功能测试)' },
    { value: 'docs', name: '📝 文档修改 (文档更新)' },
    { value: 'style', name: '💄 代码规范 (代码风格)' },
    { value: 'build', name: '📦️ 打包构建 (构建配置、依赖更新等)' },
    { value: 'revert', name: '⏪️ 撤销提交 (撤销远程提交)' },
    { value: 'refactor', name: '♻️  代码重构 (业务功能新方案)' },
    {
      value: 'chore',
      name: '🔨 日常事务 (非源码、测试用例改动，且不影响功能逻辑)',
    },
    { value: 'cicd', name: '🎡 CI/CD (持续集成/持续部署)' },
  ],
  messages: {
    type: '请选择提交类型：',
    customScope: '请输入本次提交涉及的范围 (可选): ',
    subject: '请简要描述提交内容：',
    body: '请输入详细描述 (可选): ',
    breaking: '列出 BREAKING CHANGES (可选): ',
    footer: '列出相关 issues (可选): ',
    confirmCommit: '确认使用以上信息提交? (y/n)',
  },
  subjectLimit: 100,
};
