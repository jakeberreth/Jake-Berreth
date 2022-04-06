import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
filter = ""
project = []

projects = [
  ['Linux File System', 'linux-file-system'],
  ['Flask App', 'flask-app'],
  ['Data Structure Thing', 'data-structure-thing']
]


constructor(private router: Router) { }

onClickProject(project: any) {
  this.router.navigate([project[1]]);
}

}
