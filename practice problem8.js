/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const product =  {item : 'sunglas' , price : 2000 , id: 'S534'};
const {id , price , ...x} = product;
console.log(id);
console.log(price);
console.log(x);