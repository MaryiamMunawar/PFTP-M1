class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;

    }

// In class,all the variables which we call are called by using keyword this. 
//getter  : term used to get value  & setter : term used to store a value in a variable
getName(){
    return this.name;
}
getEmail(){
    return this.email;
}
setPhoneNumber(phone){
    this.phoneNumber = phone;
}
getPhoneNumber(){
    return this.phoneNumber;
}

}
