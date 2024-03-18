import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'org-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent extends FieldType<FieldTypeConfig> {
  sectionForm = new FormGroup({});
  sectionModel = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: `display-flex`,
      fieldGroup: [
        {
          key: 'input_0',
          type: 'input',
          className: 'flex-1',
          props: {
            label: 'input 0',
            placeholder: 'Enter input',
          },
        },
        {
          key: 'input_0',
          type: 'input',
          className: 'flex-1',
          props: {
            label: 'input 0',
            placeholder: 'Enter input',
          },
        },
      ],
    },
  ];
  cont = 0;

  addField() {
    const child = {
      key: 'input_' + this.cont,
      type: 'input',
      className: 'flex-1',
      props: {
        label: 'input ' + this.cont,
        placeholder: 'Enter input',

        // required: true,
      },
    };
    // this.fields = [...this.fields, child];
    this.cont++;
    this.fields[0].fieldGroup?.push(child);
    console.log(this.fields[0].fieldGroup);
  }
}
