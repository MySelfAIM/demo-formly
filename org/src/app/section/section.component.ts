import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
export class SectionComponent extends FieldWrapper implements OnInit {
  maxWidth = 0;
  ngOnInit(): void {
    console.log(this.field.fieldGroup?.length);
  }

  calculateMaxWidth(): number {
    return (
      (100 - ((this.field.fieldGroup?.length || 0) - 1 * 16)) /
      (this.field.fieldGroup?.length || 1)
    );
  }
}
