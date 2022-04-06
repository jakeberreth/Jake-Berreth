import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructureThingComponent } from './data-structure-thing/data-structure-thing.component';
import { FlaskAppComponent } from './flask-app/flask-app.component';

import { HomeComponent } from './home/home.component';
import { LinuxFileSystemComponent } from './linux-file-system/linux-file-system.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'linux-file-system', component: LinuxFileSystemComponent},
  { path: 'flask-app', component: FlaskAppComponent},
  { path: 'data-structure-thing', component: DataStructureThingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
