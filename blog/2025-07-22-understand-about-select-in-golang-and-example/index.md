---
slug: 2025-07-22-understand-about-select-in-golang-and-example
title: Hiểu về select trong Golang kèm ví dụ minh hoạ
authors: [sonit]
tags: [architect, golang]
---

`select` trong Go chỉ làm một việc duy nhất: chờ (ngắn gọn – wait) nhiều channel cùng lúc và thực hiện hành động với cái sẵn sàng đầu tiên.

Nói cách khác, select là switch-case dành riêng cho channel.

<!-- truncate -->

## 1. Cú pháp tối thiểu

```go
select {
case v := <-ch1:          // nhận từ ch1
    fmt.Println("got", v, "from ch1")
case ch2 <- 42:           // gửi vào ch2
    fmt.Println("sent 42 to ch2")
default:                  // chạy ngay nếu không case nào ready => non-blocking
    fmt.Println("no channel ready")
}
```

## 2. Dùng để làm gì?

- Multiplexing I/O: gộp nhiều nguồn sự kiện thành 1 goroutine.
- Timeout / cancellation: kết hợp time.After.
- Non-blocking send/recv: nhờ default.
- Fairness (randomization): nếu nhiều case cùng sẵn sàng, Go chọn ngẫu nhiên (không phải theo thứ tự).

## 3. Ví dụ thực tế – “Fan-in” nhiều sensor về 1 aggregator

```go
package main

import (
    "fmt"
    "time"
)

func sensor(name string, ch chan<- string) {
    for i := 0; ; i++ {
        ch <- fmt.Sprintf("%s-%d", name, i)
        time.Sleep(time.Duration(200+i*50) * time.Millisecond)
    }
}

func main() {
    temp := make(chan string)
    humid := make(chan string)

    go sensor("temp", temp)
    go sensor("humid", humid)

    for {
        select {
        case v := <-temp:
            fmt.Println("Temperature:", v)
        case v := <-humid:
            fmt.Println("Humidity:", v)
        }
    }
}
```

Giải thích:

- 2 goroutine gửi liên tục vào temp và humid.
- select chờ; ai có dữ liệu trước thì in ra – ta không cần lock hay buffer phức tạp.

## 4. Timeout pattern

```go
select {
case data := <-ch:
    process(data)
case <-time.After(3 * time.Second):
    fmt.Println("timeout, abort")
}
```

## 5. Non-blocking send

```go
select {
case ch <- value:
    // gửi thành công
default:
    // kênh đầy, bỏ qua hoặc log
}
```

## 6. Tóm tắt

- Không cần break; select chỉ thực hiện đúng 1 case rồi kết thúc (giống switch).
- Nếu muốn lặp lại, bọc trong for.
- select là bộ điều hướng giao thông cho channel – giúp goroutine chờ nhiều luồng dữ liệu mà không block lẫn nhau.
