//--------------------------------------------
//lev1_1: Arrow Function

function intro(){
    console.log("Hello World");
}

intro()

intro = () => {
    console.log("Hello World");
}

intro()

intro = () => console.log("Hello World");

intro()

let ageCheck = document.getElementById('ageCheck')
let ageValue = document.getElementById('input')

//Type 1 = Komplette
function greatherThan(){
    if(ageValue.value >= 18){
        ageCheck.innerHTML = "Ja. Du kannst Shisha rauchen"
    }else{
        ageCheck.innerHTML = "Nein. Du darfst noch nicht Shisha rauchen"
    }
} 
//Type2 ohne function namen
greatherThan = () => {
    if(ageValue.value >= 18){
        ageCheck.innerHTML = "Ja. Du kannst Shisha rauchen"
    }else{
        ageCheck.innerHTML = "Nein. Du darfst noch nicht Shisha rauchen"
    }
}

//Type3 ohne function namen + geschweife Klammern
greatherThan = () => console.log("Jein du jeinst.");
greatherThan()


// lev1_2: functions
//Type 1
let txt = document.getElementById('txt')

function hello() {
    txt.innerHTML = 'Hallo';
    return console.log("Hallo1");
}

hello()

//Type3 - 2

let txtSum = document.getElementById('txtSum')

zweiSum = (x,y) => txtSum.innerHTML = x + y;

zweiSum(5,5)


let txt2 = document.getElementById('txt2')

zwei = (x, y) => {
    txt2.innerHTML = x * y
    console.log(x * y);
    // alert(x * y);
}
zwei(2,3)

let i = true;
let j = "hi";
let k = 1;
let l = {name:"John"}
let a = [0,1]

//Typ1
function test(i, j, k, l, a) {
    console.log(i,j,k,l,a);
}

test(typeof i, typeof j, typeof k, typeof l, typeof a);


//Typ3
test = (i,j,k,l,a) => console.log(i,j,k,l,a);

test(typeof i, typeof j, typeof k, typeof l, typeof a);


// Übung lev1_4: fuction hero



function hero(heroName, heroPower, heroEnemy) {
    let name = "Mein Lieblingsheld aus Marvel ist: " + heroName
    let power = "Er hat die Fähigkeit: " + heroPower
    let enemy =  "Sein größter Gegner ist: " + heroEnemy

    return console.log(name + power + enemy);
    // heroName = "Deadpool";
    // heroPower = "Immortal";
    // heroEnemy = "Juggernaut"
}

// hero(name, power, enemy)
hero("Deadpool ", "Immortal ", "Juggernaut ")


// lev1_6: function vs. variable


returnOne = () =>{
    return 1;
}
console.log(returnOne());

let y = returnOne()
let x = 1

if(x === y){
    console.log("Wird das gedruckt?");
}


// lev1_7: function double

function oneFunction(para) {
    let sum = para * 2
    return sum;
}

console.log(oneFunction()); // NaN richtig?

// lev1_8: function your age

age = (yearBorn) => {
    return 2022 - yearBorn;
}
console.log(age(1992));



age2 = (yearBorn1, yearBorn2) =>{
    let alterDiff = yearBorn1 - yearBorn2;
    return alterDiff;
}

console.log(age2(1992, 1987));


// lev1_9: function introduction

introduction = (vorname, nachname, geburtsort, alter, wohnort) => {
    
    return `Mein Name ist ${vorname} ${nachname}
    Ich bin in  ${geburtsort} geboren
    Ich lerne Coden bei SuperCode
    Ich bin ${alter}  Jahre alt.
    Ich wohne in ${wohnort}`;
}
console.log(introduction("Markus", "Schiller","Deutschland","29","Treuchtlingen"));


