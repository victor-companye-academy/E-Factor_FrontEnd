import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateVacancyService } from 'src/app/core/service/create-vacancy/create-vacancy.service';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent {

  constructor(private createVacancyService: CreateVacancyService) { }

  protected titleMaxLength!: number;
  protected titleMinLength!: number;

  protected descriptionMaxLength!: number;
  protected textAreaLength!: number;

  protected titleEmpty: boolean = false;
  protected descriptionEmpty: boolean = false;

  protected isInvalidTitleLength: boolean = false;
  protected titleLength!: number;

  protected coin!: number;


  protected form = new FormGroup({
    title: new FormControl('',
      [
        Validators.maxLength(this.titleMaxLength),
        Validators.minLength(this.titleMinLength),
        Validators.required
      ]),
    description: new FormControl('',
      [
        Validators.maxLength(this.descriptionMaxLength),
        Validators.required
      ])
  })


  //início dos métodos

  public onKeyupTitle(event: Event) {

    this.validateTitleLength();
    this.validateTitleEmpty();
  }

  public onkeyupDescription(event: Event) {
    this.validateDescriptionEmpty()
    const description = this.form.get('description')!.value;

    const currentLength: number = description!.length;
    this.textAreaLength = this.descriptionMaxLength - currentLength;
  }

  private validateTitleLength(): void {
    const title: string | null = this.form.get('title')!.value

    if (title && !(title.trim() === '') && (title.length < this.titleMinLength && title.length > 0)) {
      this.titleLength = title.length;
      this.isInvalidTitleLength = true;
    } else {
      this.isInvalidTitleLength = false;
    }
    this.validateTitleEmpty();
  }

  private validateTitleEmpty(): void {
    const title: string | null = this.form.get('title')!.value

    if (title?.trim() === '' || !title) {
      this.titleEmpty = true;
    } else {
      this.titleEmpty = false;
    }
  }

  private validateDescriptionEmpty(): void {
    const description = this.form.get('description')!.value;

    if (description?.trim() === '' || !description) {
      this.descriptionEmpty = true;
    } else {
      this.descriptionEmpty = false
    }
  }

  public onSubmit(): void {
    this.validateTitleEmpty();
    this.validateDescriptionEmpty();
    this.validateTitleEmpty();

    if (this.form.valid) {
      const title = this.form.get('title')?.value
      const description = this.form.get('description')?.value

      this.createVacancyService.setTitle(title || '');
      this.createVacancyService.setDescription(description || '');
    }
  }

  ngOnInit(): void {
    this.coin = 50;

    this.titleMaxLength = 50;
    this.titleMinLength = 10;

    this.descriptionMaxLength = 5000;
    this.textAreaLength = this.descriptionMaxLength;

  }
}
