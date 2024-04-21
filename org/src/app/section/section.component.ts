import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  selector: 'org-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SectionComponent extends FieldWrapper {}
