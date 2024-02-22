//? স্টুডেন্ট ডেটাবেইজ ডিজাইন
//* দশ জন ছাত্রছাত্রীর জন্য একটি ডেটাবেইজ ডিজাইন করুন এবং তাদের নিম্ন উল্লেখিত ডেটার ফিচার গুলা মেনেজ করুন , , , অবশ্যই ফাংসন ব্যবহার করবেন এবং যেখানে যেখানে স্প্রেড অপারেটর এবং ডিস্ট্রাকচারিং ব্যবহার করা যাবে করবেন ।
// ডেটাবেইজ ফিচাসস

//

const students = {
  "Tanzir Ibne Ali": {
    name: "Tanzir Ibne Ali",
    roll: 1,
    reg: 11,
    gender: "male",
    age: 12,
    allSub: {
      Bangla: 65,

      English: 75,

      Science: 95,

      Religion: 80,

      Accounting: 70,

      Arabic: 73,
    },
  },
  "Jhon Doe": {
    name: "Jhon Doe",
    roll: 2,
    reg: 22,
    gender: "male",
    age: 15,
    allSub: {
      Bangla: 84,

      English: 89,

      Science: 60,

      Religion: 55,

      Accounting: 72,

      Arabic: 63,
    },
  },
  "Emon Rahman": {
    name: "Emon Rahman",
    roll: 3,
    reg: 33,
    gender: "male",
    age: 21,
    allSub: {
      Bangla: 85,

      English: 32,

      Science: 86,

      Religion: 87,

      Accounting: 90,

      Arabic: 95,
    },
  },
  "Angelina Joly": {
    name: "Angelina Joly",
    roll: 4,
    reg: 44,
    gender: "female",
    age: 21,
    allSub: {
      Bangla: 42,

      English: 49,

      Science: 23,

      Religion: 49,

      Accounting: 72,

      Arabic: 75,
    },
  },
  "Teresa Butlar": {
    name: "Teresa Butlar",
    roll: 5,
    reg: 55,
    gender: "female",
    age: 18,
    allSub: {
      Bangla: 86,

      English: 96,

      Science: 68,

      Religion: 70,

      Accounting: 72,

      Arabic: 90,
    },
  },
  "Barak Usama": {
    name: "Barak Usama",
    roll: 6,
    reg: 66,
    gender: "male",
    age: 50,
    allSub: {
      Bangla: 86,

      English: 96,

      Science: 68,

      Religion: 70,

      Accounting: 72,

      Arabic: 30,
    },
  },
  "Dronald Tramp": {
    name: "Dronald Tramp",
    roll: 7,
    reg: 77,
    gender: "male",
    age: 60,
    allSub: {
      Bangla: 39,

      English: 38,

      Science: 37,

      Religion: 36,

      Accounting: 35,

      Arabic: 34,
    },
  },
  "Queen Eligabath": {
    name: "Queen Eligabath",
    roll: 8,
    reg: 88,
    gender: "female",
    age: 90,
    allSub: {
      Bangla: 29,

      English: 28,

      Science: 27,

      Religion: 26,

      Accounting: 25,

      Arabic: 24,
    },
  },
  "Seikh Faisal": {
    name: "Seikh Faisal",
    roll: 9,
    reg: 99,
    gender: "male",
    age: 21,
    allSub: {
      Bangla: 59,

      English: 68,

      Science: 77,

      Religion: 86,

      Accounting: 95,

      Arabic: 56,
    },
  },
  "Obama bin Laden": {
    name: "Obama bin Laden",
    roll: 10,
    reg: 100,
    gender: "male",
    age: 35,
    allSub: {
      Bangla: 86,

      English: 68,

      Science: 82,

      Religion: 90,

      Accounting: 81,

      Arabic: 69,
    },
  },
};
