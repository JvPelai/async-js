var fs = require('fs');
var myNumber;

//callback overview

function addOne(callback){
    fs.readFile('number.txt', function doneReading(err, fileContents){
        myNumber = parseInt(fileContents)
        myNumber++
        callback()
    })
}
function logNumber(){
    console.log(myNumber)
}


// a variation on how structure async functions with callbacks

function addtwo(error,fileContents){
    if(err){
        console.log(error)
    }
    myNumber = parseInt(fileContents);
    myNumber++ 
    console.log(myNumber)

}


fs.readFile('number.txt', addTwo)
