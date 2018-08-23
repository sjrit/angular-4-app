import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'control-messages',
  template: `
    <div *ngIf="errorMessage !== null" class="feedback invalid-feedback">
      {{ errorMessage }}
    </div>
  `
})

export class ControlMessages {

  @Input() control: FormControl;
  @Input() submitted: boolean = false;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.submitted)) {
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': `This field is required.`,
      'minlength': `This field must be at least ${validatorValue.requiredLength} characters.`,
      'maxlength': `This field may not be greater than ${validatorValue.requiredLength} characters.`,
      'exactLength': `This field must be ${validatorValue.requiredLength} characters long`,
      'email': `This field must be a valid email address.`,
      'notEmpty': `This field must not be empty.`,
    };

    return config[validatorName];
  }

}
