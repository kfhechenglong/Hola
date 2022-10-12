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
