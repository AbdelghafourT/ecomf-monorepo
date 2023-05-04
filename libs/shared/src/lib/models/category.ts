export interface Category{
    _id?: string;
    label?: string;
    color?: string;
    icon?: string;
}
export interface ResCategory{
    success?: boolean;
    categorys: Category[];
}
export interface ResOneCategory {
    success?: boolean;
    category: Category;
}