

// const bankbalance = 500000;
// const data = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(bankbalance > 20000){
//         resolve('shadi mubarak hon')
//       }else{
//        reject("nallla ghar pe beth")
//       }
//     },1000)
// })
// .then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })











// const BankBalance = 200000;
// function shadiscnz() {
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             if(BankBalance > 100000){
//                 resolve("mubarak jani...")
//             }else{
//                 reject("next time")
//             }
//         })
//     })
// }
// shadiscnz()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
















const div = document.querySelector("#hello");
axios('https://fakestoreapi.com/products')
    .then((res) => {
        console.log(res);
        console.log(res.data);
        res.data.map(item => {
            div.innerHTML += `
    <h1>price : ${item.title}</h1>
    <img   src = "${item.image}" alt ="error" width="200"   / >
    <h1>price : ${item.description}</h1>
    <h1>price : ${item.price}</h1>
    
  `
        })
    })
    .catch((err) => {
        console.log(err);
    })
