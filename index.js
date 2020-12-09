
var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

function fullNamelist() {

let listofpeople = " ";

  for(let l=0; l<people.length ; l++){
    listofpeople += l+1+"-";

    for(let a=0; a<3; a++){
      listofpeople += people[l].name[a]+" ";
    }
    listofpeople += "<br/>";
  }

document.getElementById("solution").innerHTML = listofpeople;

}

function getAge() {

  for(let l=0; l<6; l++)
    if(document.getElementById("name-input").value == people[l].name[0])
      document.getElementById("solution1").innerHTML = people[l].age;

}

let btn = document.getElementById("all");
btn.addEventListener("click", fullNamelist);

let btn1 = document.getElementById("age-button");
btn1.addEventListener("click", getAge);
