# 💕 3-Year Anniversary Website

Website kỉ niệm 3 năm yêu nhau - Professional & Romantic Design

## 🎯 Features

- ✨ **Hero Section** - Landing page với animation đẹp mắt
- 📅 **Timeline** - Interactive timeline kể chuyện tình yêu
- 📸 **Photo Gallery** - 20 ảnh với masonry layout + lightbox viewer
- ⏰ **Countdown Timer** - Đếm ngược đến anniversary tiếp theo
- 💌 **Love Letter** - Thư tình cảm động
- 🎵 **Music Player** - Phát nhạc nền (your song)
- 💕 **Floating Hearts** - Animation trái tim bay
- 📱 **Responsive** - Hoạt động trên mọi thiết bị

## 🚀 Quick Start

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website

### 3. Build production
```bash
npm run build
npm start
```

## 🎨 Customization

### Thay đổi thông tin couple

Mở file `data/memories.ts` và chỉnh sửa:

```typescript
export const coupleInfo = {
  name1: "Tên của bạn",
  name2: "Tên người yêu",
  anniversaryDate: "2021-01-15", // Ngày kỉ niệm
  message: "Tin nhắn tình cảm của bạn..."
};
```

### Thay đổi ảnh

Trong `data/memories.ts`,修改 mảng `photos`:

```typescript
{
  id: 1,
  src: "link-ảnh-của-bạn", // Có thể là URL hoặc path local: "/images/photo1.jpg"
  alt: "Mô tả ảnh",
  caption: "Caption hiển thị",
  date: "2021-01-15"
}
```

**Để thêm ảnh local:**
1. Tạo folder `public/images/`
2. Cho 20 ảnh của bạn vào đó
3. Sửa `src` thành `/images/ten-anh.jpg`

### Thay đổi timeline events

Trong `data/memories.ts`,修改 mảng `timelineEvents`:

```typescript
{
  id: 1,
  date: "January 15, 2021",
  title: "Tiêu đề sự kiện",
  description: "Mô tả sự kiện...",
  icon: "💫" // Emoji icon
}
```

### Thêm nhạc nền

1. Chuẩn bị file MP3
2. Đổi tên thành `music.mp3`
3. Cho vào folder `public/`
4. Music player sẽ tự động phát

## 🌐 Deployment

### Deploy lên Vercel (Miễn phí)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Hoặc push lên GitHub rồi kết nối với Vercel để auto-deploy

### Deploy lên các platform khác

Website có thể deploy lên bất kì platform nào hỗ trợ Node.js:
- **Netlify**
- **Railway**
- **Render**
- **Fly.io**

## 📁 Project Structure

```
anniversary-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Timeline.tsx     # Timeline component
│   ├── Gallery.tsx      # Photo gallery
│   ├── Countdown.tsx    # Countdown timer
│   ├── LoveLetter.tsx   # Love letter section
│   ├── Footer.tsx       # Footer
│   ├── MusicPlayer.tsx  # Music player
│   └── FloatingHearts.tsx # Hearts animation
├── data/
│   └── memories.ts      # Data: photos, timeline, couple info
├── public/              # Static files (images, music)
└── package.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Dancing Script, Playfair Display

## 💡 Tips

1. **Ảnh chất lượng cao** - Sử dụng ảnh rõ nét, compression tốt để web load nhanh
2. **Nhạc nền** - Chọn bài hát có ý nghĩa với hai người
3. **Message cảm động** - Viết thư tình từ trái tim
4. **Màu sắc** - Có thể đổi màu trong `tailwind.config.js`
5. **SEO** - Sửa metadata trong `app/layout.tsx`

## 🎉 Result

Một website kỉ niệm chuyên nghiệp, đẹp mắt với:
- Smooth animations
- Interactive elements
- Responsive design
- Elegant typography
- Romantic color palette

---

Made with 💕 for your special occasion
