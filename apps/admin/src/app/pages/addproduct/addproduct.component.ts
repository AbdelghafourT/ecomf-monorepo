import { ProductService } from './../../../../../../libs/shared/src/lib/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category,CategoryService, ResCategory} from '@brightcoding/shared';
import { Product } from 'libs/shared/src/lib/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  constructor(private categoryService: CategoryService,private productService:ProductService,private router:Router,private toastr: ToastrService){}
  categories:Category[]=[];
  products :Product[]=[];
  thumbnail : any ;
  ngOnInit(): void {
    this.categoryService.getAllCategorys().subscribe(({success,categorys}:ResCategory)=> {
      if(success){
        this.categories = categorys
      }
    })
  }
  productForm  = new FormGroup({
    title:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z0-9 ]*')]),
    discription :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('[a-zA-Z0-9 ]*')]),
    content:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(50),Validators.pattern('[a-zA-Z0-9 ]*')]),
    brand :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9 ]*')]),
    countStock:new  UntypedFormControl('',Validators.required),
    price :new  UntypedFormControl('',Validators.required),
    rating:new  UntypedFormControl('',[Validators.required,Validators.min(0),Validators.max(5)]),
    // isFeatured :new  UntypedFormControl('false',Validators.required),
    category: new UntypedFormControl('',Validators.required),
  })
  
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
saveProduct(){
  const formData = new FormData() ;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const product = {
    title: this.productForm.controls['title'].value,
    discription: this.productForm.controls['discription'].value,
    content: this.productForm.controls['content'].value,
    rating: this.productForm.controls['rating'].value,
    brand:this.productForm.controls['brand'].value,
    countStock: this.productForm.controls['countStock'].value,
    price: this.productForm.controls['price'].value ,
    category : this.productForm.controls['category'].value
  }
  formData.append('thumbnail', this.thumbnail);
  // console.log(formData.get('thumbnail'));
  // console.log(formData)
  formData.append('product' , JSON.stringify(product) ) ; 
  if(this.productForm.invalid){      
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
    this.productService.addProduct(formData).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/admin/product'])
      }, 1000);
    })
}



 
  
}

