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
}

export const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529634828328-6b5e3b3c6e5e?w=800&q=80",
    alt: "First date",
    caption: "Our First Date 💕",
    date: "2021-01-15"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518105570919-e342af1a8275?w=800&q=80",
    alt: "Beach trip",
    caption: "Beach Adventures 🏖️",
    date: "2021-03-20"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Anniversary dinner",
    caption: "6 Months Anniversary 🥂",
    date: "2021-07-15"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    alt: "Concert night",
    caption: "Concert Night Together 🎵",
    date: "2021-09-10"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    alt: "Christmas celebration",
    caption: "First Christmas Together 🎄",
    date: "2021-12-25"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a5d8?w=800&q=80",
    alt: "New Year",
    caption: "New Year's Kiss ✨",
    date: "2022-01-01"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80",
    alt: "Valentine's Day",
    caption: "Valentine's Day 2022 💝",
    date: "2022-02-14"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd6f?w=800&q=80",
    alt: "Spring outing",
    caption: "Spring Picnic 🌸",
    date: "2022-04-05"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1529634597503-109e96477987?w=800&q=80",
    alt: "Summer vacation",
    caption: "Summer Vacation ☀️",
    date: "2022-06-20"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "1.5 Year anniversary",
    caption: "1.5 Years of Love 💖",
    date: "2022-07-15"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1469371670806-04369f95e727?w=800&q=80",
    alt: "Autumn walk",
    caption: "Autumn Strolls 🍂",
    date: "2022-10-12"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1518895949257-7621c7454f75?w=800&q=80",
    alt: "Holiday trip",
    caption: "Holiday Getaway 🎁",
    date: "2022-12-20"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1543807578-96099da8f272?w=800&q=80",
    alt: "New Year celebration",
    caption: "New Year 2023 🎆",
    date: "2023-01-01"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Valentine's 2023",
    caption: "Valentine's Day 2023 💐",
    date: "2023-02-14"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    alt: "Spring adventure",
    caption: "Spring Adventures 🌺",
    date: "2023-04-18"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80",
    alt: "Summer fun",
    caption: "Summer Fun 🌊",
    date: "2023-06-25"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "2.5 Year milestone",
    caption: "2.5 Years Strong 💞",
    date: "2023-07-15"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1469371670806-04369f95e727?w=800&q=80",
    alt: "Road trip",
    caption: "Road Trip Memories 🚗",
    date: "2023-09-08"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd6f?w=800&q=80",
    alt: "Winter wonderland",
    caption: "Winter Wonderland ❄️",
    date: "2023-12-15"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1529634828328-6b5e3b3c6e5e?w=800&q=80",
    alt: "3 Year anniversary",
    caption: "3 Years of Eternal Love 💍",
    date: "2024-01-15"
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "January 15, 2021",
    title: "The Day We Met",
    description: "Fate brought us together on this magical day. Little did I know that my life would change forever.",
    icon: "💫"
  },
  {
    id: 2,
    date: "February 14, 2021",
    title: "First Valentine's",
    description: "Our first Valentine's Day together - a beautiful beginning to many more celebrations of love.",
    icon: "💝"
  },
  {
    id: 3,
    date: "July 15, 2021",
    title: "6 Months Together",
    description: "Half a year of endless laughter, late-night talks, and falling deeper in love.",
    icon: "🥂"
  },
  {
    id: 4,
    date: "December 25, 2021",
    title: "First Christmas",
    description: "Spending Christmas together was the best gift I could ever ask for.",
    icon: "🎄"
  },
  {
    id: 5,
    date: "January 15, 2022",
    title: "1 Year Anniversary!",
    description: "One year down, forever to go. Every moment with you has been a beautiful adventure.",
    icon: "🎉"
  },
  {
    id: 6,
    date: "June 20, 2022",
    title: "Our First Trip",
    description: "Exploring the world together made us realize that home isn't a place - it's being with each other.",
    icon: "✈️"
  },
  {
    id: 7,
    date: "January 15, 2023",
    title: "2 Years of Love",
    description: "Two years of growing together, supporting each other, and building something truly special.",
    icon: "💕"
  },
  {
    id: 8,
    date: "January 15, 2024",
    title: "3 Years & Forever",
    description: "Three incredible years have passed, and my love for you grows stronger with each passing day. Here's to forever!",
    icon: "💍"
  }
];

export const coupleInfo = {
  name1: "Your Name",
  name2: "Partner's Name",
  anniversaryDate: "2021-01-15",
  message: "Three years ago, you walked into my life and made everything more beautiful. Every laugh we've shared, every tear we've wiped away, every moment we've created together has been a gift. Thank you for being my person, my partner in crime, my best friend. Here's to us and to forever. I love you more than words could ever express. 💕"
};