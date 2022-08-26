/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */

const name = 'Nadim';
const age = 24;
const professon = 'web development';

const study = {id: 5012 , subject :'Management' , college : 'Govt. City College,chittagong'}

const info = `
I am ${name}.
I am ${age} years old.
I study in ${study.college} and my Subject is ${study.subject}
My professon is ${professon}.
`
console.log(info);