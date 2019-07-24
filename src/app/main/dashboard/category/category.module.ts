import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes, RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
]

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule
  ]
})
export class CategoryModule { }
