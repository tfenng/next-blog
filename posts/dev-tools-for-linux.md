---
title: 'developing tools initial for Ubuntu 24'
date: '2025-06-12'
---

## 基础软件包(国内网络环境)

- 安装所需软件包、添加Docker阿里云仓库及GPG密钥
- 装最新版本的Docker CE、将普通用户添加进docker组

```bash

sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt install docker-ce
sudo usermod -aG docker ${USER}
sudo chmod a+rw /var/run/docker.sock 
```

## 编程语言|包管理
- rust && cargo
- nvm
- pipx && uv

```bash
curl https://sh.rustup.rs -sSf | sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

sudo apt install pipx && pipx install uv
```
