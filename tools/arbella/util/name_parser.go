package util

import "strings"

func NameToFirstAndLastName(name string) (firstName, lastName string) {
	names := strings.Split(name, " ")
	firstName = names[0]
	if len(names) > 1 {
		lastName = names[1]
	} else {
		lastName = ""
	}
	return firstName, lastName
}
