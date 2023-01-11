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

### 配置格式化工具

必要的工具是提高开发效率，降低bug率，避免不必要低级错误的重要帮手之一。常见的`Formatter/Linter`工具一般包括`ESLint`、`Prettier`、`StyleLint`等

我们先在`VSCode`中安装相关插件：
- `ESLint`
- `Prettier`
- `StyleLint`
另外为了支持`Vue`语法高亮、语法提示等，我们需要安装Vue3的插件，这里安装`Volar`

然后将插件配置在json文件中`.vscode/extensions.json`，后续别的开发人员打开这个项目时，VSCode就会推荐安装这些插件；

```json
{
    "recommendations": [
        "stylelint.vscode-stylelint",
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint",
        "Vue.volar"
    ]
}
```

#### 配置ESLint

ESLint安装，
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
## 打包文件

### vite打包配置
在使用`vite`进行组件打包之前，我们需要先进行`vite.config.ts`的配置，首先我们在
`packages/components`文件夹下新建`vite.config.ts`配置文件；

对文件设置配置项目：

```ts
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        target: "modules",
        outDir: 'es',
        minify: false,
        // cssCodeSplit: true,
        rollupOptions: {
            // 忽略的打包文件
            external: ['vue'],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir:'es',
                    preserveModulesRoot: 'src'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir: 'lib',
                    preserveModulesRoot: 'src'
                }
            ]
        },
        lib: {
            entry: './index.ts',
            formats: ['es', 'cjs']
        }
    },
    plugins: [
        vue()
    ]
})
```
修改`package.json`，增加以下内容
```json
"build": "vite build",
```
然后运行`pnpm run build`执行打包程序，现在在`components`文件夹下出现了连个打包好的文件目录`es`、`lib`， 现在这两个文件时可以直接被引用的。
### 解决声明文件的问题

现在打包的库还有问题，因为我们是使用的ts，但是打包后并有将声明文件加入，现在我们使用`vite-plugin-dts`插件来解决这个问题；

安装插件

```sh
pnpm install vite-plugin-dts -D -w
```
然后我们修改一下`vite.config.ts`文件,在`plugins`配置项下增加以下内容：

```js
import dts from "vite-plugin-dts";
plugins: [
    vue(),
    dts({
        // 默认会打包到es文件夹下
        tsConfigFilePath: './../../tsconfig.json'
    }),
    dts({
        outputDir: 'lib',
        tsConfigFilePath: './../../tsconfig.json'
    })
]
```
再次执行打包命令`pnpm run build`，现在在`es`、`lib`目录下分别有了`index.d.ts`文件;

## 发布组件

在我们发布组件到npm库之前，需要对`component/package.json`文件做一些修改；
```json
{
  "name": "hcl-org",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "module": "es/index.js",
  "scripts": {
    "build": "vite build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "files": [
    "es",
    "lib"
  ],
  "types": "lib/index.d.ts",
  "keywords": ["ui", "vue-ui"],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@hcl-org/utils": "workspace:^1.0.0"
  }
}
```
### `main`和`module`
其中`main`针对的是传统的CommonJS模块，`module`是针对ESModule环境的支持。
### `files`

`files`是指我们需要发布到`npm`上的目录，因为不可能`components`下的所有目录都被发布上去。

### `typings`

`typings`则是指定声明文件。

### 发布

在`components`目录下执行`pnpm publish --access public`即可发布到`npm`;

## docs文档开发
