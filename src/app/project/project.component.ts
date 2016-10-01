import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'project',
  template: `
    <div>
      ID: <span>{{project.id}}</span><br>
      Task: <span>{{project.name}}</span><br>
      Assignee: <span>{{project.owner}}</span><br>
      Status: <span>{{project.status}}</span><br>
    </div>
  `,
  //templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  project: Project;

  constructor(private service: ProjectService) {
    this.project = new Project('1', 'Learn Angular 2', 'Angela', 'Complete');
   }

  ngOnInit() {
  }

}
