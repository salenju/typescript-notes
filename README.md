# 01 辅助插件 + 配置文件

## 1.全局安装TypeScript

```
npm install -g typescript
```



## 2.配置文件(自动转换`.ts`文)

```
tsc --init
```

执行上面的代码会在根目录下生产`tsconfig.json`文件

```json
// tsconfig.json
{
  "compilerOptions": {
     "target": "es5",
     "module": "commonjs",
      "strict": true,   
      "esModuleInterop": true 
  }
}
```

在VSCode命令行中输入下面的命令，则可以将项目中所有的`.ts`文件转换为`.js`文件

```
tsc
```



### 3.安装VSCode辅助插件

- **Live Server**:热更新，即代码修改保存后自动更新至浏览器一打开的页面中
- **TypeScript Auto Compilermor**:TypeScript自动编译，即`.ts`文件保存后自动编译成`.js`文件

