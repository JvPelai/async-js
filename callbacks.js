var fs = require('fs');
var myNumber;

//callback overview

function addOne(callback){
    fs.readFile('files/number.txt', function doneReading(err, fileContents){
        myNumber = parseInt(fileContents)
        myNumber++
        callback()
    })
}
function logNumber(){
    console.log(myNumber)
}


// a variation on how structure async functions with callbacks

function addTwo(error,fileContents){
    if(error){
        console.log(error)
    }
    myNumber = parseInt(fileContents);
    myNumber+= 2 
    console.log(myNumber)

}


fs.readFile('files/number.txt', addTwo)
