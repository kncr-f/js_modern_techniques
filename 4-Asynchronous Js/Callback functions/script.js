var products =[
    {id:1,name:'Samsung S8',price:500},
    {id:2,name:'Samsung S9',price:800},
    {id:3,name:'Samsung S10',price:1000}
]

let added=false;

function addProduct(prd,callback){
setTimeout(()=>{
 if (added){
    products.push(prd);
    callback(null,prd);
 }else{
     callback('500',prd);
 }
},2000);
}

function getProducts(){

    setTimeout(()=>{products.forEach(p=>{
        console.log(p.name);
    });

    },1000);

}

addProduct({id:4,name:"Samsung S7",price:300},function(err,data){
    if (err){
        console.log('eror : ',+err);
    }else{
        console.log(data);
    }
});
