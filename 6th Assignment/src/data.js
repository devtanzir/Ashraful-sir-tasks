const users = [
  {
    id: "12356",
    userName: "আশরাফুল হক",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-1/333936078_1361956414655948_834213367116914942_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=imxv_ePv4TUAX_2b8pf&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBujQlxtE8S4FI0iRaS39hoZSxNsmyQyAIkVhUNW8nQag&oe=65F8B997",
    description: "অবশেষে -  সকল ধকল শেষে 😓",
    createdAt: "3 d",
    postImage: [
      {
        id: "46469",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/431932974_10225863319869433_1460814262140106149_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zB0xRa6MhhoAX9fwFpz&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBwG5B6NkBrTuoyeaEb4qTD8e30_cRAOsQ20fbwzbJyXQ&oe=65F89989",
      },
      {
        id: "68446",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/432023852_10225863320109439_5623427198710748681_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hq9zaci-RpEAX_2_hO9&_nc_ht=scontent.fdac148-1.fna&oh=00_AfCI5_PKXaFbeFRXUi6pEAAMWTFjuDg7M5WcQLA8xEnthQ&oe=65F8FA39",
      },
      {
        id: "684694",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/431879413_10225863319509424_9072427583239891333_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vsJ4D4Ki0scAX_e79N8&_nc_ht=scontent.fdac148-1.fna&oh=00_AfAdL2wQGsMsFRg76tWTqlbl8NyHefjIDSXurEgCzfvgtw&oe=65F759D2",
      },
    ],
  },
  {
    id: "688456",
    userName: "Mohammed Hasan Murad",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-1/397416097_6641316935958568_1282750161514504694_n.jpg?stp=c0.0.32.32a_cp0_dst-jpg_p32x32&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tsJXu330ufIAX-hBHNn&_nc_ht=scontent.fdac148-1.fna&oh=00_AfCkTNMBnJv6hHTEvqmhvvKIUI7w5OFLQQ6Q8-0cQPdAxA&oe=65F83FED",
    description:
      "এই ঝর্ণা যদি মিরসরাই না হয়ে বান্দরবান এর গহীণে হতো, এটার জনপ্রিয়তা আরো অনেক বেশি হতো।। খৈয়াছড়া, মিরসরাই।",
    createdAt: "12th March",
    postImage: [
      {
        id: "8565",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/430705361_7158742974244363_2541342619844107288_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cb6qQak0IXsAX_rHWJ8&_nc_ht=scontent.fdac148-1.fna&oh=00_AfCFC6o-h0O_BS997bW4xCdRSLps4c3YQbYrOAOobZ0QpQ&oe=65F7B7EA",
      },
    ],
  },
  {
    id: "96456",
    userName: "BD CarZz",
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfoRUf6ZdFe3T5R0L3peu31_2r4xSuvd-M6EVPs5TRaJ_x3mJ2",
    description: `ঢাকার UIU ক্যাম্পাসের মধ্যে দেখা মিললো, BMW i8 এর। ❤️👌
Photo Courtesy : Hamim Ahmad
▪️Join our Group : Car BUY/SELL by : BDCarZz 
#bmw #bdcarzz`,
    createdAt: "1 d",
    postImage: [
      {
        id: "4561",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/432589657_803035658528336_4236970155892908816_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WqSZoCfEiVoAX9jShFw&_nc_ht=scontent.fdac148-1.fna&oh=00_AfD_fQc-mjT_jomC5s1GSckeXQSjHGWP_tNhQMEWjw8pww&oe=65F8F17F",
      },
      {
        id: "9544",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/430091976_803035785194990_7424556969652717958_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VHd6ws2VQBkAX9GYTkL&_nc_ht=scontent.fdac148-1.fna&oh=00_AfALvFfp2UbfFZrU2A7m3OrRO5MjkP1jHP5IBfZTW4ywUg&oe=65F81561",
      },
      {
        id: "2555",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/432357717_803035838528318_3577176075849775906_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yolgZgNEr70AX83ULn0&_nc_ht=scontent.fdac148-1.fna&oh=00_AfAji81bKh9fJurel3sR2y7jPOM33nk87CUGPl5SjmEFuQ&oe=65F84AEC",
      },
    ],
  },
  {
    id: "9222",
    userName: "Muslim Books",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-1/420300106_122112733616172719_1697751508545384643_n.jpg?stp=c75.109.556.556a_cp0_dst-jpg_s40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=64zYpnA8NNQAX8yLSDK&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBjnYdECuXoWMqPGlKcC3uYsjhw2CaU_4sUm2mwqM7tqA&oe=65F87770",
    description: `বিজ্ঞানে মুসলিমদের অবদান প্রসজ্ঞে নাস্তিকদের দাঁত ভাজ্ঞা জবাব ! আপনি কি জানেন ক্যামেরা, ঘড়ি এর আবিস্কারক একজন মুসলিম বিজ্ঞানী? জানতে হলে পড়তে হবে এই বইটি ন্যাশনাল জিওগ্রাফিক থেকে প্রকাশিত 1001 Inventions : The Enduring Legacy of Muslim Civilization নামের বিশ্ববিখ্যাত গ্রন্থের বাংলা অনুবাদ গ্রন্থ মুসলিম সভ্যতার ১০০১ আবিস্কার।
বাংলা ভাষায় গ্রন্থটি অনুবাদ করেছেন বেস্টসেলার বই প্রোডাক্টিভ মুসলিমের অনুবাদক মিরাজ রহমান এবং উন্নয়ন গবেষক মো. আবুল বাশার।
মোট ৮ টি অধ্যায়ে এক শতাধিক টপিকভিত্তিক অসংখ্য-অগণিত আবিস্কার ও উন্নয়নের নেপথ্য ইতিহাস সংকলিত হয়েছে এ গ্রন্থে। পাশাপাশি যুক্ত করা হয়েছে মুসলিম সভ্যতার উন্নয়নের সময়কাল ও মুসলিম সভ্যতার প্রধান প্রধান অবদানের মানচিত্র শিরোনামের ২টি ব্যতিক্রমধর্মী টাইমলাইন। অসংখ্য হিস্ট্রিক্যাল ছবি সংবলিত সাড়ে ৯ ইঞ্চি বাই সাড়ে ৬ ইঞ্চি রয়েল সাইজের ৩৮০ পৃষ্ঠার বৃহৎ কলেবরের গ্রন্থটি প্রকাশ করেছেন সুলতানস।
সুতরাং আর দেরি না কারে আজই অর্ডার করুন। ম্যাসেজ করুন আমাদের ফেসবুক পেইজে অথাব ওটসআপন নম্বরে অথবা সরাসরি কল করুন আমাদের কাস্টমার কেয়ার 01810011125 বা 01810011126 নম্বরে`,
    createdAt: "1 Minute ago",
  },
  {
    id: "84533",
    userName: "MEMES HUB",
    avatar:
      "https://yt3.ggpht.com/t82OGSc4X69ltYCfgU2CD1L-6YH0js-eAEkuMEt-M8O3p_n4KjRKJj-so9flomJeWJeRILC1=s48-c-k-c0x00ffffff-no-rj",
    description: `1 minute funny videos`,
    createdAt: "15 August",
    video: "https://www.youtube.com/embed/zBjJUV-lzHo",
  },
  {
    id: "111123",
    userName: "আহমেদ তাফসির",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/432616147_722893136655175_4913273566441964979_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BO8MUCa3icAAX-PDW0B&_nc_ht=scontent.fdac148-1.fna&oh=00_AfAePg2gyvLPiEFPFqr5ECeSkQSG8pOap1NIZ40feJ6Ztw&oe=65F83B97",
    description: `অভিজ্ঞদের থেকে পরামর্শ চাচ্ছি, আরো কত কি.মি চালানো যাবে ?? 🙂
📌 মিলনছড়ি, বান্দরবান।`,
    createdAt: "1 h",
    postImage: [
      {
        id: "3587",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/417553369_724320459845776_6781286217417907173_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yeFRDlITQUIAX9JreN9&_nc_ht=scontent.fdac148-1.fna&oh=00_AfC6CJdLGkRI05WbOXLFyqq-YA32a_YmKcR1U1-orrZ_kg&oe=65F78B82",
      },
    ],
  },
  {
    id: "7777545",
    userName: "Wahid Islam",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-1/137546020_110123574324133_488864938424622723_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=X_Z83AVBx_wAX-FINfD&_nc_ht=scontent.fdac148-1.fna&oh=00_AfA6kCeWdvoOPkwXKm5PcuzAUIp5hP1IjJOwg2JM2tp-dQ&oe=661AC47B",
    description: `AIUB has opened two undergraduate program which are offering 148 credit 4 year BSc. in Computer Network & Cyber Security and BSc. in Data Science. It's a spectacular move from AIUB among all the public & private university in Bangladesh. Recently, AIUB is recognized as the top 10 engineering college in Asia which is a great message of progress in the education milestone of Bangladesh. Those who are interested in Cyber Security & Data Science, now they can study for the 4 year bachelor program💥`,
    createdAt: "8h",
  },
  {
    id: "7556",
    userName: "ThePhanin",
    avatar:
      "https://yt3.googleusercontent.com/ytc/AIdro_lt0fsUwF8ANgMk0wsYiY5eVmfwTKwf5qidpSB34w=s176-c-k-c0x00ffffff-no-rj",
    description: `This Is It ? 😮`,
    createdAt: "1 d",
    video: "https://www.youtube.com/embed/tCRbVEGHZlQ",
  },
  {
    id: "0112520",
    userName: "Habibullah Hoque Polash",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-1/395069980_1508317093303015_7625093565391545970_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M2_JhSi95FUAX8g3SsY&_nc_ht=scontent.fdac148-1.fna&oh=00_AfCDuz8X8jke0wKzwkApIB3e0vWKUb37aMAyEn2GSk0Ecg&oe=65F86645",
    description: `আসসালামু আলাইকুম। 
আশা করি সবাই ভালো আছেন।
আমি একটা PC Build করতে চাই। (Budget 60k With Monitor) কিন্তু Component Selection নিয়ে একটু দ্বিধাদ্বন্দে রয়েছি।
PC  Build করার উদ্দেশ্য : 
Productivity- Multitasking, Graphics Design, Video Editing, Digital Marketing, Freelancing etc. 
অনেকগুলো  Tab ওপেন করে যেন smoothly চালাইতে পারি এবং ভবিষ্যতে যেন PC Update করার সুযোগ থাকে।
গ্রুপে অনেক অভিজ্ঞতা সম্পূর্ণ বড় ভাই/ব্রাদার্স আছেন। আমি ছোটভাই হিসেবে কিছু সাজেশন আশা করছি।
N.B: Picture For Attention, Also this is my Dream set-up.`,
    createdAt: "3 d",
    postImage: [
      {
        id: "3587",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/431928826_1587906932010697_8441010378672153832_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=47cUZFSXGgEAX8Jik9a&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBQJO045UUvKDGCB3ggzYLxgcfH_acQMokrCaXyOTbldg&oe=65F894F7",
      },
    ],
  },
  {
    id: "555555",
    userName: "আশরাফুল হক",
    avatar:
      "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-1/333936078_1361956414655948_834213367116914942_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=imxv_ePv4TUAX_2b8pf&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBujQlxtE8S4FI0iRaS39hoZSxNsmyQyAIkVhUNW8nQag&oe=65F8B997",
    description: `যাত্রা শুরু হোক এবার ফ্রন্ট এন্ড ডেভেলপমেন্টের - রিয়েক্ট, রিডাক্স এবং ফায়ারবেইজ এর সাথে এখুনি
যারা ফ্রন্টএন্ড ডেভোলপমেন্ট এ নিজের ক্যারিয়ার তৈরির কথা ভাবছেন তাদের কথা ভেবেই শুরু হতে যাচ্ছে কোর্সটি । রিয়েক্টের একেবারে শুন্য থেকে শুরু করে রিডাক্স হয়ে ফায়ারবেইজকে সাথে নিয়ে আমরা যার প্রফেসনাল ফ্রন্টএন্ড ডেভোলপমেন্ট এর দিকে । তাই আর দেরি কেন, এখুনি রেডিস্ট্রেসন করে নিজের আসনটি নিশ্চিত করুন এখুনি
কি কি থাকছে এই কোর্স এ
রিয়েক্ট জেএস ফর ফ্রন্টেন্ড ডেভোলপমেন্ট
রিডাক্স জে এস ফর এডভান্স স্টেইট ম্যানেজমেন্ট
ফায়ারবেইজ ফর বেকেন্ড ফিচারস ওইথ অথেন্টিকেসন
রেস্ট এপিআই ডিজাইন ওইথ জেসন প্লেসহোল্ডার
৫টি প্রফেসনাল পোর্টফোলিও প্রজেক্ট
কম্প্লিড ক্যারিয়ার গাইডলাইন
প্রজেক্টসমুহ যা আমরা দেখবো
সোসাল সাইট ডেভোলপমেন্ট লাইক ফেইছবুক
অনলাইন স্টোর সিসটেম ওইথ কার্ট এন্ড ওইশলিস্ট
প্রেজেক্ট মেনেজমেন্ট টুলস লাইক ট্রেলো
গুগল ক্যালেন্ডার ক্লোন ওইথ অল ফিচারস
এডভান্স টুডু মেনেজমেন্ট
কোর্সটির বিশেষত্ব
সপ্তাহে ‍২টি জুম লাইভ ক্লাশ ( ২ ঘন্টা+ করে )
প্রতিটি ক্লাশের রেকর্ডেড ভিডিও রিসোস
প্রত্যেক ক্লাশের স্পেসাল নোট প্রদান
রিয়েল লাইফ প্রজেক্ট সেসন ওইথ সোস কোড
প্রবলেম সল্ভিং এর জন্য বিশেষ সার্পোট সেসন
প্রতি সপ্তাহে বিশেষ এসাইনমেন্ট
টিম হয়ে এক সাথে গ্রুপ স্টাডি
মেধা যাচাই এর জন্য ফাইনাল এক্জাম
কোর্স শেষে সার্টিফিকেট প্রদান
টপ ১০ জনকে বিশেষ পুরষ্কার প্রদান
কোর্সটির মেয়াদকাল
৪ মাস ব্যাপি লাইভ সেসন
সপ্তাহে ২ টি জুম লাইভ ক্লাশ ( শুক্রবার এবং রবিবার রাত ১০ টা থেকে ১২ টা )
মোট ৩২ টি ক্লাশ
কোর্সটির উদ্দেস্য
একজন আত্নবিশ্বাসী প্রফেসনাল রিয়েক্ট ডেভোলপার হিসেবে নিজেকে গড়ে তুলা
বর্তমান সময়ে জব মার্কেটে কাজ করার উপযোগী দক্ষতায় নিজেকে প্রস্তুত করা
রিয়েক্ট , রিডাক্স, ফায়ারবেইজ সহ এপিআই নিয়ে প্রফেসনাল ভাবে কাজ করার দক্ষতা অর্জন করা
৫ টি প্রফেসনাল প্রজেক্ট করার মাধ্যমে নিজের দক্ষতাকে এক অনন্য লেভেলে নিয়ে যাওয়া
সেই সাথে ফ্রিলেন্সিং মার্কেটপ্লেস সহ জব মার্কেটে নিজের এই দক্ষতাকে কাজে লাগিয়ে একটি সুন্দর ক্যারিয়ার তৈরি করা
কোর্সটি শুরুর আগে
HTML , CSS, Bootstrap নিয়ে কাজ করার অভিজ্ঞতা থাকতে হবে
অবশ্যই কোর JavaScript সম্পর্কে ভাল ধারনা থাকতে হবে
বিশেষ করে Array & Object এর পাশাপাশি মর্ডান জাভাস্ক্রিপ্ট এর ভাল ধারনা থাকতে হবে
বেসিক গিট এবং গিটহাব এর ব্যবহার জনতে হবে, এডভান্স ইউজ এই কোর্সএ দেখানো হবে
সর্বোপরি ধৈর্য সহকারে নতুন নতুন জিনিস শেখার প্রবল আগ্রহ এবং চেষ্টা থাকতে হবে
কোর্সটি কাদের জন্য নয়
যারা পরিশ্রম করতে চাননা এবং অলস
অল্প পরিশ্রম করে বেশি পেতে চান
প্রতিটি দিনকে যারা গুছিয়ে কাজ করেন না
নিজের প্রতি নিজে দায়িত্বশীল নন
রিফান্ড পলিসি
কোর্স চলাকালিন যে কোন সময় আপনার ভাল না লাগলেই অফিশিয়ালী ২৪ ঘন্টার মাঝে আপনি রিফান্ড পেয়ে যাবেন
ক্লাশ শুরু হবে ২৯ মার্চ শুক্রবার রাত ঠিক ১০ টায়
ভর্তির শেষ সময় ২৫ মার্চ রাত ১০ টা
কোর্স সম্পর্কে আরো জানতে 01818 3031 04 ( whatsapp )
রেজিস্ট্রেসন লিংক : https://forms.gle/NDLcyndNuVbKvRVa8`,
    createdAt: "5 d",
    postImage: [
      {
        id: "12426",
        image:
          "https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/431537859_10225853814191797_5214657890090286313_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1g0Md2F8aHwAX_JnR9G&_nc_ht=scontent.fdac148-1.fna&oh=00_AfATYxlUf7Tvppb65fj9NVP5yChsp-0nqZ5n0Kmt40Jcsw&oe=65F7E742",
      },
      {
        id: "94123",
        image:
          "https://png.pngtree.com/png-vector/20220710/ourmid/pngtree-colorful-register-now-vector-png-image-png-image_5831724.png",
      },
      {
        id: "684694",
        image: `https://www.omni-academy.com/wp-content/uploads/2022/06/Full-Stack-Java-ScriptDeveloper-Training-Course-Thumbnil-omni.jpg`,
      },
    ],
  },
];
