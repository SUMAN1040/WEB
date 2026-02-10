var myArray = [1, 2, 3, 4, 5];


//For Loop
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

console.log();

//ForEach Loop
myArray.forEach(function(element){
    console.log(element);
});


console.log();

//For-of
for(var element of myArray){
    console.log(element);
}