var fetch = require('node-fetch');

var request1 = fetch('https://reqres.in/api/users/1');
var request2 = fetch('https://reqres.in/api/users/2');
var request3 = fetch('https://reqres.in/api/users/3');
var request4 = fetch('https://reqres.in/api/users/4');
var request5 = fetch('https://reqres.in/api/users/5');
var request6 = fetch('https://reqres.in/api/users/6');

Promise.all([request1, request2,request3,request4,request5,request6]).then(function(results){
    return results.map(result => result.json());
}).then(async json => {
    console.log(json.length)
    for(let i = 0;i<json.length; i++){
        json[i] = await json[i];
        json[i] = json[i].data;
    }
    console.log(json);
    
})