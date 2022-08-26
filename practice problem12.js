/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */
const employeeInfo = {
  employeeName: "John Doe",
  employeeId: 27,
  salary: ["400000INR","500000INR","650000INR"],
  address: {
      locality: {
          address1: "1600 pebble road",
          address2: "Nearby XYZ Bank",
      },
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
  }
}

console.log(employeeInfo?.address?.locality?.address1);
