/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const products = [
  {item : 'shoes' , price : 5300},
  {item : 'sunglas' , price : 2000},
  {item : 'bags' , price : 4999},
  {item : 'balts' , price : 5000},
];

const result = products.find(p => p.price == 5000);
console.log(result);










/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো */