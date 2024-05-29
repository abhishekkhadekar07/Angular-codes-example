import { CommonModule } from '@angular/common';
import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-box-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textbox-component.component.html',
  styleUrl: './textbox-component.component.scss',
})
export class TextBoxNewComponent {
  @Input() formGroupParent!: any;
  @Input() formGroupControlName!: string;
  @Input() config: any;
  @Output() onChange = new EventEmitter();
  @Output() onInput = new EventEmitter();



  control?: FormControl;
  isError = false;
  id = this.generateRandom3DigitString();

  ngOnInit() {
    if (this.formGroupControlName) {
      this.control = <FormControl>(
        this.formGroupParent?.get(this.formGroupControlName || '')
      );
    }
  }

  hasError(
    controlName: string,
    errorName: string,
    validateOnStart: boolean
  ): boolean {
    let control = this.formGroupParent.controls[controlName];
    if (validateOnStart) {
      return control.hasError(errorName);
    }
    if (control.touched) {
      return control.hasError(errorName);
    }
    return false;
  }

  isControlInvalid(
    controlName: string,
    param: string,
    validateOnStart: boolean
  ) {
    let control = this.formGroupParent.controls[controlName];
    if (param === 'error') {
      if (validateOnStart) {
        return control.valid;
      }
      if (control.touched) {
        return control.valid;
      } else {
        return true;
      }
    } else if (param === 'success') {
      if (validateOnStart) {
        return control.valid;
      }
      if (control.touched) {
        return control.valid;
      } else {
        return false;
      }
    }
  }

  generateRandom3DigitString(): string {
    const randomNumber = Math.floor(Math.random() * 1000);
    const stringValue = randomNumber.toString().padStart(3, '0');
    return stringValue;
  }

  handleInput(e: any) {
    if (this.onInput) {
      this.onInput.emit(e);
    }
  }


  handleChange(event: any) {
    if (this.onChange) {
      this.onChange.emit(event);
    }
  }}
