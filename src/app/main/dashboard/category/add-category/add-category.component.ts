import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCommonService } from 'src/app/service/common/api-common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiCommon: ApiCommonService,
    private router: Router
  ) { 
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      position: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  onSubmit(): void{

    if (this.categoryForm.valid){
      this.apiCommon.store('category', this.categoryForm.value).subscribe(
        res => {
          if (res.status === 'success'){
            this.router.navigateByUrl('/dashboard/category');
          }
        }
      )
    }

  }

}
