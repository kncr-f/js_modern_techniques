// var p = new Promise(function(resolve,reject){
//     if(true){
//         resolve('success');
//     }else{
//         reject('Failure');
//     }
// });

// p.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error)
// });

/*new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
});*/

const isStudentHappy = true;

const willPassTheExam= new Promise((resolve,reject)=>{
    if(isStudentHappy){
        const certificate = {
            name : "work permit",
            duration: "2 year",
            branch :"medicine"
        }
        resolve (certificate);
    }else{
        const error = new Error('Student failed the exam.');
        reject(error);
    }
});

const celeberation = function(certificate){
    const message ="I have "+ certificate.name + " It is time to celeberate.";
    return Promise.resolve(message);
    



}

const askStudent = function(){
    willPassTheExam
    .then(celeberation)
    .then(message=>console.log(message))
    .catch(function(error){
        console.log(error)
    })

}

askStudent();
