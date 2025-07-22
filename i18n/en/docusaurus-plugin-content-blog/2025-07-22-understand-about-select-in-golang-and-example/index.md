---
slug: 2025-07-22-understand-about-select-in-golang-and-example
title: Understanding select in Golang with examples
authors: [sonit]
tags: [architect, golang]
---

`select` in Go does only one thing: wait for multiple channels at once and take action on the first one that is ready.

In other words, select is a channel-specific switch-case.

<!-- truncate -->

## 1. Minimal Syntax

```go
select {
case v := <-ch1:          // receive from ch1
    fmt.Println("got", v, "from ch1")
case ch2 <- 42:           // send to ch2
    fmt.Println("sent 42 to ch2")
default:                  // run immediately if none of the cases ready => non-blocking
    fmt.Println("no channel ready")
}
```

## 2. What is it used for?

- Multiplexing I/O: combine multiple event sources into 1 goroutine.

- Timeout / cancellation: combine time.After.

- Non-blocking send/recv: use default.

- Fairness (randomization): if multiple cases are ready, Go chooses randomly (not in order).

## 3. Real-world example – “Fan-in” multiple sensors to 1 aggregator

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

Explanation:

- 2 goroutines send continuously to temp and humid.

- select waits; whoever has the data first prints it out – we don't need complicated locks or buffers.

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
    // sent successfully
default:
    // channel full, skip or log
}
```

## 6. Summary

- No need to break; select only executes 1 case and then ends (like switch).

- If you want to repeat, wrap it in for.

- select is a traffic controller for the channel – helps goroutine wait for multiple streams of data without blocking each other.