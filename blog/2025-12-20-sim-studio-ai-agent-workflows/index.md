---
title: "Sim Studio: Xây dựng quy trình AI Agent trong vài phút"
description: "Khám phá cách Sim Studio giúp nhà phát triển thiết kế, triển khai và quản lý quy trình AI agent trực quan với Copilot, cơ sở dữ liệu vector và mô hình AI tự lưu trữ như Ollama và vLLM."
author: [sonit]
date: 2025-12-20
updated: 2025-12-20
tags: ["AI workflows","Next.js","open-source","Copilot","Ollama","vLLM","pgvector"]
slug: "sim-studio-quy-trinh-ai-agent"
canonical_url: "https://sonit.me/sim-studio-quy-trinh-ai-agent"
og_title: "Sim Studio: Xây dựng quy trình AI Agent trong vài phút"
og_description: "Khám phá Sim Studio—nền tảng mã nguồn mở để xây dựng quy trình AI trực quan, tích hợp Copilot, cơ sở dữ liệu vector và mô hình AI cục bộ."
og_image: "https://sim.ai/assets/og-image.jpg"
twitter_card: "summary_large_image"
twitter_title: "Sim Studio: Xây dựng quy trình AI Agent trong vài phút"
twitter_description: "Thiết kế và triển khai quy trình AI trực quan với Sim Studio. Hỗ trợ Copilot, cơ sở dữ liệu vector và mô hình AI tự lưu trữ."
---

# Sim Studio: Xây dựng quy trình AI Agent trong vài phút

> **Tóm tắt:** Sim Studio là nền tảng mã nguồn mở cho phép bạn thiết kế, triển khai và quản lý quy trình AI agent trực quan. Với hỗ trợ Copilot, cơ sở dữ liệu vector và mô hình AI tự lưu trữ như Ollama và vLLM, Sim giúp đội ngũ phát triển tạo tự động hóa thông minh mà không cần mã phức tạp.

---

## Mục lục
- [Tổng quan](#tong-quan)
- [Tính năng nổi bật](#tinh-nang-noi-bat)
- [Tại sao chọn Sim Studio?](#tai-sao-chon-sim-studio)
- [Hướng dẫn nhanh](#huong-dan-nhanh)
- [Ví dụ sử dụng](#vi-du-su-dung)
- [Kiến trúc](#kien-truc)
- [Cấu hình](#cau-hinh)
- [Hiệu năng & Benchmark](#hieu-nang--benchmark)
- [Chất lượng & CI/CD](#chat-luong--cicd)
- [Lộ trình & Cộng đồng](#lo-trinh--cong-dong)
- [FAQ](#faq)
- [Tài liệu tham khảo](#tai-lieu-tham-khao)

---

## Tổng quan

Sim Studio là **trình xây dựng quy trình AI** được thiết kế cho tốc độ và tính linh hoạt. Dù bạn đang tạo chatbot, tự động hóa xử lý tài liệu hay tích hợp công cụ doanh nghiệp, Sim cung cấp **canvas trực quan** để kết nối agent, công cụ và khối logic. Hỗ trợ triển khai **cloud-hosted** và **self-hosted**, phù hợp cho startup, doanh nghiệp và nhà phát triển yêu cầu kiểm soát dữ liệu.

---

## Tính năng nổi bật

- **Trình thiết kế trực quan:** Giao diện kéo-thả dựa trên ReactFlow.
- **Tích hợp Copilot:** Tạo node và sửa lỗi bằng ngôn ngữ tự nhiên.
- **Hỗ trợ cơ sở dữ liệu vector:** Tải tài liệu và tìm kiếm ngữ nghĩa với pgvector.
- **Tùy chọn tự lưu trữ:** Chạy cục bộ với Docker, NPM hoặc Dev Containers.
- **Mô hình AI cục bộ:** Sử dụng Ollama hoặc vLLM để suy luận mà không cần API bên ngoài.
- **Khối mở rộng:** Bao gồm agent, gọi API, vòng lặp, thực thi song song.
- **Bảo mật & xác thực:** Tích hợp Better Auth với khóa mã hóa.
- **Stack công nghệ:** Next.js, Bun runtime, PostgreSQL + Drizzle ORM, Tailwind CSS, Zustand.

---

## Tại sao chọn Sim Studio?

Phát triển quy trình AI truyền thống thường gặp khó khăn:
- Viết mã orchestration phức tạp.
- Quản lý nhiều API và phụ thuộc.
- Xử lý xác thực và bảo mật dữ liệu thủ công.

Sim Studio giải quyết bằng cách:
- Cung cấp **canvas trực quan** để thiết kế quy trình.
- Tích hợp sẵn **mô hình AI và cơ sở dữ liệu vector**.
- Hỗ trợ **triển khai tự lưu trữ** để kiểm soát hoàn toàn dữ liệu.

---

## Hướng dẫn nhanh

### Cloud-Hosted
Truy cập [sim.ai](https://sim.ai) để bắt đầu ngay.

### Tự lưu trữ

#### **Tùy chọn 1: NPM**
```
npx simstudio
```
Truy cập tại: `http://localhost:3000`

#### **Tùy chọn 2: Docker Compose**
```
git clone https://github.com/simstudioai/sim.git
cd sim
docker compose -f docker-compose.prod.yml up -d
```

#### **Tùy chọn 3: Mô hình cục bộ với Ollama**
```
docker compose -f docker-compose.ollama.yml --profile setup up -d
docker compose -f docker-compose.ollama.yml exec ollama ollama pull llama3.1:8b
```

---

## Ví dụ sử dụng

- **Bot hỗ trợ khách hàng:** Kết hợp agent GPT với khối truy xuất kiến thức.
- **Tự động hóa pipeline dữ liệu:** Sử dụng khối Snowflake để truy vấn và xử lý.
- **Webhook Trigger:** Gửi yêu cầu HTTP đến dịch vụ bên ngoài.
- **Tích hợp Discord:** Kích hoạt quy trình từ sự kiện Discord (sắp ra mắt).

---

## Kiến trúc

Sim sử dụng **monorepo** với Turborepo. Thành phần chính:
- **Frontend:** Next.js với App Router.
- **Backend:** Bun runtime + PostgreSQL + pgvector.
- **Realtime:** Socket.io cho cập nhật trực tiếp.
- **Workflow Engine:** Điều phối vòng lặp, nhánh song song, trigger.
- **Copilot Service:** Hỗ trợ tạo quy trình bằng AI.
- **Xác thực:** Better Auth với phân quyền theo workspace.

---

## Cấu hình

Biến môi trường quan trọng:
- `DATABASE_URL` – Chuỗi kết nối PostgreSQL.
- `BETTER_AUTH_SECRET` – Tạo bằng `openssl rand -hex 32`.
- `NEXT_PUBLIC_APP_URL` – URL công khai.
- `ENCRYPTION_KEY` – Khóa mã hóa.
- Tùy chọn: `OLLAMA_URL`, `VLLM_BASE_URL`, `COPILOT_API_KEY`.

---

## Hiệu năng & Benchmark

Sim tận dụng **pgvector** cho tìm kiếm ngữ nghĩa nhanh và **Bun runtime** cho hiệu suất tối ưu. Triển khai Docker đảm bảo môi trường nhất quán.

---

## Chất lượng & CI/CD

- **Linting & kiểm tra trước build:** Đảm bảo chất lượng mã.
- **Tự động migration:** Drizzle ORM xử lý cập nhật schema.
- **Kiểm thử:** Bao gồm unit và integration test.

---

## Lộ trình & Cộng đồng

- **Tính năng sắp tới:** Cập nhật biến runtime, trigger Discord, CLI nâng cao.
- **Đóng góp:** Xem [Hướng dẫn đóng góp](https://github.com/simstudioai/sim/blob/main/.github/CONTRIBUTING.md).
- **Giấy phép:** Apache 2.0.

Tham gia cộng đồng:
- [Discord](https://discord.gg/Hr4UWYEcTT)
- [Twitter](https://x.com/simdotai)

---

## FAQ

1. **Có thể chạy Sim mà không cần API bên ngoài?**  
Có, sử dụng Ollama hoặc vLLM cho suy luận cục bộ.

2. **Sim có hỗ trợ SSO doanh nghiệp?**  
Có, thông qua Better Auth và cấu hình OAuth.

3. **Nếu Docker build lỗi?**  
Kiểm tra lỗi lint hoặc tắt kiểm tra prebuild (xem issue #1204).

4. **Tích hợp công cụ tùy chỉnh thế nào?**  
Dùng MCP server hoặc tạo block qua SDK.

5. **Có hướng dẫn triển khai VPS không?**  
Hiện có công thức cộng đồng, tài liệu chính thức sẽ sớm ra mắt.

---

## Tài liệu tham khảo

- [Tài liệu chính thức](https://docs.sim.ai)
- [Kho GitHub](https://github.com/simstudioai/sim)
- [pgvector](https://github.com/pgvector/pgvector)
- [Ollama](https://ollama.ai)
- [vLLM](https://docs.vllm.ai)

---

## JSON-LD Schema

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sim Studio: Xây dựng quy trình AI Agent trong vài phút",
  "description": "Khám phá cách Sim Studio giúp nhà phát triển thiết kế, triển khai và quản lý quy trình AI agent trực quan với Copilot, cơ sở dữ liệu vector và mô hình AI tự lưu trữ như Ollama và vLLM.",
  "author": {
    "@type": "Person",
    "name": "sonit"
  },
  "datePublished": "2025-12-20",
  "dateModified": "2025-12-20",
  "image": "https://sim.ai/assets/og-image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Sim Studio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sim.ai/assets/logo.png"
    }
  }
}
</script>
