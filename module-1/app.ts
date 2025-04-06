//1. primitives
let a=10
a=4

//2. array
let arr=[1,2,3,4,5,"huh",{w:"jbhj"}];
let arr2:number[]=[1,5]

//3. tuples

let arr3:[number,string]=[1,"hbfrfbr3k"] //correct
// let arr4:[number,number]=[1,"hbfrfbr3k"]  //show error


//4. Enum(enumerations)- 

enum UserRoles{
    Admin="admin",
    Guest="guest",
    SuperAdmin="superadmin"
}

console.log(UserRoles.Admin)