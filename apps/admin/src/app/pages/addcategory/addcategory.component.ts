import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
// import { Category } from 'libs/shared/src/lib/models/category';
import { CategoryService } from 'libs/shared/src/lib/services/category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'admin-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,private router:Router,private toastr: ToastrService){}
  addcategory = new FormGroup({
    label:new  UntypedFormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(19),Validators.pattern('[a-zA-Z0-9 ]*')]),
    icon :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(19),Validators.pattern('[a-zA-Z-]*')]),
    color: new UntypedFormControl(''),
  })
  ngOnInit(): void {

    // this.toastr.success('Hello world!', 'Toastr fun!');
  }
   
  saveCategory(){
    if(this.addcategory.invalid){
      
      this.toastr.warning('Please fill your form', 'Error', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        tapToDismiss: false,
        toastClass: 'ngx-toastr icon error',
        iconClasses: {
          error: 'fa fa-exclamation-triangle'
          //error: 'toast-error',
        }
      } as any);
      return
    }
    this.categoryService.addCategorys(this.addcategory.value).subscribe(()=>{
      this.toastr.success('Action completed successfully', 'Success');
      setTimeout(() => {
        this.router.navigate(['/admin/category'])
      }, 2000);
      return
    })
      
  }
}
