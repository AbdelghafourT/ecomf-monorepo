import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService, ResCategory } from '@brightcoding/shared';
import { ProductService } from 'libs/shared/src/lib/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'


@Component({
  selector: 'admin-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{
  constructor(
    private categoryService: CategoryService,
    private productService:ProductService,
    private router:Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,private location:Location){}
  categories:Category[]=[];
  id: string = "";
  thumbnail : any ;
  editProductForm  = new FormGroup({
    title:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z0-9 ]*')]),
    discription :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('[a-zA-Z0-9 ]*')]),
    content:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(50),Validators.pattern('[a-zA-Z0-9 ]*')]),
    brand :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9 ]*')]),
    countStock:new  UntypedFormControl('',Validators.required),
    price :new  UntypedFormControl('',Validators.required),
    rating:new  UntypedFormControl('',[Validators.required,Validators.min(0),Validators.max(5)]),
    category: new UntypedFormControl('',Validators.required),
    thumbnail: new UntypedFormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.getcat();
    this.route.params.subscribe((params: any) => {
      this.productService.getProduct(params.id).subscribe(res => {
        this.id = params.id
        this.editProductForm.patchValue(res.product)
        this.editProductForm.get('category')?.setValue(res.product.category)
      })
  })
  } 
  getcat(){
    this.categoryService.getAllCategorys().subscribe(({success,categorys}:ResCategory)=> {
      if(success){
        this.categories = categorys
      }
    })
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return ;
        }
        this.thumbnail = file;
  }
}

  submit(form: FormGroup) {
    if(form.invalid) {
      return
    }
    this.updateProduct()
  }
  updateProduct(){
    const formData = new FormData() ;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const product = {
    title: this.editProductForm.controls['title'].value,
    discription: this.editProductForm.controls['discription'].value,
    content: this.editProductForm.controls['content'].value,
    rating: +this.editProductForm.controls['rating'].value,
    brand:this.editProductForm.controls['brand'].value,
    countStock: this.editProductForm.controls['countStock'].value,
    price: this.editProductForm.controls['price'].value ,
    category : this.editProductForm.controls['category'].value  
  }
  console.log(product,"dzdzadzazadzadza");
  
    formData.append('thumbnail', this.thumbnail) ;
    // console.log(formData.get('thumbnail'))
    formData.append('product', JSON.stringify(product)) ; 
    this.productService.editProduct(this.id,formData).subscribe(res => {
      if(res.success) {
        this.location.back()
      }
    },
    err => console.error(err))
  }
}

