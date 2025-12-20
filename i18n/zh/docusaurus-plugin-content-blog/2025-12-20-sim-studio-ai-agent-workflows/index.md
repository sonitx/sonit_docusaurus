---
title: "Sim Studio：几分钟内构建 AI Agent 工作流"
description: "了解 Sim Studio 如何帮助开发者和团队以可视化方式设计、部署和管理 AI Agent 工作流，支持 Copilot、向量数据库以及自托管 AI 模型（如 Ollama 和 vLLM）。"
author: "sonit"
date: "2025-12-20"
updated: "2025-12-20"
tags: ["AI workflows","Next.js","open-source","Copilot","Ollama","vLLM","pgvector"]
slug: "sim-studio-ai-agent-workflow"
canonical_url: "https://sonit.me/sim-studio-ai-agent-workflow"
og_title: "Sim Studio：几分钟内构建 AI Agent 工作流"
og_description: "探索 Sim Studio——一个开源平台，用于可视化构建 AI 工作流，集成 Copilot、向量数据库和本地 AI 模型。"
og_image: "https://sim.ai/assets/og-image.jpg"
twitter_card: "summary_large_image"
twitter_title: "Sim Studio：几分钟内构建 AI Agent 工作流"
twitter_description: "使用 Sim Studio 可视化设计和部署 AI 工作流，支持 Copilot、向量数据库和自托管 AI 模型。"
---

# Sim Studio：几分钟内构建 AI Agent 工作流

> **摘要：** Sim Studio 是一个开源平台，让您可以以可视化方式设计、部署和管理 AI Agent 工作流。它内置 Copilot、向量数据库，并支持自托管 AI 模型（如 Ollama 和 vLLM），帮助开发团队轻松实现智能自动化，无需复杂编码。

<!-- truncate -->

---

## 目录
- [概述](#概述)
- [核心功能](#核心功能)
- [为什么选择 Sim Studio](#为什么选择-sim-studio)
- [快速开始](#快速开始)
- [使用示例](#使用示例)
- [架构](#架构)
- [配置](#配置)
- [性能与基准测试](#性能与基准测试)
- [质量与CI/CD](#质量与cicd)
- [路线图与社区](#路线图与社区)
- [常见问题](#常见问题)
- [参考资料](#参考资料)

---

## 概述

Sim Studio 是一个 **AI 工作流构建器**，专为速度和灵活性而设计。无论您是在构建聊天机器人、自动化文档处理，还是集成企业工具，Sim 都提供 **可视化画布** 来连接 Agent、工具和逻辑模块。它支持 **云托管** 和 **自托管** 部署，适合初创公司、企业和需要数据控制的开发者。

---

## 核心功能

- **可视化工作流构建器：** 基于 ReactFlow 的拖拽界面。
- **Copilot 集成：** 使用自然语言生成节点并修复错误。
- **向量数据库支持：** 上传文档并启用语义搜索（pgvector）。
- **自托管选项：** 使用 Docker、NPM 或 Dev Containers 本地运行。
- **本地 AI 模型：** 使用 Ollama 或 vLLM，无需外部 API。
- **可扩展模块：** 包括 Agent、API 调用、循环、并行执行等。
- **安全认证：** 集成 Better Auth 和加密密钥。
- **技术栈：** Next.js、Bun、PostgreSQL + Drizzle ORM、Tailwind CSS、Zustand。

---

## 为什么选择 Sim Studio？

传统 AI 工作流开发面临：
- 编写复杂的编排代码。
- 管理多个 API 和依赖。
- 手动处理认证和数据安全。

Sim Studio 解决方案：
- 提供 **可视化画布**，简化工作流设计。
- 内置 **AI 模型和向量数据库**。
- 支持 **自托管部署**，完全控制数据。

---

## 快速开始

### 云托管
访问 https://sim.ai 即可开始。

### 自托管选项

#### **选项 1：NPM**
#code_block
npx simstudio
#end_code_block
访问地址：`http://localhost:3000`

#### **选项 2：Docker Compose**
#code_block
git clone https://github.com/simstudioai/sim.git
cd sim
docker compose -f docker-compose.prod.yml up -d
#end_code_block

#### **选项 3：本地模型（Ollama）**
#code_block
docker compose -f docker-compose.ollama.yml --profile setup up -d
docker compose -f docker-compose.ollama.yml exec ollama ollama pull llama3.1:8b
#end_code_block

---

## 使用示例

- **客户支持机器人：** 结合 GPT Agent 和知识检索模块。
- **数据管道自动化：** 使用 Snowflake 模块进行查询和处理。
- **Webhook 触发器：** 向外部服务发送 HTTP 请求。
- **Discord 集成：** 从 Discord 事件触发工作流（即将推出）。

---

## 架构

Sim 使用 **Turborepo 单体仓库**，主要组件：
- **前端：** Next.js + App Router。
- **后端：** Bun + PostgreSQL + pgvector。
- **实时通信：** Socket.io。
- **工作流引擎：** 支持循环、并行分支、触发器。
- **Copilot 服务：** AI 辅助工作流生成。
- **认证：** Better Auth，支持工作区权限。

---

## 配置

关键环境变量：
- `DATABASE_URL` – PostgreSQL 连接字符串。
- `BETTER_AUTH_SECRET` – 使用 `openssl rand -hex 32` 生成。
- `NEXT_PUBLIC_APP_URL` – 公共访问 URL。
- `ENCRYPTION_KEY` – 加密密钥。
- 可选：`OLLAMA_URL`、`VLLM_BASE_URL`、`COPILOT_API_KEY`。

---

## 性能与基准测试

Sim 使用 **pgvector** 提供快速语义搜索，并通过 **Bun** 优化后端性能。Docker 部署确保环境一致性。

---

## 质量与 CI/CD

- **代码检查与预构建验证：** 确保代码质量。
- **自动迁移：** Drizzle ORM 管理数据库更新。
- **测试：** 包含单元测试和集成测试。

---

## 路线图与社区

- **即将推出功能：** 运行时变量更新、Discord 触发器、增强 CLI。
- **贡献指南：** https://github.com/simstudioai/sim/blob/main/.github/CONTRIBUTING.md。
- **许可证：** Apache 2.0。

加入社区：
- https://discord.gg/Hr4UWYEcTT
- https://x.com/simdotai

---

## 常见问题

1. **可以不使用外部 API 吗？**  
可以，使用 Ollama 或 vLLM 本地推理。

2. **支持企业 SSO 吗？**  
支持，通过 Better Auth 和 OAuth 配置。

3. **Docker 构建失败怎么办？**  
检查代码 lint 或禁用预构建检查（参考 issue #1204）。

4. **如何集成自定义工具？**  
使用 MCP 服务器或通过 SDK 创建模块。

5. **有 VPS 部署指南吗？**  
社区已有方案，官方文档即将发布。

---

## 参考资料

- https://docs.sim.ai
- https://github.com/simstudioai/sim
- https://github.com/pgvector/pgvector
- https://ollama.ai
- https://docs.vllm.ai

---
