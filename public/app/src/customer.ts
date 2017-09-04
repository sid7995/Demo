export class Customer {


    customerId: number;
    name: string = "";
    mobileNo: number;
    city: string;
    email: string = "";
    password: string = "";


    constructor(name: string, mobileNo: number, city: string, email: string, password: string) {
        this.name = name;
        this.mobileNo = mobileNo;
        this.city = city;
        this.email = email;
        this.password = password;
    }
}