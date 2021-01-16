var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// basic usage


var x = 1;

var p = new Promise(function(resolve,reject){
    //async task here

    if(x==1){
        resolve('Success!');
    }else{
        reject('Failure!');
    }

});

p.then(function(result){
    /* do something with result */
}).catch(function(){
    //error
}).finally(function(){
    //executes regardless of result
})

//Example
function get(url){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET',url);

        req.onload = function(){
            if(req.status == 200){
                resolve(req.responseText);
            }else{
                reject(Error(req.statusText));
            }
        };

        //Handling network errors
        req.onerror = function(){
            reject(Error('Network Error'));
        };

        //Make the request
        req.send();
    });
}

get('https://reqres.in/api/users?delay=3')
    .then(function(response){
        console.log("Succes!",response);
    },function(error){
        console.error('Failed!', error);
    });