# 🚀 Hướng dẫn deploy lên Vercel (Miễn phí)

## Bước 1: Push code lên GitHub

```bash
# Vào thư mục project
cd D:\Project\anniversary-website

# Khởi tạo git
git init

# Thêm file .gitignore
echo "node_modules
.next
.env" > .gitignore

# Commit code
git add .
git commit -m "anniversary website"

# Tạo repo trên GitHub rồi push lên
# Ví dụ: git remote add origin https://github.com/username/anniversary.git
# git branch -M main
# git push -u origin main
```

## Bước 2: Deploy lên Vercel

### Option A: Dùng giao diện web (Dễ nhất)

1. Truy cập: **https://vercel.com**
2. Sign up bằng GitHub
3. Click **"New Project"**
4. Import repo GitHub của bạn
5. Click **"Deploy"**
6. Chờ 1-2 phút → Xong! Có link website

### Option B: Dùng CLI

```bash
# Cài Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd D:\Project\anniversary-website
vercel
```

## Bước 3: Custom domain (Optional)

Nếu muốn dùng tên miền riêng (vd: `ourlove.vercel.app`):

1. Vào Vercel Dashboard
2. Project Settings → Domains
3. Add domain bạn muốn

---

## **Cách 2: Netlify (Alternatives)**

```bash
# Cài Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=out
```

Hoặc drag & drop folder lên: **https://app.netlify.com/drop**

---

## Checklist trước khi deploy:

- [ ] Đã thay tên trong `data/memories.ts`
- [ ] Đã thay 20 ảnh vào `public/images/`
- [ ] Đã cập nhật đường dẫn ảnh trong `data/memories.ts`
- [ ] Đã thêm `music.mp3` vào `public/`
- [ ] Đã test local: `npm run dev`
- [ ] Đã build thử: `npm run build`

---

## Sau khi deploy xong:

✅ Có link: `https://ten-ban-anniversary.vercel.app`
✅ Share cho người yêu/gia đình/bạn bè
✅ Website hoạt động 24/7, miễn phí!
