import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {ProjectService} from './project.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
