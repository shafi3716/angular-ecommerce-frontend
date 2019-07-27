import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes, RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'create',
    component: AddCategoryComponent
  }
]

@NgModule({
  declarations: [CategoryComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule
  ]
})
export class CategoryModule { }
