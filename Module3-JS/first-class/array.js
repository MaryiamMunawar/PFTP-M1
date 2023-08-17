class Person {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    setPhoneNumber(phone){
        this.phoneNumber=phone;
    }
    getphoneNumber(){
        return this.phoneNumber;
    }
}
// he extends keyword is used to create a new class that inherits properties and methods from an existing class. The class that is being extended is referred to as the "parent class" or "superclass," while the new class being created is the "child class" or "subclass."
class Department extends Person {
    constructor (name,email,department) {
        super(name,email);
        this.department=department;
    }
    setDepartment(m){
        this.department= m;
    }
    getDetails() {
        return `Name: ${this.getName()} Email: ${this.getEmail()} Department: ${this.department}`;
    }
}