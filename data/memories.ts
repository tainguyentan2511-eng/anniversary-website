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
    src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80",
    alt: "Eiffel Tower Date",
    caption: "A Night to Remember in Paris 💕",
    date: "2021-01-15"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
    alt: "Beach Sunset",
    caption: "Sunsets and Soulmates 🌅",
    date: "2021-03-20"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469371670806-04369f95e727?w=1200&q=80",
    alt: "Lakeside Picnic",
    caption: "Picnic by the Lake 🧺",
    date: "2021-07-15"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a5d8?w=1200&q=80",
    alt: "Luxury Dinner",
    caption: "Celebrating Our Growth 🥂",
    date: "2021-09-10"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518105570919-e342af1a8275?w=1200&q=80",
    alt: "Art Gallery",
    caption: "Lost in Art and You 🎨",
    date: "2021-12-25"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
    alt: "New Year City Lights",
    caption: "A New Year, A New Chapter ✨",
    date: "2022-01-01"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
    alt: "Morning Coffee Date",
    caption: "Những sáng bình yên cùng nhau ☕",
    date: "2022-03-12"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1200&q=80",
    alt: "Rainy Street Walk",
    caption: "Đi bộ dưới mưa, tim vẫn nắng ☔",
    date: "2022-05-21"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=1200&q=80",
    alt: "Movie Night",
    caption: "Buổi tối phim và vòng tay ấm áp 🎬",
    date: "2022-10-08"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    alt: "Garden Portrait",
    caption: "Bức ảnh em yêu nhất trong năm 🌿",
    date: "2023-02-19"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    alt: "Road Trip Moment",
    caption: "Mỗi cung đường đều đáng nhớ 🚗",
    date: "2023-07-02"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
    alt: "Golden Smile",
    caption: "Nụ cười làm anh muốn dừng thời gian ✨",
    date: "2024-01-15"
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "January 15, 2021",
    title: "The First Gaze",
    description: "Trong khoảnh khắc giao thoa của định mệnh, đôi mắt chúng ta gặp nhau, và vũ trụ thì thầm rằng đây chính là khởi đầu của một điều vĩnh cửu.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80"
  },
  {
    id: 2,
    date: "February 14, 2021",
    title: "Sweet Beginnings",
    description: "Một ngày Valentine đầu tiên, đơn giản mà ngọt ngào, như nốt nhạc đầu tiên trong bản giao hưởng tình yêu của chúng ta.",
    icon: "🌹",
    image: "/Image/2024/ValentineFirst.JPG"
  },
  {
    id: 3,
    date: "July 15, 2021",
    title: "Golden Hour Glow",
    description: "Sáu tháng của tiếng cười và những giấc mơ được dệt nên. Mỗi hoàng hôn bên em là một kiệt tác của tình yêu.",
    icon: "🌅",
    image: "/Image/2024/AFterSixMonth.JPG"
  },
  {
    id: 4,
    date: "January 15, 2022",
    title: "One Year of Magic",
    description: "365 ngày để lựa chọn em. Một năm trôi qua như một giấc mơ đẹp mà chúng ta không bao giờ muốn tỉnh dậy.",
    icon: "💍",
    image: "/Image/2024/1year.jpg"
  },
  {
    id: 5,
    date: "August 20, 2022",
    title: "The Great Escape",
    description: "Du hành khắp thế gian, nhưng anh nhận ra rằng điểm đến yêu thích nhất của anh vĩnh viễn là em.",
    icon: "✈️",
    image: "/Image/2024/Om.JPG"
  },
  {
    id: 6,
    date: "January 15, 2024",
    title: "Three Years & Beyond",
    description: "Ba năm tình yêu vĩnh cửu. Chúng ta không chỉ cùng nhau trưởng thành, mà còn yêu sâu đậm hơn mỗi ngày.",
    icon: "💎",
    image: "/Image/2025/IMG_6415.JPG"
  },
  {
    id: 7,
    date: "June 03, 2024",
    title: "Midnight Promises",
    description: "Một đêm rất dài, chúng ta nói về những ước mơ nhỏ, rồi nhận ra tương lai đẹp nhất là tương lai có nhau.",
    icon: "🌙",
    image: "/Image/2026/timeline5.jpg"
  },
  {
    id: 8,
    date: "January 15, 2025",
    title: "Still Choosing You",
    description: "Không phải một lần, mà là mỗi ngày. Em vẫn chọn anh giữa hàng ngàn điều ngẫu nhiên của cuộc sống.",
    icon: "🕊️",
    image: "/Image/2026/timeline6.jpg"
  }
];

export const coupleInfo = {
  name1: "TAN TAI",
  name2: "HA VY",
  anniversaryDate: "2024-04-28",
  message: "Ba năm trước, anh bước vào cuộc đời em và biến mọi thứ trở nên đẹp đẽ hơn. Mỗi tiếng cười chúng ta sẻ chia, mỗi giọt nước mắt chúng ta lau khô, mỗi khoảnh khắc chúng ta tạo ra cùng nhau đều là một món quà. Cảm ơn anh vì đã là người của em, người bạn đồng hành trong mọi cuộc phiêu lưu, người bạn thân nhất của em. Chúc mừng tình yêu của chúng ta và mãi mãi về sau. Em yêu anh nhiều hơn mọi lời nói có thể diễn tả. Với mỗi ngày trôi qua, câu chuyện của chúng ta ngày càng sâu sắc và huyền bí hơn." // Added a more mysterious ending
};