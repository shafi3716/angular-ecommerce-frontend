import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule
  ]
})
export class HomepageModule { }
