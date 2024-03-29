/**
 *! Task 01
 *? ১. এমন একটি ফর লুপ তৈরি করুন যেটা ০ থেকে শুরু হয়ে ২০০ পযন্ত ঘুরবে এবং কনসোলে শুধু মাত্র ৫০ থেকে ১০০ এবং ১৫০ থেকে ২০০ পযন্ত প্রিন্ট করবে।
 */
for (let i = 0; i <= 200; i++) {
  if (i >= 50 && i <= 100) console.log(i);
  if (i >= 150 && i <= 200) console.log(i);
}
console.log("-----------------");
/**
 *! Task 02
 ** ২. হোয়াইল লুপ তৈরি করুন যেটা ৫০০০ থেকে শুরু হবে এবং ১০০০ এ এসে শেষ হবে । প্রথি ধাপে লুপটি ৭ করে কমবে । আপনি যোর সংখ্যা গুলার মাঝে যেগুলো ১২ দিয়ে বিভাজ্য সেগুলা প্রিন্ট করুন।
 */

let i = 5000;

while (i >= 1000) {
  if (i % 12 == 0) console.log(i);
  i -= 7;
}
console.log("-----------------");
/**
 *! Task 03
 //? ৩. লুপের মাধ্যমে ৫, ৬, ৭ এবং ৮ এর নামতা বের করুন -ফর লুপ।
 */

for (let i = 1; i <= 10; i++) {
  console.log(`5*${i} = ${5 * i}`);
}
console.log("-----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`6*${i} = ${6 * i}`);
}
console.log("-----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`7*${i} = ${7 * i}`);
}
console.log("-----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`8*${i} = ${8 * i}`);
}
console.log("-----------------");

/**
 *! Task 04
 //* ৪. এমন একটি লুপ বানান যেটা ০ থেকে ১০০ পযন্ত গুরবে এবং পূনরায় ০ তে এসে থামবে - যেকোন লুপ দিয়ে করবেন।
 */

let reverse = false;

for (let i = 0; i <= 100; reverse ? i-- : i++) {
  console.log(i);

  if (i === 100) {
    reverse = true;
  }

  if (reverse == true && i == 0) {
    break;
  }
}
console.log("-----------------");
/**
 *! Task 05
 //? ৫. ৭ করে বারবে এমন একটি লুপ তেরি করুন যেটা শুরু হবে ১০০০ থেকে এবং শেষ হবে ৩০০০ এ এসে । এখন আপনি এর মাঝখানে শুধু ঐ সংখ্যা গুলা প্রিন্ট করান যা ৯ দিয়ে বিভ্যাজ্য এবং লুপটি ১১ দিয়ে বিভাজ্য কোন সংখ্যা পেলে বন্ধকরে দিন।
 */

for (let i = 1000; i <= 3000; i += 7) {
  if (i % 9 == 0) {
    console.log(i);
    if (i % 11 == 0) break;
  }
}
console.log("-----------------");
