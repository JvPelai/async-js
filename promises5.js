(new Promise((resolve,reject) => { reject('Error: rejected!');}))
    .then(() => {console.log("success")})
    .catch(() => {console.log("Failed")})
    .finally(res => {console.log("Finally")});