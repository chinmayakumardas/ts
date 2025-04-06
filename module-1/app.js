"use strict";
//1. primitives
let a = 10;
a = 4;
//2. array
let arr = [1, 2, 3, 4, 5, "huh", { w: "jbhj" }];
let arr2 = [1, 5];
//3. tuples
let arr3 = [1, "hbfrfbr3k"]; //correct
// let arr4:[number,number]=[1,"hbfrfbr3k"]  //show error
//4. Enum(enumerations)- 
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["Guest"] = "guest";
    UserRoles["SuperAdmin"] = "superadmin";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.Admin);
