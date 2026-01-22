# 项目部署指南 - Ubuntu服务器

## 前置准备

### 1. 本地构建项目

在本地项目目录下执行：

```bash
# 安装依赖（如果还没安装）
npm install

# 构建生产版本
npm run build
```

构建完成后，会在项目根目录生成 `build` 文件夹，这就是需要上传到服务器的文件。

### 2. 准备服务器连接信息

确保你有：
- 服务器IP地址
- SSH用户名（通常是 `root` 或 `ubuntu`）
- SSH密码或私钥

---

## 服务器端操作

### 步骤1：连接到服务器

使用SSH连接到你的Ubuntu服务器：

```bash
ssh username@your_server_ip
# 例如：ssh root@123.456.789.0
```

### 步骤2：更新系统包

```bash
sudo apt update
sudo apt upgrade -y
```

### 步骤3：安装Nginx

```bash
sudo apt install nginx -y
```

启动Nginx并设置开机自启：

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

检查Nginx状态：

```bash
sudo systemctl status nginx
```

### 步骤4：创建网站目录

```bash
# 创建网站根目录
sudo mkdir -p /var/www/web_demo

# 设置权限（根据你的SSH用户调整）
sudo chown -R $USER:$USER /var/www/web_demo
sudo chmod -R 755 /var/www/web_demo
```

### 步骤5：上传构建文件

**方法一：使用SCP命令（从本地Windows PowerShell）**

在本地项目目录下执行：

```powershell
# 先构建项目
npm run build

# 上传build文件夹到服务器
scp -r build/* username@your_server_ip:/var/www/web_demo/
```

**方法二：使用SFTP工具（推荐）**

使用WinSCP、FileZilla等工具：
- 主机：你的服务器IP
- 端口：22
- 用户名：你的SSH用户名
- 密码：你的SSH密码

连接到服务器后，将本地 `build` 文件夹内的所有文件上传到 `/var/www/web_demo/` 目录。

**方法三：使用Git（如果服务器已安装Git）**

```bash
# 在服务器上
cd /var/www
sudo git clone your_repo_url web_demo
cd web_demo
npm install
npm run build
sudo mv build/* /var/www/web_demo/
```

### 步骤6：配置Nginx

创建Nginx配置文件：

```bash
sudo nano /etc/nginx/sites-available/web_demo
```

将以下配置粘贴进去（根据实际情况修改域名或IP）：

```nginx
server {
    listen 80;
    server_name your_domain.com your_server_ip;  # 替换为你的域名或IP

    root /var/www/web_demo;
    index index.html;

    # React Router支持 - 所有路由都返回index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
}
```

保存并退出（Ctrl+X，然后Y，然后Enter）

### 步骤7：启用站点配置

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/web_demo /etc/nginx/sites-enabled/

# 删除默认配置（可选）
sudo rm /etc/nginx/sites-enabled/default

# 测试Nginx配置
sudo nginx -t

# 重新加载Nginx
sudo systemctl reload nginx
```

### 步骤8：配置防火墙（如果启用了UFW）

```bash
# 允许HTTP和HTTPS
sudo ufw allow 'Nginx Full'
# 或者只允许HTTP
sudo ufw allow 'Nginx HTTP'

# 检查防火墙状态
sudo ufw status
```

---

## 验证部署

1. 在浏览器中访问：`http://your_server_ip` 或 `http://your_domain.com`
2. 检查所有页面路由是否正常工作
3. 检查静态资源（图片、CSS、JS）是否正常加载

---

## 常见问题排查

### 1. 无法访问网站

```bash
# 检查Nginx是否运行
sudo systemctl status nginx

# 检查端口是否被占用
sudo netstat -tulpn | grep :80

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log
```

### 2. 403 Forbidden错误

```bash
# 检查文件权限
ls -la /var/www/web_demo

# 确保Nginx有读取权限
sudo chown -R www-data:www-data /var/www/web_demo
sudo chmod -R 755 /var/www/web_demo
```

### 3. 路由404错误

确保Nginx配置中有 `try_files $uri $uri/ /index.html;` 这一行。

### 4. 静态资源404

检查文件是否完整上传，特别是 `static` 文件夹。

---

## 后续优化（可选）

### 1. 配置HTTPS（使用Let's Encrypt）

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取SSL证书（需要域名）
sudo certbot --nginx -d your_domain.com
```

### 2. 配置域名解析

如果使用域名，需要在域名服务商处添加A记录，指向服务器IP。

### 3. 性能优化

- 启用Nginx缓存
- 配置CDN
- 压缩静态资源

---

## 更新部署流程

当代码更新后，重复以下步骤：

1. 本地构建：`npm run build`
2. 上传新的 `build` 文件夹内容到服务器
3. 重新加载Nginx：`sudo systemctl reload nginx`

---

## 快速命令参考

```bash
# 查看Nginx状态
sudo systemctl status nginx

# 重启Nginx
sudo systemctl restart nginx

# 重新加载配置（不中断服务）
sudo systemctl reload nginx

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log

# 查看访问日志
sudo tail -f /var/log/nginx/access.log
```
