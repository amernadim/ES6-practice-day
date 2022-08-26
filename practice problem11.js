/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

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

console.log(employeeInfo.salary[2]);
