export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    src: "/Image/2023/IMG_20230706_204444.jpg",
    alt: "",
    caption: "Vũng Tàu 🌅",
    date: "2023-07-06"
  },
  {
    id: 2,
    src: "/Image/2023/IMG_20230701_102218.jpg",
    alt: "Le Lam",
    caption: "He he anh nhìn thấy thương ghê hh",
    date: "2023-07-01"
  }, 
  {
    id: 3,
    src: "/Image/2023/IMG_20230718_214111.jpg",
    alt: "Beach",
    caption: "Đi mà sợ Vũng Tàu nó ế hay gì á em hh 🧺",
    date: "2021-07-18"
  },
  {
    id: 4,
    src: "/Image/2023/IMG_20230628_102605.jpg",    
    alt: "Zoo",
    caption: "Mình đi sở thú nè",
    date: "2023-06-28"
  },
  {
    id: 5,
    src: "/Image/2023/IMG_20231013_044321.jpg",    
    alt: "Earn mony",
    caption: "GHN 24h 🎨",
    date: "2023-10-13"
  },
  {
    id: 6,
    src: "/Image/2024/24_0101_00.JPG",   
    alt: "New Year - Rex hotel",
    caption: "A New Year, A New Chapter ✨",
    date: "2024-01-01"
  },
  {
    id: 7,
    src: "/Image/2024/24_0101_16.JPG",   
    alt: "After 0101",
    caption: "Mình đi chơi lễ nè☕",
    date: "2024-01-01"
  },
  { 
    id: 8,
    src: "/Image/2024/24_0803.JPG",   
    alt: "Wonmen Day",
    caption: "Quà 08/03 đầu tiên cho em☔",
    date: "2024-03-08"
  },
  {
    id: 9,
    src: "/Image/2024/24_0911.JPG",   
    alt: "Normal day",
    caption: "Buổi chiều tối em nấu cơm mang lên cho anh nè 🎬",
    date: "2024-11-09"
  },
  {
    id: 10,
    src: "/Image/2024/24_1804.JPG",   
    alt: "Cafe Date",
    caption: "Bức ảnh em tự chụp nè🌿",
    date: "2024-04-18"
  },
  {
    id: 11,
    src: "/Image/2024/24_1402.JPG",   
    alt: "Beach Trip",
    caption: "Chuyến đi biển đầu tiên của hai đứa 🚗",
    date: "2024-02-14"
  },
  {
    id: 12,
    src: "/Image/2024/24_2010.JPG",   
    alt: "Women Viet Nam day",
    caption: "Tặng gấu cho em✨",
    date: "2024-10-20"
  },

  {
    id: 13,
    src: "/Image/2024/24_2206.JPG",   
    alt: "VT",
    caption: "Lại là Vũng Tàu năm thứ 2 nè✨",
    date: "2024-06-22"
  },

  {
    id: 14,
    src: "/Image/2024/24_24121.JPG",   
    alt: "Giáng Sinh",
    caption: "Đón giáng sinh cùng nhau✨",
    date: "2024-12-24"
  },

  {
    id: 16,
    src: "/Image/2024/24_2804.JPG",   
    alt: "Xem phim",
    caption: "Lời thú nhận em trap anh, em nhớ hông đúng một năm luôn ✨",
    date: "2024-04-28"
  },

  {
    id: 17,
    src: "/Image/2024/DNSU1393.JPG",   
    alt: "Gấu ",
    caption: "Đẹp quá nè em ✨",
    date: "2024-10-20"
  },
  {
    id: 18,
    src: "/Image/2024/EMZT5539.JPG",   
    alt: "Gấu ",
    caption: "Nữa nè✨",
    date: "2024-10-20"
  },
  {
    id: 19,
    src: "/Image/2024/IMG_0529.JPG",   
    alt: "Beach QN",
    caption: "Biển Quy Nhơn em✨",
    date: "2024-02-18"
  },
    {
    id: 21,
    src: "/Image/2024/IMG_0572.JPG",   
    alt: "Túi",
    caption: "Quà em mua tặng cho anh valentine đầu nè✨",
    date: "2024-02-18"
  },
    {
    id: 22,
    src: "/Image/2024/IMG_1120.JPG",   
    alt: "Cafe",
    caption: "Đâu dậy em✨",
    date: "2024-04-18"
  },
    {
    id: 23,
    src: "/Image/2024/IMG_1326.JPG",   
    alt: "Hoa",
    caption: "Hoa đẹp tặng tốt nghiệp em nhưng anh buồn một chút✨",
    date: "2024-04-27"
  },
    {
    id: 24,
    src: "/Image/2024/IMG_2023.JPG",   
    alt: "VT ",
    caption: "Vũng Tàu quài dạ, hình như là 60% là VT em ơi✨",
    date: "2024-07-22"
  },
    {
    id: 25,
    src: "/Image/2024/IMG_2062.JPG",   
    alt: "VT ",
    caption: "Nữa na✨",
    date: "2024-07-22"
  },
    {
    id: 26,
    src: "/Image/2024/IMG_3137.JPG",   
    alt: "Hehe ",
    caption: "Anh với em biết thôi nhé, anh dị qué✨",
    date: "2024-10-20"
  },
    {
    id: 27,
    src: "/Image/2024/IMG_3533.JPG",   
    alt: "NVHSV ",
    caption: "Đi mua bánh tráng phan thiết, zui za✨",
    date: "2024-12-28"
  },
    {
    id: 28,
    src: "/Image/2024/EMZT5539.JPG",   
    alt: "Gấu ",
    caption: "Nữa nè✨",
    date: "2024-10-20"
  },
    {
    id: 29,
    src: "/Image/2024/IMG_3542.JPG",   
    alt: "LL ",
    caption: "Mình có cãi nhau hông✨",
    date: "2024-12-28"
  },
    {
    id: 30,
    src: "/Image/2024/ONHM8488.JPG",   
    alt: "No ",
    caption: "",
    date: "2024-02-14"
  },
    {
    id: 31,
    src: "/Image/2024/PUIP0649.JPG",   
    alt: "No ",
    caption: "",
    date: "2024-02-14"
  },
    {
    id: 32,
    src: "/Image/2025/25_1404.JPG",   
    alt: "Cơm ",
    caption: "Ngon quá nè em✨",
    date: "2025-04-17"
  },
    {
    id: 33,
    src: "/Image/2025/IMG_3646.JPG",   
    alt: "Cơm ",
    caption: "Nữa nè✨",
    date: "2025-01-18"
  },
    {
    id: 34,
    src: "/Image/2025/IMG_3739.JPG",   
    alt: "QN ",
    caption: "Mình chơi tết cùng nhau nè✨",
    date: "2025-01-31"
  },
    {
    id: 35,
    src: "/Image/2025/IMG_4952.JPG",   
    alt: "Sinh Nhật em",
    caption: "Anh thức trắng đêm làm quà cho em, mặc dù ko ưng lắm nhưng em rất vui",
    date: "2025-10-11"
  },
    {
    id: 36,
    src: "/Image/2025/IMG_5608.JPG",   
    alt: "LTN ",
    caption: "Quá xinh, dẫn em đi lễ tốt nghiệp✨",
    date: "2025-12-28"
  },
    {
    id: 37,
    src: "/Image/2025/IMG_5640.JPG",   
    alt: "Pháo hoa ",
    caption: "Đón giao thừa cùng nhau✨",
    date: "2026-01-01"
  },
    {
    id: 39,
    src: "/Image/2025/IMG_6365.JPG",   
    alt: "0803 ",
    caption: "Muộn nhưng em rất vui✨",
    date: "2026-03-08"
  },
    {
    id: 40,
    src: "/Image/2025/IMG_6430.JPG",   
    alt: "Valentine ",
    caption: "Quà valentine của 2 đứa✨",
    date: "2026-03-14"
  },
    {
    id: 41,
    src: "/Image/2025/IMG_6458.JPG",   
    alt: "Hehe ",
    caption: "Nữa nè✨",
    date: "2026-03-15"
  },

  {
    id: 42,
    src: "/Image/2025/IMG_6668.JPG",   
    alt: "Earn Mony ",
    caption: "Secom",
    date: "2026-04-11"
  },
  {
    id: 43,
    src: "/Image/2025/IMG_6612.JPG",   
    alt: "Hồ đá ",
    caption: "Làng đại học",
    date: "2026-04-05"
  },
  {
    id: 44,
    src: "/Image/2025/IMG_6672.JPG",   
    alt: "",
    caption: "",
    date: "2026-04-11"
  },
  {
    id: 45,
    src: "/Image/2025/IMG_5175.JPG",   
    alt: "",
    caption: "",
    date: "2025-11-06"
  },

  {
    id: 46,
    src: "/Image/2025/IMG_5157.JPG",   
    alt: "VT",
    caption: "Đem bánh về cho em",
    date: "2026-11-03"
  },

  {
    id: 47,
    src: "/Image/2025/IMG_4820.JPG",   
    alt: "Mege mark",
    caption: "Cùng đi siêu thị",
    date: "2025-09-07"
  },

    {
    id: 48,
    src: "/Image/2025/IMG_4263.JPG",   
    alt: "Dỗi",
    caption: "Giận anh dễ thương dậy sao",
    date: "2025-05-27"
  },

    {
    id: 49,
    src: "/Image/2025/IMG_4100.JPG",   
    alt: "Sky",
    caption: "Ngon qué",
    date: "2025-04-20"
  },

    {
    id: 50,
    src: "/Image/2025/IMG_4820.JPG",   
    alt: "Mege mark",
    caption: "Cùng đi siêu thị",
    date: "2025-09-07"
  },

    {
    id: 51,
    src: "/Image/2025/CDJT4897.JPG",   
    alt: "Tết ",
    caption: "Em qua nhà",
    date: "2026-02-15"
  },

    {
    id: 52,
    src: "/Image/2025/DRFY7824.JPG",   
    alt: "",
    caption: "",
    date: "2026-02-15"
  },

    {
    id: 53,
    src: "/Image/2026/unnamed (1).jpg",   
    alt: "Zoo",
    caption: "",
    date: "2026-04-23"
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "May 20, 2023",
    title: "The First Gaze",
    description: "Lần đầu tụi mình đi xem phim cùng nhau. Không có gì quá đặc biệt, chỉ là hai đứa ngồi cạnh nhau…. Và rồi mình chính thức thuộc về nhau.",
    icon: "✨",
    image: "/Image/2023/FirtDay.jpg"
  },
  {
    id: 2,
    date: "February 14, 2024",
    title: "Our First Valentine",
    description: "Valentine đầu tiên của tụi mình. Em còn nhớ không, em tặng anh một chiếc ví… đến giờ anh vẫn còn dùng. Còn anh tặng em chiếc vòng tay bị mất lần thứ 2 thì phải.",
    icon: "🌹",
    image: "/Image/2024/ValentineFirst.JPG"
  },
  {
    id: 3,
    date: "July 15, 2024",
    title: "Half a Year",
    description: "Sáu tháng bên nhau.Có những lúc cả hai đều không ổn, thậm chí tệ đến mức tột cùng. Nhưng tụi mình vẫn không rời đi — vẫn cùng buồn, cùng cười, và ở lại. Và có lẽ, chỉ cần vậy thôi… cũng đã đủ quan trọng rồi.",
    icon: "🌅",
    image: "/Image/2024/AFterSixMonth.JPG"
  },
  {
    id: 4,
    date: "January 15, 2024",
    title: "One Year Later",
    description: "Không phải lần đầu đi Vũng Tàu, nhưng đó là khoảnh khắc anh nhớ nhất. Em quay video, cười rất vui: “Hôm nay tui đi Vũng Tàu với người yêu nè mọi người,đi sáng chiều có mặt lại Sài Gòn là bình thường nha!” Em vui thật…mà lúc đó anh lại thấy thương em nhiều hơn. Thương vì chuyến đi đó tụi mình chẳng có kế hoạch gì, chỉ là đi vội rồi lại về vội. Thương vì đáng lẽ em có thể có một chuyến đi trọn vẹn hơn. Còn anh, lúc đó chỉ thấy mình… chưa đủ tốt.",
    icon: "💍",
    image: "/Image/2024/1year.jpg"
  },
  {
    id: 5,
    date: "August 20, 2024",
    title: "The Trip",
    description: "Không phải đi đâu cả. Chỉ là một ngày bình thường ở phòng trọ. Em nằm ngủ trong vòng tay anh, rất ngoan, rất yên. Anh nhìn một lúc lâu… rồi chụp lại. Không vì gì lớn lao, chỉ là lúc đó anh thấy… bình yên thật.",
    icon: "✈️",
    image: "/Image/2024/Om.JPG"
  },
  {
    id: 6,
    date: "January 15, 2026",
    title: "Growing Together",
    description: "Thêm một năm nữa. Tụi mình không còn là hai đứa như lúc đầu nữa, nhưng lại hiểu nhau hơn, thương nhau theo một cách sâu hơn. Không ồn ào, nhưng đủ để biết mình quan trọng với nhau thế nào.",
    icon: "💎",
    image: "/Image/2025/IMG_6415.JPG"
  },
  {
    id: 7,
    date: "June 03, 2026",
    title: "That Night",
    description: "Có những buổi hẹn hò chỉ ngồi ăn uống nói chuyện hủ tiếu này kia đồ thôi, không làm gì đặc biệt. Nhưng chính những lúc như vậy, anh lại thấy rõ nhất rằng: tương lai của anh, nếu có, thì nhất định phải có em.",
    icon: "🌙",
    image: "/Image/2026/timeline5.jpg"
  },
  {
    id: 8,
    date: "January 15, 2026",
    title: "Still Choosing You",
    description: "Không phải một khoảnh khắc nào đó, mà là mỗi ngày. Giữa rất nhiều điều ngoài kia, anh vẫn chọn em — không phải vì thói quen, mà vì anh thật sự muốn vậy.",
    icon: "🕊️",
    image: "/Image/2026/timeline6.jpg"
  }
];

export const coupleInfo = {
  name1: "TAN TAI",
  name2: "HA VY",
  anniversaryDate: "2023-04-28",
  message: "Ba năm trước, em bước vào cuộc đời anh và biến mọi thứ trở nên đẹp đẽ hơn. Mỗi tiếng cười chúng ta sẻ chia, mỗi giọt nước mắt chúng ta lau khô, mỗi khoảnh khắc chúng ta tạo ra cùng nhau đều là một món quà. Cảm ơn em vì đã là người của anh, người bạn đồng hành trong mọi cuộc phiêu lưu, và là người bạn thân nhất của anh. Chúc mừng tình yêu của chúng ta, cho hôm nay và mãi mãi về sau. Anh yêu em nhiều hơn mọi lời nói có thể diễn tả. Với mỗi ngày trôi qua, câu chuyện của chúng ta lại càng sâu sắc hơn."
};