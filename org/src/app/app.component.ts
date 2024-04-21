import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'mail',
      type: 'input',
      props: {
        label: 'Mail',
      },
    },
    {
      wrappers: ['section'],
      props: {
        label: 'My section',
      },
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'User name',
            placeholder: 'User name',
            required: true,
          },
        },
        {
          key: 'Textarea',
          type: 'textarea',
          props: {
            label: 'Textarea',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
          },
        },
        {
          key: 'email',
          type: 'input',
          props: {
            label: 'User surname',
            placeholder: 'user surname',
            required: true,
          },
        },
      ],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(model: any) {
    console.log(model);
  }
}
