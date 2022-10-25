let expression = document.getElementById('input')
let Phrase1 = expression.value

console.log(expression.value)
let answer = document.getElementById("answer").innerHTML

const removeNull = function(arr, index1){
    let newArray = [...arr];
    newArray.splice(index1, 1)
    return newArray;
}
const removeElmt = function(arr, index1,index2){
    let newArray = [...arr];
    newArray.splice(index1, 1)
    newArray.splice(index2, 1)
    return newArray;
}


function Calculator() {
            expression.value = expression.value.replace(/\//g, `,/,`)
            expression.value = expression.value.replace(/\*/g, `,*,`)
            expression.value = expression.value.replace(/\-/g, `,-,`)
            expression.value = expression.value.replace(/\+/g, `,+,`)
            console.log(expression.value)
    
    let Phrase2 = expression.value.split(',')
    console.log(Phrase2)

    while( Phrase2.includes("")){
        let i = Phrase2.indexOf("")
        console.log(i)
        // debugger
        Phrase2 = removeNull(Phrase2,i)
        console.log(Phrase2)
    }
    console.log(Phrase2)

    if (Phrase2[0]== "+") {
        Phrase2 = removeNull(Phrase2,0)
    }
    if (Phrase2[0]== "-") {
    //   debugger
        Phrase2 = removeNull(Phrase2,0)
        Phrase2[0] = -parseFloat(Phrase2[0],10)
        console.log(Phrase2)
    }
// debugger
    let newArray = []
    // let char = /
    while( Phrase2.includes("/")){
        let a = Phrase2.indexOf("/")
        if (Phrase2[a+1]== "+") {
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) / parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmt(Phrase2, a-1,a)
            newArray=Phrase2;
        } else if(Phrase2[a+1]== "-"){
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) / -parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmts(Phrase2, a-1,a,a+1)
            newArray=Phrase2;
        }else{
        Phrase2[a] = parseFloat(Phrase2[a-1],10) / parseFloat(Phrase2[a+1],10)
        Phrase2 = removeElmt(Phrase2, a-1,a)
        newArray=Phrase2;
        }
        console.log(newArray)
    }
    while( Phrase2.includes("*")){
        let a = Phrase2.indexOf("*")
        if (Phrase2[a+1]== "+") {
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) * parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmt(Phrase2, a-1,a)
            newArray=Phrase2;
        } else if(Phrase2[a+1]== "-"){
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) * -parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmts(Phrase2, a-1,a,a+1)
            newArray=Phrase2;
        }else{
        Phrase2[a] = parseFloat(Phrase2[a-1],10) * parseFloat(Phrase2[a+1],10)
        Phrase2 = removeElmt(Phrase2, a-1,a)
        newArray=Phrase2;
        }
        console.log(newArray)
    }
    while( Phrase2.includes("+")){
        let a = Phrase2.indexOf("+")
        if (Phrase2[a+1]== "+") {
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) + parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmt(Phrase2, a-1,a)
            newArray=Phrase2;
        } else if(Phrase2[a+1]== "-"){
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) + -parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmts(Phrase2, a-1,a,a+1)
            newArray=Phrase2;
        }else{
        Phrase2[a] = parseFloat(Phrase2[a-1],10) + parseFloat(Phrase2[a+1],10)
        Phrase2 = removeElmt(Phrase2, a-1,a)
        newArray=Phrase2;
        }
        console.log(newArray)
    }
    while( Phrase2.includes("-")){
        let a = Phrase2.indexOf("-")
        if (Phrase2[a+1]== "+") {
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) - parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmt(Phrase2, a-1,a)
            newArray=Phrase2;
        } else if(Phrase2[a+1]== "-"){
            Phrase2 = removeNull(Phrase2,a+1)
            Phrase2[a] = parseFloat(Phrase2[a-1],10) - -parseFloat(Phrase2[a+1],10)
            Phrase2 = removeElmts(Phrase2, a-1,a,a+1)
            newArray=Phrase2;
        }else{
        Phrase2[a] = parseFloat(Phrase2[a-1],10) - parseFloat(Phrase2[a+1],10)
        Phrase2 = removeElmt(Phrase2, a-1,a)
        newArray=Phrase2;
        }
        console.log(newArray)
    }

    document.getElementById("answer").innerHTML = newArray;

    let Input = ["Ryan", "Kieran", "Jason", "Yous"]
    sumEvenNumbers(Input)
}
function sumEvenNumbers(input) {
    // [...]
    const nouveau = input.filter(x => x.length == 4)
  console.log(nouveau)
}





