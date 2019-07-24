import { ApiCommonService } from './../../../service/common/api-common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private apiCommon: ApiCommonService
  ) { }

  ngOnInit() {
    
    this.apiCommon.get('category').subscribe( 
      res => {
      console.log(res);
    });

  }

}
