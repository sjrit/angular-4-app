import { FormControl } from '@angular/forms';

export class CustomValidator {

	static isEmptyInputValue(value) {
        return value == null || (typeof value === 'string' && value.length === 0) ||
            (
                Object.prototype.toString.call( value ) === '[object Array]' &&
                value.length === 0
            );
	}

    static notEmpty(control: FormControl) {
        return (CustomValidator.isEmptyInputValue(control.value)) ?
            { notEmpty: true } :
            null;
    }

	// Valdiates email
	static email(control: FormControl) {
        let EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!control.value) {
            return null;
        }

        return EMAIL_REGEXP.test(control.value) ? null : {
            email: true
        };
	}

	// Valdiates exact length
    static exactLength = (length: number) => {
        return (control: FormControl) => {
        if(CustomValidator.isEmptyInputValue(control.value)) {
            return null;
        }

        let actualLength = control.value.toString().length;
        return actualLength === length ?
            null :
            {
                'exactLength': {
                    'requiredLength': length,
                    'actualLength': actualLength
                }
            };
        }
    }

    static minlength = (length: number) => {
        return (control: FormControl) => {
        if(CustomValidator.isEmptyInputValue(control.value)) {
            return null;
        }

        let actualLength = control.value.toString().length;
        return actualLength >= length ?
            null :
            {
                'minlength': {
                    'requiredLength': length,
                    'actualLength': actualLength
                }
            };
        }
    }

}
