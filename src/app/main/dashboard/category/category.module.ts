import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { Routes, RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
]

@NgModule({
  declarations: [CategoryComponent, SubcategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule
  ]
})
export class CategoryModule { }
