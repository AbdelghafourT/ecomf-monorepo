import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { CategoryService,Category } from '@brightcoding/shared';

@Component({
  selector: 'admin-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit{
  details: any=[];
  categories:[]=[];
  constructor(private categoryService:CategoryService,private route: ActivatedRoute,private location: Location,private toastr:ToastrService){}
  id: string = ""
  editcategory = new FormGroup({
    label:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(9),Validators.pattern('[a-zA-Z0-9 ]*')]),
    icon :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(9),Validators.pattern('[a-zA-Z-]*')]),
    color:new  UntypedFormControl(''),
  })

  // ngOnInit(): void {
  //   this.route.params.subscribe((params:any) => this.getOneCategory(params.id));
  // }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
        this.categoryService.getCategory(params.id).subscribe(res => {
          this.id = params.id
          this.editcategory.patchValue(res.category)
        })
    })
}
  
  // getOneCategory(id:string){
  //   this.categoryService.getCategory(id).subscribe(({success,categorys}:ResCategory)=> {
  //    this.details = categorys
  //   })
  // }
   saveCategory(){
  //   this.categoryService.editCtagory(id).subscribe(({success,categorys}:ResCategory)=>{
  //     this.categories = categorys
  //   })
   }

   submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.updateCategory()
  
  }

  updateCategory() {
    this.categoryService.editCtagory(this.id,this.editcategory.value).subscribe(res => {
      if(res.success) {
       this.toastr.success('Updated  With successfully','success'); 
       this.location.back()
      }
    },
    err => console.error(err))
  }
}
