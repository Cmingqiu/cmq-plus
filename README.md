# 适合 vue3 的 UI 组件库

## 注意

1. 安装 vue、ts，配置 tsconfig.json
2. 创建 pnpm-workspace.yaml
3. 创建项目 packages、play、docs
4. play 使用 pnpm create vite 创建演示项目
5. 配置 script 脚本 `pnpm run -C play dev`
6. 创建全局类型声明目录 typings
7. 组件中包含：组件 components、样式 theme-chalk、工具方法 utils、指令 directives、钩子 Hooks 等
8. 每个 package 都是独立模块，其中的 package.json 修改 name,scripts
9. 将每个 package 安装在根目录下

```
pnpm install @cmq-plus/components -w
pnpm install @cmq-plus/theme-chalk -w
pnpm install @cmq-plus/utils -w
```

10. 创建符合 BEM 规范的方法和 mixin 样式
11. 创建整合后的 cmq-plus，导入所有 components；注意 package.json 的"name": "cmq-plus"
12. 组件打包

## 特点

- monorepo
- ts
- vue3

## Usage

`pnpm add cmq-plus -S`

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import cmqUI from 'cmq-plus';

const app = createApp(App);
app.use(cmqUI).mount('#app');
```
