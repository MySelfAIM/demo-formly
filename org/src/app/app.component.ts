import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'ip',
      type: 'input',
      props: {
        label:
          'IP Address (using custom validation through `validators.expression` property)',
        description:
          'custom validation message through `validators.expression` property',
        required: true,
      },
      validators: {
        ip: {
          expression: (c: AbstractControl) =>
            /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
          message: (error: any, field: FormlyFieldConfig) =>
            `"${field?.formControl?.value}" is not a valid IP Address`,
        },
      },
    },
    {
      key: 'ip_async',
      type: 'input',
      props: {
        label:
          'IP Address (using custom validation through `validators.expression` property)',
        description:
          'custom validation message through `validators.expression` property',
        required: true,
      },
      asyncValidators: {
        ip: {
          expression: (c: AbstractControl) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(/(\d{1,3}\.){3}\d{1,3}/.test(c.value));
              }, 1000);
            }),
          message: (error: any, field: FormlyFieldConfig) =>
            `"${field?.formControl?.value}" is not a valid IP Address`,
        },
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
