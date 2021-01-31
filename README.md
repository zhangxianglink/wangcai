# ww-dog

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

+ 关于文件目录的讲解
  1. Public 存放静态文件
  2. src.assets 存放图片
  3. src.componments 存放组件
  4. Src.router 路由
  5. src. views 最外层的页面
  6. main.js 是界面的入口
  7. Test 测试代码
  8. Vue.config.js 相当于webpage 的配置文件。 

+ 插件
  1. Vetur and  Vue VSCode Snippets

+ import alias
  1. ts/js可以使用@/路径名引入依赖，@代表src目录
  2. scss ~@/路径名引入依赖
  2. 个人感觉不如自己写相对路径

+ eslint ignore
  1. /* eslint-disable */
  2. https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md