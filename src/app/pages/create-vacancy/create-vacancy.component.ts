import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent {

  protected titleMaxLength: number = 50;
  protected titleMinLength: number = 6;

  protected descriptionMaxLength: number = 1500;
  protected textAreaLength: number = this.descriptionMaxLength;

  protected titleEmpty: boolean = false;
  protected descriptionEmpty: boolean = false;

  protected isInvalidTitleLength: boolean = false;
  protected titleLength!: number;

  protected coin: number = 50;

  protected form = new FormGroup({
    title: new FormControl('', [Validators.maxLength(this.titleMaxLength), Validators.minLength(this.titleMinLength), Validators.required]),
    description: new FormControl('', [Validators.maxLength(this.descriptionMaxLength), Validators.required])
  })

  public onKeyup(event: Event) {
    this.validateTitleLength();
    this.validateEmpty();
  }

  public onTextArea(event: Event) {
    const description = this.form.get('description')!.value;

    const currentLength: number = description!.length;
    this.textAreaLength = this.descriptionMaxLength - currentLength;
  }

  private validateTitleLength(): void {
    const title = this.form.get('title')!.value;

    if (title && !(title.trim() === '') && (title.length < this.titleMinLength && title.length > 0)) {
      this.titleLength = title.length;
      this.isInvalidTitleLength = true;
    } else {
      this.isInvalidTitleLength = false;
    }
    this.validateEmpty();
  }

  private validateEmpty(): void {
    const title = this.form.get('title')!.value;
    const description = this.form.get('description')!.value;

    if (title?.trim() === '' || !title) {
      this.titleEmpty = true;
    } else {
      this.titleEmpty = false;
    }

    if (description?.trim() === '' || !description) {
      this.descriptionEmpty = true;
    } else {
      this.descriptionEmpty = false
    }
  }

  public onSubmit(): void {
    this.validateEmpty();
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
