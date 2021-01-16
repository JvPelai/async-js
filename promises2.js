const fetch = require('node-fetch');

var userCache = {};

function getUserDetail(userId){
    if(userCache[userId]){
        return Promise.resolve(userCache[userId]);
    }

    return fetch(`https://reqres.in/api/users/${userId}`)
        .then(function(result){
            return result.json();
        })
        .then(json =>{
            userCache[userId] = json.data;
            console.log(userCache);
        }) 
}

getUserDetail("6")