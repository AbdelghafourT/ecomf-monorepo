export interface Users {
    _id?: string;
    name?:string;
    email?:string;
    passeword?:string
    adresse?:string,
    city?:string,
    country?:string,
    phone?:string,
    isAdmin?:boolean;
    avatar?: string
}
export interface ResUsers{
    success?: boolean;
    user: Users[];
}
export interface ResOneUsers{
    success?: boolean;
    user: Users;
}


