
/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const array = [11,23,34,45,56,67,66];

const result = array.filter(n => n % 2 !== 0);
console.log(result);
