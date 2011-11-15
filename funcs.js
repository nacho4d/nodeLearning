//1 Define an anonymous function
//function() {
//  console.log("Hello1");
//}

//1.1 Error
//function myFunction() {
//  console.log("Hello3");
//}();

//2 Define and invoke an anonymous function
(function() {
  console.log("Hello2");
})();

//3 Define an onymous function and invoke it 
function myFunction() {
  console.log("Hello3");
}
myFunction();

//4 Assign an anonymous function to a var
var myFunc = function() {
  console.log("Hello4");
};
var myFunc2 = myFunc;
myFunc();
myFunc2();

//5 Mix 4 and 3. Note : myFunc3 is not accessible from outside myFunc4
var myFunc4 = function myFunc3() {
  console.log("Hello5");
};
myFunc4();
myFunc3();

// 6 Object:
function Obj() {
  this.myfunc6 = function() {
    console.log("Hello6");
  };
}
var obj = new Obj();
obj.myfunc6();