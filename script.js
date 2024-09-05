/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr2 = [
  { id: 4, name: "emma", age: "22", profession: "designer" },
  { id: 5, name: "noah", age: "25", profession: "tester" },
  { id: 6, name: "olivia", age: "21", profession: "manager" }
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let arrProfession = arr.map(arrPro => arrPro.profession);
  console.log(arrProfession)
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person => {
    console.log(person.profession);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(person => person.profession!=admin)
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let combinedArr = arr2.concat(arr);

  console.log(combinedArr);
}
