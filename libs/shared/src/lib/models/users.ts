export interface Users {
    name?:string;
    email?:string;
    passeword?:string
    adresse?:string,
    city?:string,
    country?:string,
    phone?:string,
    isAdmin?:boolean;
}
export interface ResUsers{
    success?: boolean;
    user: Users[];
}