/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */
const array = ['amar','sonar','bangla','ami','tumai','valobashi'];
const three = array[2];
console.log(three);
// or 
const [one,two,threee,...four] = array;
console.log(threee);

