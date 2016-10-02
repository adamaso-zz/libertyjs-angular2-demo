import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPinboardComponent } from './project-pinboard.component';
import { ProjectModule } from "../project/project.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [ProjectPinboardComponent],
  exports: [ProjectPinboardComponent]
})
export class ProjectPinboardModule { }
