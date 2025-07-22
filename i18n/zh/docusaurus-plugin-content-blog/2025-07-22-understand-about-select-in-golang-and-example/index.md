---
slug: 2025-07-22-understand-about-select-in-golang-and-example
title: 通过示例理解 Golang 中的 Select
authors: [sonit]
tags: [architect, golang]
---

Go 中的 `select` 只做一件事：同时等待多个通道，并对第一个可用的通道采取行动。

换句话说，select 是一个特定于通道的 switch-case 语句。

<!-- truncate -->

## 1. 最小语法

```go
select {
case v := <-ch1: // 从 ch1 获取
    fmt.Println("got", v, "from ch1")
case ch2 <- 42: // 发送到 ch2
    fmt.Println("sent 42 to ch2")
default: // 如果所有 case 都未就绪，则立即运行 => 非阻塞
    fmt.Println("no channel ready")
}
```

## 2. 它有什么用途？

- 多路复用 I/O：将多个事件源组合成一个 goroutine。

- 超时/取消：组合 time.After。

- 非阻塞发送/接收：使用默认值。

- 公平性（随机化）：如果多个用例就绪，Go 会随机选择（不按顺序）。

## 3. 真实示例 – 将多个传感器“扇入”到一个聚合器

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
            fmt.Println("温度:", v)
            case v := <-humid:
            fmt.Println("湿度:", v)
        }
    }
}
```

解释：

- 两个 goroutine 连续向 temp 和 humid 发送数据。

- select 等待；先收到数据的 goroutine 会将其打印出来——我们不需要复杂的锁或缓冲区。

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
    // 发送成功
default:
    // 通道已满，跳过或记录
}
```

## 6. 总结

- 无需 break；select 只执行一个 case 语句，然后结束（类似 switch）。

- 如果要重复执行，请将其包装在 for 语句中。

- select 是通道的流量控制器——帮助 Goroutine 等待多个数据流，而不会相互阻塞。
