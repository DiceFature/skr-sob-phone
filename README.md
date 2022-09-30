## 简介

初始项目已经安装好一些前期的依赖

- react-router-dom
- axios
- antd
- sass


## 要求

1. 请使用TypeScript、SCSS编写项目
2. 样式编写请注意不要影响其他分支的开发人员
3. 所有的请求请写在`Api/api.ts`文件下(已经对axios进行二次封装，有使用规范demo)
4. 静态资源放在assets文件
5. 公共样式已经在themes文件下，已经引入`all.scss`全局样式和全局样式变量
6. 属于自己分支的页面样式请以文件夹形式放在themes文件
7. 组件放在`components`文件下
8. 文件引入可以不使用相对路径实例：`import xxx from 'Api/api.ts';`(就是可以不用..相对路径查找)

## 分支

- master 主分支
- develop 开发测试分支
- dev-xxx
- ...待定

## 上传流程

将代码克隆下来之后创建新的属于你的开发分支，在当前分支开发代码。使用指令`git push origin 分支名`,这样就会将你的代码上传到远程的‘分支名’分支，后续合并交给管理员

