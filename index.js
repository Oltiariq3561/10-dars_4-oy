// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 12,13,14,15,16];
// let res = arr.sort(function (a,b) {
//     return b-a;
// });
// console.log(res[0]);

// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.forEach(function (value,index) {
//     console.log(value);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let toq = 0;
// let res = arr.forEach(function (value) {
//     if (value % 2 == 1) {
//         toq += value
//     }
// });
// console.log(toq)
// let juft3gakarrali = [];
// arr.forEach(function (value) {
//     if (value % 3 == 0 && value % 2 == 0) {
//         juft3gakarrali.push(value);
//     }
//     juft3gakarrali.sort(function (a, b) {
//         return b - a;
//     })
// });
// console.log(juft3gakarrali);


// let res = arr.filter(function (value , index, a) {
//     return value%3==0 && value>9 && value<100;
// });
// console.log(res);

// let res = arr.map(function (value) {
//     return value * 2;
// })
// console.log(res);

// let arr = [2,3,4,5,6];
// let res = arr.map(function (value) {
//     if (value % 2 == 0) {
//         value**=2
//     }else{
//         value**=3
//     }
//     return value;
// })
// console.log(res);

// let res = arr.some(function(value){
//     return value > 0
// });

// let user = [
// {name: 'john', age: 10},
// {name: 'alex', age: 10},
// {name: 'gani', age: 10 }]


// UYGA VAZIFA 10-DARS 
// 1-masala
// : Berilgan massivning barcha elementlarini kvadratga oshiring va
// yangi massiv hosil qiling.
// let arr = [13,25,32,46,12];
// let sum = [];
// let res = arr.forEach(function (value,) {
//     sum.push(value * value) ;
// });
// console.log(sum);
// 2-masala
// Berilgan massivdan manfiy qiymatlarni olib tashlang va faqat
// musbat qiymatlarni saqlaydigan yangi massiv hosil qiling.
// let arr = [-13,25,-32,46,12];
// let massiv = [];
// arr.forEach(function (value) {
//    if (value>0) {
//     massiv.push(value)
//    } 
// })
// console.log(massiv);

// 3-masala
// : Berilgan massivning har bir elementini 2 ga ko'paytiring va natijani
// konsolga chiqaring.
// let arr = [13,25,32,46,12];
// arr.forEach(function (value) {
//     console.log(value*2);
// })

// 4-masala
// Berilgan massivning barcha elementlarini yig'indisini hisoblang va
// natijani qaytaring.
// let arr = [13,25,32,46,12];
// let sum = 0;
// arr.forEach(function (value) {
//     sum = sum + value;
// })
// console.log(sum);

// 5-masala
// Berilgan massivdan faqat musbat qiymatlarni ajratib, yangi massiv
// hosil qiling.
// let arr = [-13,25,-32,46,-12];
// let res = arr.filter(function (value) {
//     return value>0;
// })
// console.log(res);

// 6-masala
// : Berilgan massivdan faqat juft sonlarni ajratib, yangi massiv hosil
// qiling.
// let arr = [13,25,32,46,12];
// let res = arr.filter(function (value) {
//     return value%2==0;
// })
// console.log(res);

// 7-masala
// Berilgan massivdan uzunligi 5 ta belgidan kam bo'lgan stringlarni
// ajratib, yangi massiv hosil qiling.
// let arr = ['salom', 'salah','rano' , 'cristiano', 'modric', 'alik' ];
// let res = arr.filter(function (value) {
//     return value.length < 5;
// })
// console.log(res);

// 8-masala
// : Berilgan massivdan faqat 18 yoshdan katta bo'lgan odamlarning
// yoshini ajratib, yangi massiv hosil qiling.
// let users = [
//     { ism: "gani", yosh: 20 },
//     { ism: "alijon", yosh: 25 },
//     { ism: "sodiq", yosh: 16 },
//     { ism: "guli", yosh: 30 }
//   ];
  
//   let res = users.filter(function(value) {
//     return value.yosh > 18;
//   }).map(function(value) {
//     return value.yosh;
//   });
  
//   console.log(res);

// 9-masala
// : Berilgan massivning barcha elementlarini kvadratga oshiring va
// yangi massiv hosil qiling.
// let arr = [13,25,32,46,12];
// let res = arr.map(function (value) {
//     return value**2
// })
// console.log(res);

// 10-masala
// : Berilgan massivning har bir elementiga 5 qo'shib, yangi massiv hosil
// qiling.
// let arr = [13,25,32,46,12];
// let res = arr.map(function (value) {
//     return value+5
// })
// console.log(res);

// 11-masala
// Berilgan massivdagi har bir elementning kvadrat ildizini hisoblab,
// yangi massiv hosil qiling.
// let arr = ['gani' , 'qani' , 'mano'];
// let res = arr.map(function (value) {
//     return value.toUpperCase()
// })
// console.log(res);

// 12-masala
// TUSHUNMADIM 

// 13-masala
// Berilgan massivda hech bo'lmaganda bitta manfiy son
// bor-yo'qligini tekshiring.
// let arr = [13,25,32,46,-12];
// let res = arr.some(function (value) {
//     return value < 0;
// })
// console.log(res);

// 14-masala
// Berilgan massivda hech bo'lmaganda bitta string uzunligi 10
// ta belgidan katta bo'lgan string bor-yo'qligini tekshiring.
// let arr = ['salom' , 'assalomu alaykum'];
// let res = arr.some(function (value) {
//     return value.length > 10;
// })
// console.log(res);

// 15-masala
// : Berilgan massivdagi barcha sonlar musbat ekanligini
// tekshiring.
// let arr = [13,25,32,46,12];
// let res = arr.every(function (value) {
//     return value > 0;
// })
// console.log(res);

// 16-masala
// Berilgan massivdagi barcha stringlar katta harflar bilan
// yozilgan ekanligini tekshiring.
// let arr = ['salom' , 'assalomu alaykum'];
// let res = arr.every(function (value) {
//     return value == value.toUpperCase;
// })
// console.log(res);

// 17-masala
// Berilgan massivda ma'lum bir element mavjudligini
// tekshiring va natijani qaytaring.
// let arr = [13,25,32,46,12];
// let res = arr.includes(13);
// console.log(res);

// 18-masala
// : Berilgan massivda ma'lum bir elementning birinchi
// uchragan indeksini toping va qaytaring.
// let arr = [13,12,13,46,12];
// let res = arr.indexOf(12);
// console.log(res);

// 19-masala
// Berilgan massivda ma'lum bir elementning oxirgi
// uchragan indeksini toping va qaytaring.
// let arr = [13,12,13,46,12];
// let res = arr.lastIndexOf(13);
// console.log(res);

// 20-masala
// : Berilgan massivda shartga mos keladigan birinchi elementni
// toping va qaytaring 
// let arr = [13,12,13,46,12];
// let res = arr.find(function (value) {
//     return value > 10 && value % 2 == 0
// })
// console.log(res);

