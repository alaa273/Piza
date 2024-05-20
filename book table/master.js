//get total
let product =document.getElementById('product');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count=document.getElementById('count');
let category =document.getElementById('category');
let submit =document.getElementById('submit');
let dataPro=[];

if(localStorage.getItem('product')!=null){
  dataPro=JSON.parse(localStorage.getItem('product'));
  showdata()
}


function getTotal(){
    if(price.value !==''){
      let result= (  +price.value +  +taxes.value + +ads.value )- 
      +discount.value;
      total.innerHTML =result;
      total.style.background=' #69e26d';
    }else{
        total.innerHTML='';
        total.style.background='#4caf50';
    }
}


//creat product

// let dataPro; 
// if(localStorage.product!=null){
//   dataPro= JSON.parse(localStorage.product)
// }else{
//   dataPro=[];
// }

// //submit.onclick =function(){   //rgex
// if(validteProductName()==true){
//   let newPro ={
//     product:product.value,
//     price:price.value,
//     taxes:taxes.value,
//     ads:ads.value,
//     discount:discount.value,
//     total:total.innerHTML,
//     category:category.value,
    
//   }
//  dataPro.push(newPro);
//  localStorage.setItem('product',JSON.stringify(dataPro));
//   console.log(dataPro);
//  cleardata()
//  showdata()
// }
// else{
//   window.alert('Invalid productName')
// } 
// }

submit.onclick =function(){
let newPro ={
  product:product.value,
  price:price.value,
  taxes:taxes.value,
  ads:ads.value,
  discount:discount.value,
  total:total.innerHTML,
  category:category.value,
  
}
dataPro.push(newPro);
localStorage.setItem('product',JSON.stringify(dataPro));
console.log(dataPro);
cleardata()
showdata()
}

// function validteProductName(){  //regex
//   var regex=/^[A-Z][a-z]{3,8}$/;
//   if(regex.test(product.value) ==true)
//   {
//     return true;
//   } 
//   else 
//   {
//     return false;
//   }

// }



//read
function showdata (){
let table='' ; 
  for( let i=0; i<dataPro.length; i++){
    table +=`
    <tr>
        <td>${i}</td>
        <td>${dataPro[i].product}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button  id="update">update</button></td>
        <td><button onclick="deleteprodect(${i})" id="delete">delete</button></td>
    </tr>               
    `
    
    
  }
  document.getElementById('tbody').innerHTML=table;
}

//clear data
function cleardata() {
  product.value="";
  price.value="";
  taxes.value="";
  ads.value="";
  discount.value="";
  total.innerHTML="";
  count.value="";
  category.value="";
}
//Delete 
function deleteprodect(deletdIndex)
{
  dataPro.splice(deletdIndex,1)
  localStorage.setItem('product',JSON.stringify(dataPro))
 showdata()  

}

//search product
function searchProduct (term){
  let table =``;
  for( let i=0; i<dataPro.length; i++){
    if(dataPro[i].product.toLowerCase().includes(term.toLowerCase())==true){
      table +=`
      <tr>
          <td>${i}</td>
          <td>${dataPro[i].product}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button  id="update">update</button></td>
          <td><button onclick="deleteprodect(${i})" id="delete">delete</button></td>
      </tr>               
      `
    
    } 
  }

}


document.getElementById('tbody').innerHTML=table;
searchProduct('s');
