import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './modules/core/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./modules/course/course.module').then(m => m.CourseModule)
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
