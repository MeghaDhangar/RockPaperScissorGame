

// https://github.com/PaymentsHubDevelopers/PaymentsHub-React-Browser-Post-API-With-Shopping-Cart





// let age=20;

// if(age>=18){
//     console.log("you can vote")
// }if(age<18){
//     console.log("you can not vote")
// }


// let mode = "light"
// let color;

// if(mode==="dark"){
//   color= "black"
// }
// if (mode=="light") {
//     color="white"
// }

// console.log(color)



// let num = prompt("Enter a number");
// if(num%5==0){
//     console.log("number is divisible by 5")
// }
// else{
//     console.log("number is not divisible by 5")
// }

// console.log(num)



// for (let i = 1; i <= 10; i++) {
//     console.log( "i=",i)

// }



// let number = 25;
// let useNumber = prompt("Guess the number");

// while (useNumber != number) {
//     useNumber=  prompt("You guess the wrong number,please enter correct number")
// }

// console.log("Congratulation ,you Guess the Correct number")




// let obj = {
//     item: "pen",
//     price: 20
// }
// let str = `the cos of ${obj.item} to ${obj.price} rupees`
// console.log(str);


// console.log("Megha\ndhangar");

// let str1= "Megha";
// console.log(str1.slice(1, 4))


// let strn= "hellow";
// console.log(strn.replace("h","y"))




//    let fulName= prompt("Enter name without spaceses")
//    let fname = "@"+fulName+fulName.length
//     console.log(fname);



// let marks=[78,54,67,89,90];
// let sum=0;

// for(let value of marks){
//     sum=+value;







// }
// let avg = sum/marks.length;
// console.log( `Avg of marks ${avg}`)



// let heros=["salman","shahrukh","abhishek","govinda","ajay"]

// for(let hero of heros){
//     console.log(hero)
// }


// let i=0;

// for(let val of items){
// console.log(`value at ${i} index =${val} `);
// let offer= val/10;
// items[i]=items[i]-offer;
// console.log(`value of after offer = ${items[i]}`)
// i++
// }


// for(let i=0;i<items.length;i++){
//     let offer= items[i]/10;
//     items[i] -=offer
// }
// console.log(items);



// function vowals(str) {
//     count=0;
//     for(let char of str){
//         if(char=="a"|| char=="e"|| char=="i"|| char=="o" || char=="u"){
//             count++;
//         }
//     }
//     console.log(count)
// }


// ARROW  FUNCTION WITH FOREACH LOOP

// let arr=["Megha","Kannu","Himi","Kalash","kalpna"]

// arr.forEach((val,idx,arr)=> {
//     console.log(val.toUpperCase(),idx,arr)
// })


// let ar =[1,2,3,4,58,8];
// ar.forEach((num)=>{
//     console.log(num*2)
// })

// let arr = [2, 3, 4, 5, 6, 7];

// let newArr = arr.map((val) => {
//     return val * val;
// })
// console.log(newArr)


// let ar = [2, 3, 4, 58, 9, 34];

// let newAr = ar.filter((val) => {
//     return val % 2 == 1;
// })
// console.log(newAr)


//  let a = [1, 7, 9, 4, 51];
//  let newA=a.reduce((previous, current) => {
//     return previous < current ? previous: current;
// })
// console.log(newA)




// let marks =[65,78,90,97,94,85,76];
//    let newMarks= marks.filter((val)=>{
//   return val >=90;
// })
// console.log(newMarks)


// let n = prompt("enter a number");
// let arr =[];
// for(let i=1;i<=n;i++){
//    arr[i-1]=i;
// }

// console.log(arr);

// let factorial=arr.reduce((res,cur)=>{
//    return res * cur;
// })
// console.log(factorial)


// Factorial number


//  let newBtn = document.createElement("button");

//  newBtn.innerText="Click me";

//  newBtn.style.color="white";
//  newBtn.style.backgroundColor="black";
//  newBtn.style.padding="10px"

//  document.querySelector("body").prepend(newBtn)




let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

 
const genCompChoice = () => {
  // ROCK PAPER SCICCORS
  let options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
}


const drawGame = () => {
  msg.innerText = "Game was draw, Play Again !";
  msg.style.backgroundColor="#081b31";
}


const showWin = (userWin,userChoice,CompChoice) => {
  if (userWin) {
  useScore++;
  userScorePara.innerHTML=useScore;
    msg.innerText = `you win! your ${CompChoice} beats ${userChoice}`
    msg.style.backgroundColor="green"
  } else {
    compScore++;
    compScorePara.innerHTML=compScore;
    msg.innerText = `you lose! ${userChoice} beats your ${CompChoice}`
    msg.style.backgroundColor="red"
  }
}

const playGame = (userChoice) => {
  // genrate compter choice
  const CompChoice = genCompChoice();
  console.log("comp choice =", CompChoice);

  if (userChoice === CompChoice) {
    //  Droww
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors paper
      userWin = CompChoice === "paper" ? false : true

    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = CompChoice === "scissor" ? false : true;
    } else {
      // paper rock
      userWin = CompChoice === "rock" ? false : true;
    }
    showWin(userWin,CompChoice,userChoice)
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
   
    playGame(userChoice,);
  });
});












