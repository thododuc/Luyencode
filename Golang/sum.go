package main

import "fmt"

var m = make(map[int]int, 0)

func fib(n int) int {
	if n < 2 {
		return n
	}

	var f int
	if v, ok := m[n]; ok {
		f = v
	} else {
		f = fib(n-2) + fib(n-1)
		m[n] = f
	}
	return f
}

func main() {
	args := []int{5, 1, 9, 98, 6}
	for _, n := range args {
		x := fib(n)
		fmt.Printf("fib(%d) = %d\n", n, x)
	}
}
