import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MatModule } from 'src/app/mat.module';
import { DashboardCommonModule } from './common/dashboard-common.module';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./main-page/main-page.module').then(mod => mod.MainPageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule)
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule,
    DashboardCommonModule
  ]
})
export class DashboardModule { }