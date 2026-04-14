# 📚 Hướng dẫn GitHub cho người mới bắt đầu

## Bước 1: Cài đặt Git

### 1. Tải Git
- Truy cập: **https://git-scm.com/download/win**
- Click vào **"Click here to download"** (bản 64-bit)
- Chờ tải xong

### 2. Cài đặt Git
- Mở file vừa tải về
- **Next → Next → Next** (giữ nguyên tất cả cài đặt mặc định)
- Click **Install**
- Chờ cài xong → **Finish**

### 3. Kiểm tra đã cài thành công chưa
- Mở **Command Prompt** (gõ `cmd` trong ô Search Windows)
- Gõ lệnh:
```bash
git --version
```
- Nếu hiện `git version 2.x.x.x` → ✅ Thành công!

---

## Bước 2: Tạo tài khoản GitHub

### 1. Truy cập GitHub
- Mở trình duyệt
- Vào: **https://github.com**

### 2. Sign Up (Đăng ký)
- Click **"Sign up"**
- Nhập email
- Tạo password
- Chọn username (tên đăng nhập)
- Làm theo hướng dẫn xác minh

### 3. Xác nhận email
- Mở email GitHub gửi đến
- Click link xác nhận
- ✅ Xong! Giờ bạn đã có tài khoản GitHub

---

## Bước 3: Tạo Repository (Repo) mới

### 1. Đăng nhập GitHub
- Vào **https://github.com**
- Đăng nhập nếu chưa

### 2. Tạo repo mới
- Click dấu **+** ở góc trên bên phải
- Chọn **"New repository"**
- Hoặc vào: **https://github.com/new**

### 3. Điền thông tin
- **Repository name**: `anniversary-website` (hoặc tên gì cũng được)
- **Description**: `Our 3 year anniversary website` (tùy chọn)
- **Public**: ✅ Chọn Public (miễn phí)
- **KHÔNG** tick vào "Add a README file"
- Click **"Create repository"**

### 4. Copy link repo
- Sau khi tạo xong, bạn sẽ thấy trang có dạng:
  `https://github.com/USERNAME/anniversary-website`
- **Copy link này** để dùng ở bước sau

---

## Bước 4: Đẩy code từ máy lên GitHub

### 1. Mở Command Prompt
- Nhấn **Windows + R**
- Gõ `cmd` → Enter

### 2. Vào thư mục project
```bash
cd D:\Project\anniversary-website
```

### 3. Cấu hình Git (lần đầu tiên thôi)
```bash
git config --global user.name "Tên bạn"
git config --global user.email "email-cua-ban@gmail.com"
```
(Dùng email bạn đăng ký GitHub)

### 4. Khởi tạo Git trong project
```bash
git init
```
(Thấy hiện `Initialized empty Git repository` → ✅)

### 5. Tạo file .gitignore
Tạo file tên `.gitignore` trong thư mục project, nội dung:
```
node_modules
.next
.env
*.log
```

### 6. Thêm tất cả file vào Git
```bash
git add .
```
(Không có thông báo gì là bình thường)

### 7. Commit (lưu lại)
```bash
git commit -m "anniversary website"
```

### 8. Đổi tên nhánh thành main
```bash
git branch -M main
```

### 9. Kết nối với GitHub
```bash
git remote add origin https://github.com/USERNAME/anniversary-website.git
```
⚠️ **Thay `USERNAME` bằng username GitHub của bạn!**

### 10. Đẩy code lên GitHub
```bash
git push -u origin main
```

**Lần đầu push, nó sẽ yêu cầu đăng nhập:**
- Sẽ hiện link trong terminal
- Click vào link đó
- Đăng nhập GitHub
- Cho phép truy cập
- Quay lại terminal, push lại:
```bash
git push -u origin main
```

### 11. Kiểm tra
- Mở trình duyệt
- Vào: `https://github.com/USERNAME/anniversary-website`
- Bạn sẽ thấy toàn bộ code đã được đẩy lên! ✅

---

## Bước 5: Deploy lên Vercel

### 1. Truy cập Vercel
- Vào: **https://vercel.com**
- Click **"Sign Up"**
- Chọn **"Continue with GitHub"**
- Cho phép Vercel truy cập GitHub

### 2. Import project
- Click **"New Project"**
- Bạn sẽ thấy repo `anniversary-website`
- Click **"Import"**

### 3. Deploy
- Giữ nguyên cài đặt
- Click **"Deploy"**
- Chờ 1-2 phút

### 4. Xong!
- Bạn sẽ có link dạng: `https://anniversary-website.vercel.app`
- **Share link này cho mọi người!** 🎉

---

## 🎯 Tóm tắt nhanh các lệnh Git thường dùng

### Khi bạn sửa code và muốn cập nhật lên GitHub:
```bash
cd D:\Project\anniversary-website
git add .
git commit -m "mô tả thay đổi"
git push
```

### Ví dụ:
```bash
git add .
git commit -m "updated photos"
git push
```

---

## ❓ Lỗi thường gặp

### Lỗi 1: "not a git repository"
→ Bạn chưa chạy `git init`. Hãy làm lại từ bước 4.3

### Lỗi 2: "permission denied" khi push
→ Cần đăng nhập GitHub. Làm theo hướng dẫn ở bước 4.10

### Lỗi 3: "remote already exists"
→ Đã kết nối rồi, chỉ cần push:
```bash
git push -u origin main
```

---

## 💡 Mẹo
- Mỗi lần sửa code → `git add .` → `git commit -m "..."` → `git push`
- Vercel sẽ **tự động cập nhật** mỗi khi bạn push code mới lên GitHub!
