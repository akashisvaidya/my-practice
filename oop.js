// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },

//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// ///Factory -- return object

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("Drew using the factory method");
//     },
//   };
// }

// const newCircle = createCircle(10);
// console.log(newCircle.draw());

// /// constructor function -- using new and this

// function Circle(radius) {
//   (this.radius = radius),
//     (this.draw = function () {
//       console.log("Using the construtor function");
//     });
// }
// const anotherCircle = new Circle(9);

// console.log(anotherCircle.draw());

// /// what is difference- it is more of preferenc thing
// console.log(anotherCircle.constructor);

// /// in js fucntions are objects
// console.log(Circle.name);
// console.log(Circle.constructor);

// const circle1 = new Function(
//   "radius",
//   ` (this.radius = radius),
//     (this.draw = function () {
//       console.log("Using the construtor function");
//     });`
// );

// const circle2 = new circle1(1);
// console.log(circle2);

// primitive type
let x = 10;
let y = x;
x = 20;
// console.log(x); // 20
// console.log(y); // 10

//reference type
let a = { value: 20 };
let b = a;

a.value = 40;
// console.log(a); /// 40
// console.log(b); /// 40

let num = 10;
function increase(num) {
  num++;
}

increase(num);
console.log(num);

let obj = { value: 10 };

function increamentObj(obj) {
  obj.value++;
}

increamentObj(obj);
console.log(obj);

obj.addedProperty = "this is the added property";

obj["newProperty"] = 2;
const newName = "user-code";
obj[newName] = { name: "dfhaju" };
console.log(obj);
