package validation

import "github.com/go-playground/validator/v10"

var Validate *validator.Validate

func InitializeValidation() {
	Validate = validator.New(validator.WithRequiredStructEnabled())
}
