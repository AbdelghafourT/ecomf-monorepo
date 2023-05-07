import { ActivatedRoute } from '@angular/router';
import { Category,ResCategory, ResOneCategory} from './../../../../../../libs/shared/src/lib/models/category';
import { CategoryService } from './../../../../../../libs/shared/src/lib/services/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// import { CategoryService } from '@brightcoding/shared';

@Component({
  selector: 'admin-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.scss'],
  providers:[CategoryService]
})
export class ListcategoryComponent implements OnInit{

  categories: Category[] = [];
  cat:any=[]
  // categoryse:Category[]=[];
  showForm = false;
  editIndex : null | number = null ;
  editLabel : undefined  | string = '';
  editIcon  :  undefined | string = '';
  editColor : undefined  | string = '';

  myCat:Category = {
    label:"",
    icon:"",
    color:""
  }

  constructor(private categoryService:CategoryService,private route: ActivatedRoute,private toastr:ToastrService){}
  
  ngOnInit(): void {
   this.getCategories()
  }

  getCategories(){
    this.categoryService.getAllCategorys().subscribe(({success,categorys}:ResCategory)=> {
      if(success){
        this.categories = categorys
      }
    })
  }
  destroyCategory(id:string){
    this.categoryService.deleteCategory(id).subscribe((res)=> {
      this.categories = res.categorys
      this.toastr.success('Category deleted successfully','Success')
      this.getCategories()
    })
  }
  showEditForm(index: number) {
    this.editIndex = index;
    const category = this.categories[index];
    this.editLabel = category.label;
    this.editIcon = category.icon;
    this.editColor = category.color;
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editIndex = null;
    this.editLabel = '';
    this.editIcon = '';
    this.editColor = '';
  }

  updateCategory() {
    const category = this.categories[this.editIndex || 0];
    const newCategory = {
      label: this.editLabel,
      icon: this.editIcon,
      color: this.editColor
    };

    this.categoryService.editCtagory(category._id,newCategory).subscribe(({success,category}:ResOneCategory)=>{
      // if(success){
      //   this.cat = category
      // }
      this.getCategories()
    })

    this.showForm = false;
    this.editIndex = null;
    this.editLabel = '';
    this.editIcon = '';
    this.editColor = '';
  }

}
