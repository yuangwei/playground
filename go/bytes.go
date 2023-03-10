package main

import "fmt"

func runBytes() {
	s := rune("Helloworld")
	for k, v := range s {
		fmt.Println(k, v)
	}
}
