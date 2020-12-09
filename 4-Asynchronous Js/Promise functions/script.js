var products =[
    {id:1,name:'Samsung S8',price:500},
    {id:2,name:'Samsung S9',price:800},
    {id:3,name:'Samsung S10',price:1000}
]

function addProduct(prd){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if (added){
                resolve();
            }else{
                reject('eror : 500');
            }
            
        }, 2000);
    });
}

function getProducts(){
    setTimeout(()=>{
        products.forEach(p=>{
            console.log(p.name);
        });
    },1000);
}

addProduct({id:4,name:"Samsung S7",price:300}).then(getProducts).catch(function(err){
    console.log(err);
});