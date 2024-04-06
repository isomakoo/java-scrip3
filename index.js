// misol-1
// let son=Number(prompt("sonni kiriting"))
// if(son%2==0){
//     console.log(son**2,"sonning kavadrati")
// }
// else{
//     console.log(Math.sqrt(son),"sonning ildizi")
// }
// misol-2
// let a=String(prompt("matn kiriting"))
// if(a.length>10){
//     console.log(a.toLocaleUpperCase())
// }
// else{
//     console.log(a.toLowerCase())
// }
// 3-misol
// let a=String(prompt("matn kiriting"))
// let b=String(prompt("matn kiriting"))
// if(a.length>15){
//     console.log(a.concat(" ", b))
// }
// else console.log("matn uzunligi 15 dan kichik")
// 4-misol
// let a=String(prompt("matn kiriting"))
// if(a.length>5){
//     console.log(a.repeat(3))
// }
// else console.log("kiritilgan matn 5 harfdan kichik")
// 5-misol
// let a=String(prompt("matn kiriting"))
// if(a.includes('a')){
//     console.log(a.replace(/a/g, '&'))
// }
// else console.log("kiritilgan matn ichida a harfi yuq")
// 6-misol
// let a=String(prompt("matn kiriting"))
// if(a.length>10){
//     console.log(a.slice(5))
// }
// else console.log("kiritilgan matn uzunligi 10 dan kichik")
// 7-misol
// let a=Number(prompt("sonni kiriting"))
// console.log(a.toString())
// 8-misol
// let a=String(prompt("matn kiriting"))
// console.log(a.trim())
// 9-misol
// let a=Number(prompt("matn kiriting"))
// if(a<0){
//     console.log(Math.abs(a))
// }
// else console.log("kiritilgan son musbat")
// 10-misol
// let a=String(prompt("matn kiriting"))
// if(a.length>20){
//     console.log(a.slice(3))
// }
// else console.log("kiritilgan matn uzunligi 20 dan kickina")
// 11-misol
// let a=String(prompt("matn kiriting"))
// if(a.includes("a")&&a.includes("b")){
//     console.log(a.replace("a", "A"))
// }
// else console.log("kiritilgan matnda a va b harf yuq")
// 12-misol
// let a=String(prompt("matn kiriting"))
// if(a.includes("java")){
//     console.log(a.replace("java", "JavaScrip"))
// }
// else console.log("matnda java suz yuq")
// 13-misol
// let a=String(prompt("matn kiriting"))
// if(a.length>15){
//     console.log(a.slice(10), 'hello TATU')
// }
// else console.log("matnda 15 ta harf qatnashmagan")
// 14-misol
// let a=Number(prompt("sonni kiriting"))
// if(a<0){
//     console.log(a," ",a, " ", a,)
// }
// else console.log(a+10)
// 15-misol
// let a=Number(prompt("a sonni kiriting"))
// let b=Number(prompt("b sonni kiriting"))
// let c=prompt("qaysi amalni bajarmoqchisz")
// if (c==='+'){
//     console.log(a+b)
// }
// else if (c==='-'){
//     console.log(a-b)
// }
// else if (c==='*'){
//     console.log(a*b)
// }
// else if (c==='/'){
//     console.log(a/b)
// }
// else console.log("xatolik")
// let a=prompt("a sonni kiriting")
// if(a>10){
//     console.log(Math.sqrt(a, 3))
// }
// else console.log(a.repeat(3))
// 3-misol
// let a=prompt("sonni kiriting")
// if(a>0){
//     console.log(Math.pow(a,2))
// }
// else console.log(a.repeat(3))
// 4-misol
// let a=String(prompt("sonni kiriting"))
// if(a.length>10){
//     console.log(a.slice(0, -5))
// }
// else console.log("kritilgan son 10 harfdan kam")
// FORGA OIDA  MASALALR
// 1-misol
//  let a=Number(prompt("a sonni kiriting"))
//  let b=Number(prompt("b sonni kiriting"))
// for(i=a; i<=b; i++){
//     console.log(i)
// }
// 2-misol
// let a=Number(prompt("a sonni kiriting"))
// let b=Number(prompt("b sonni kiriting"))
//  for(i=a; i<b; i++){
//     console.log(i)
// }
// console.log(b-a, "sonlar orasidagi son")
// 3-misol
// let narx=Number(prompt("konfetni narxini kiriting"))
// for(i=1; i<=10; i++){
//     console.log( i,'kg konfetni narxi', i*narx,)
// }
// 4-misol
// let narx=Number(prompt("konfetni narxini kiriting"))
// for(i=1.2; i<=2; i+=0.2){
//     console.log(i,"konfetni narxi", i*narx)
// }
// 5-misol
// let a=Number(prompt("a sonni kiriting"))
// let b=Number(prompt("b sonni kiriting"))
// let summ=0
// for(i=a; i<=b; i++){
//     summ+=i
// }
// console.log(summ)
// 6-misol
// let a=Number(prompt("a sonni kiriting"))
// let b=Number(prompt("b sonni kiriting"))
// let kupaytma=1
// for(i=a; i<=b; i++){
//     kupaytma*=i
// }
// console.log(kupaytma)
// 7-misol
//  let a=Number(prompt("a sonni kiriting"))
//  let b=Number(prompt("b sonni kiriting"))
//  let summ=0
//  for(i=a; i<=b; i++){
//     summ+=i**2
//  }
//  console.log(summ)
// 8-misol
// let n=Number(prompt("n sonni kiriting"))
// let s=0
// for(i=0; i<=n; i++){
//     s+=1/n
// }
// console.log(s)
// 9-misol
// let n=Number(prompt("n sonni kiriting"))
// let S=1
// for(i=1; i<=n; i+=0.1){
//     S*=i
// }
// console.log(S)
// 10-misol
// let n=Number(prompt("n sonni kiriting"))
// let kvadrat=0
// for(i=1; i<=n; i++){
//     kvadrat+=(2*i)-1
// }
// console.log(kvadrat)
// 11-misol
// let n=Number(prompt("n sonni kiriting"))
// let a=Number(prompt("a sonni kiriting"))
// let aningkvadrati=1
// for(i=1; i<=n; i++){
//     aningkvadrati=a**n
// }
// console.log(aningkvadrati)
// 12-misol
// let n=Number(prompt("n sonni kiriting"))
// let a=Number(prompt("a sonni kiriting"))
// kvadrat=1
// for(i=1; i<=n; i++){
//     kvadrat=a**i
//     console.log(kvadrat)
// }
// 13-misol
// let n=Number(prompt("n sonni kiriting"))
// let a=Number(prompt("a sonni kiriting"))
// kvadrat=0
// for(i=1; i<=n; i++){
//     kvadrat+=a**i
//     console.log(kvadrat)
// }
// 14-misol
// let n=Number(prompt("n sonni kiriting"))
// let summ=0
//  for(i=1; i<=n; i++){
//     summ+=i
//     console.log(summ)
//  }
// 15-misol
// let n=Number(prompt("n sonni kiriting"))
// let k=Number(prompt("k sonni kiriting"))
// let summ=0
// for(i=1; i<=n; i++){
//     for(j=1; j<=k; j++){
//         summ+=Math.pow(i,j)
//          console.log(summ) 
//     }
// }
// 16-misol
// let n=Number(prompt("n sonni kiriting"))
// let summ=0
// for(i=1; i<=n; i++){
//     summ+=Math.pow(i, i)
// }
// console.log(summ)let 
// 17-misol
// let a=Number(prompt("a sonni kiriting"))
// let b=Number(prompt("b sonni kiriting"))
// let summ=0
// for(i=0; i<=b-a; i++){
//     summ+=a+i
//     console.log(summ , i)
// }
// 18-misol
// let a=Number(prompt("a sonni kiriting"))
// let summ=0
// for(i=1;i<=a; i++){
    
//         if(a%i==0){
//             summ+=i
//             console.log('buluvchilar yigindisi',summ,'buluvchisi',i, )}
    
//         }
// 19-misol
// let n=Number(prompt("n sonni kiriting"))
// if (n<= 1) {
//     console.log(n + " tub emas");
// }
// let tub = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         tub = false;
//         break;
//     }
// }
// if (tub) {
//     console.log(n + " tub");
// } else {
//     console.log(n + " tub emas");
// }

// 20-misol
// let n=Number(prompt("n sonni kiriting"))
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + ' ';
//     }
//     console.log(row);
// }

        
