# 南京工业大学国家大学科技园 - 网站复刻

这是南京工业大学国家大学科技园网站的复刻版本。

## 项目说明

本项目已成功下载了原网站的所有页面和大部分资源：
- ✅ 11个HTML页面已下载
- ✅ CSS样式文件已下载
- ✅ JavaScript文件已下载
- ✅ 大部分图片资源已下载

## 已下载的页面

1. 首页 (index.html)
2. 园区概况 (yqgk.html)
3. 园区新闻 (yqxw.html)
4. 创新创业 (cxcy.html)
5. 企业服务 (qyfw.html)
6. 服务平台 (fwpt.html)
7. 孵化成效 (lacx.html)
8. 园区党建 (yqdj.html)
9. 政策法规 (zcfg.html)
10. 资料下载 (zlxz.html)
11. 联系我们 (lxwm.html)

## 关于图片显示

### 已下载的图片
大部分静态图片资源已经下载到 `public/` 目录：
- `public/dfiles/11680/gydxkjy/img/` - 网站图标、Logo等
- `public/__local/` - 内容图片

### 如果图片无法显示，有以下解决方案：

#### 方案1：使用原网站的图片（推荐-最简单）
HTML文件中的图片路径已经指向原网站，只要能访问原网站就能看到图片。

#### 方案2：批量下载缺失的图片
如果发现某些图片没有显示，可以运行以下脚本：

```bash
# 下载单个图片
curl -o public/路径/图片名.jpg https://sp.njtech.edu.cn/路径/图片名.jpg

# 批量下载（如果有新的图片需要）
# 查看HTML中引用的图片
grep -oE 'src="[^"]*\.(jpg|png|gif)"' public/pages/*.html | cut -d'"' -f2 | sort -u
```

#### 方案3：使用代理服务（处理跨域问题）
如果遇到CORS跨域问题，可以：

1. 在开发环境添加代理配置（已在 `package.json` 中配置）
2. 或使用nginx等服务器进行反向代理

#### 方案4：替换为占位图片
如果某些图片实在无法获取，可以替换为占位图片：
```html
<!-- 示例 -->
<img src="https://via.placeholder.com/800x400?text=图片" alt="占位图片">
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
