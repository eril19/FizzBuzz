function printnum(){
    let i;
    for(i=1;i<=100;i++){
        if(i%3===0){
            if(i%5===0){
                document.getElementById("demo").innerHTML += "FizzBuzz!";
            }
            else{
                document.getElementById("demo").innerHTML += "Fizz!";
            }
        }
        else if(i%5===0){
            if(i%3===0){
                document.getElementById("demo").innerHTML += "FizzBuzz!";
            }
            else{
                document.getElementById("demo").innerHTML += "Buzz!";
            }
        }
        else{
            document.getElementById("demo").innerHTML += i;
        }
    }
}

printnum();

//Use Button
// function printnum(obj){
//     let i;
//     for(i=1;i<=100;i++){
//         if(i%3===0){
//             if(i%5===0){
//                 document.getElementById("demo").innerHTML += "FizzBuzz!";
//             }
//             else{
//                 document.getElementById("demo").innerHTML += "Fizz!";
//             }
//         }
//         else if(i%5===0){
//             if(i%3===0){
//                 document.getElementById("demo").innerHTML += "FizzBuzz!";
//             }
//             else{
//                 document.getElementById("demo").innerHTML += "Buzz!";
//             }
//         }
//         else{
//             document.getElementById("demo").innerHTML += i;
//         }
//     }
// }