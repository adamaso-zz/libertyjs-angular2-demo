import { Injectable } from '@angular/core';
import { Project } from "./project.model";

@Injectable()
export class ProjectService {
  
  projects: Project[];

  constructor() {
    this.projects = this.generateProjects();
   }

   getProject(id: string) : Project {
     return this.projects.filter(
       (project: Project) => {
         return project.id === id;
       }
     )[0];
   }

   generateProjects(){
     return [
       new Project('1', 'Learn Angular 2', 'Angela', 'Almost Done'),
       new Project('2', 'Learn React', 'Angela', 'Not Started'),
       new Project('3', 'Learn Polymer', 'Angela', 'Not Started'),
       new Project('4', 'Learn Node', 'Angela', 'In Progress'),
       new Project('5', 'Learn C#', 'Angela', 'Not Started'),
     ];
   }

}
