# 组件库开发流程

## 初始化项目

使用`pnpm`
### 安装
```sh
npm install pnpm -g
```
### 初始化package.json

```sh
pnpm init
```

###  新建配置文件 .npmrc

在文件中做以下配置

```
shamefully-hoist = true
```
这个配置主要是针对`pnpm`的`node_modules`扁平化使用的，如果没有该配置，项目运行时可能会存在错误[官方的解释](https://pnpm.io/zh/npmrc#shamefully-hoist)：
> 默认情况下，pnpm 创建一个半严格的 node_modules，这意味着依赖项可以访问未声明的依赖项，但 node_modules 之外的模块不行。 通过这种布局，生态系统中的大多数的包都可以正常工作。 但是，如果某些工具仅在提升的依赖项位于根目录的 node_modules 时才有效，您可以将其设置为 true 来为您提升它们。

### Monorepo
整个工程的代码组织采用 `Monorepo` 的组织方式，使用工具 `pnpm + workspace` 来实现。所以全部项目都是放在一个仓库里的，包括文档、组件。

为了我们各个项目之间能够互相引用我们要新建一个pnpm-workspace.yaml文件将我们的包关联起来
```js
packages:
    - 'packages/**'
    - 'examples'
    - 'docs'
```
根据上面的目录结构很显然你在根目录下新`packages`、`docs`和`examples`文件夹，`packages`文件夹存放我们开发的包，`docs`文件夹存放我们的开发文档,`examples`用来调试我们的组件

## 基本依赖环境


### 安装依赖

```sh
pnpm i vue@next typescript less -D -w
```
`-w`的意思是扁平化`node_modules`,使项目中的每个地方都可以引用

安装配置`ts`

```sh
npx tsc --init
```

### vue项目初始化
我们需要在`examples`文件夹小创建一个新的`vue`项目，用来展示后面我们开发的组件库；

进入`examples`文件夹，并用命名初始化项目
```sh
pnpm init
```
然后分别创建相关文件:`index.html`、`main.ts`、`app.vue`、`typings/vue-shim.d.ts`

`index.html`文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hcl-ui</title>
</head>
<body>
    <div id="app"></div>
    <script src="main.ts" type="module"></script>
</body>
</html>
```
创建`typings/vue-shim.d.ts`,一遍对`.vue`类型的支持
```ts
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
```
创建`app.vue`
```html
<template>
    <div>
        hcl-ui
    </div>
</template>
```

`main.ts`文件
```ts
import { createApp } from 'vue';
import App from './app.vue'
// 挂载app
createApp(App).mount('#app')
```
以上项目基础文件创建完毕，接下来需要测试一下项目能否正常启动运行

需要在`package.json`中增加启动命令,然后执行`pnpm run dev`则启动测试项目（注意项目启动需要使用`pnpm`）

```json
"scripts": {
    "dev": "vite"
},
```
