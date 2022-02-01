import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponentComponent } from './some-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SomeComponentComponent],
})
export class FailingLibModule {}
