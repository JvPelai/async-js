new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(2); }, 3000);
})
.then(function(result){ console.log('first then: ', result); return result ** 2})
.then(function(result){ console.log('second then: ', result); return result ** 2 })
.then(function(result){console.log('third then: ', result); return result ** 2})
.then(function(result){console.log('final then: ', result);})
