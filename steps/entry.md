## entry

> 配置模块的入口，可抽象成输入，webpack执行构建的第一步将从入口开始搜寻及递归解析出所有入口依赖的模块

#### context

webpack在寻找相对路径的文件时会以`context`为根目录，默认为执行启动webpack时所在的当前工作目录

**必须是一个绝对路径的字符串**

Entry的路径和其依赖的模块的路径可能采用相对于`context`的路径来描述



## output

#### filename[type:string]

配置输出文件的名称，如果只有一个输出文件，则可以写成静态不变的

##### 内置变量

| 变量名       | 含义               |
| --------- | ---------------- |
| id        | Chunk的唯一标识，从0开始  |
| name      | Chunk的名称         |
| hash      | Chunk的唯一标识的Hash值 |
| chunkhash | Chunk内容的Hash值    |

### 配置devServer

##### inline

是否自动注入代理客户端到将运行的页面里的chunk中去，默认自动注入，如果关闭，则通过iframe的方式去运行要开发的网页

##### contentBase

配置DevServer HTTP服务器的文件根目录，默认情况为当前执行目录



### 优化

##### 优化loader

```jsx
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory'],
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
}
```

##### 优化resolve配置

```jsx
module.exports = {
    resolve: [
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
        modules: [path.resolve(__dirname, 'node_modules')],
        // 后缀尝试列表要尽可能的小，
        // 频率出现最高的文件后缀优先
        // 源码中写导入语句时，要尽可能的带上后缀
        extensions: ['.js', '.json']
    ]
}
```

##### 优化noParse

可以让webpack忽略对部分没有采用模块化文件的递归解析处理，提高构建性能

#### DllPlugin（动态链接库）

- 抽离网页依赖的基础模块，打包到一个个单独的动态链接库中

- 当需要导入的模块存在于某个动态链接库中，这个模块不能被再次打包，而是去动态链接库中获取

- 页面依赖的所有动态链接库需要被加载

为什么会大大提示构件速度？原因在于包含大量复用模块的动态链接库只需要编译一次

#### HappyPack

> 分解任务给多个子进程去并发执行，子进程处理完后再把结果发给主进程


