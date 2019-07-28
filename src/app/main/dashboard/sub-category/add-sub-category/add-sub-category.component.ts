import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCommonService } from 'src/app/service/common/api-common.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {

  subcategoryForm: FormGroup;
  categoryData: any;

  constructor(
    private fb: FormBuilder,
    private apiCommon: ApiCommonService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.subcategoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      position: ['', Validators.required],
    });
   }

  ngOnInit() {

    this.apiCommon.get('category').subscribe(
      res => {
        this.categoryData = res;
      }
    );

  }

  onSubmit(): void {

    if (this.subcategoryForm.valid) {
      this.apiCommon.store('subcategory', this.subcategoryForm.value).subscribe(
        res => {
          console.log(res);
          if (res.status === 'success') {
            this.snackBar.open(res.message, 'close', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['snackbar-success']
            });
            this.router.navigateByUrl('/dashboard/subcategory');
          }
        }
      )
    }

  }

}
