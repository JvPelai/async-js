new Promise((resolve,reject) => {
    setTimeout(() => { reject('Done!');} ,2000);
})
.then(function(e){ console.log('done', e)})
.catch(function(e){ console.log('catch: ', e);});