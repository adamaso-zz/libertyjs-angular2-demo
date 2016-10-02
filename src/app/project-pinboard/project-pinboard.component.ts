import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project/project.service";
import {Project} from "../project/project.model";

@Component({
  selector: 'project-pinboard',
  templateUrl: './project-pinboard.component.html',
  styleUrls: ['./project-pinboard.component.css']
})
export class ProjectPinboardComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

}
