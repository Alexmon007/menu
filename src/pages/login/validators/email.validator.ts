/**
 * Created by alexc on 10/3/2017.
 */
import { FormControl } from '@angular/forms';

export class CustomValidator {

  static isEmailValid(control: FormControl){
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      .test(control.value);

    if (re){
      return null;
    }

    return {
      "invalidEmail": true
    };
  }
}
