# React Ultimate Starter Template

Template này được sử dụng cho series React Ultimate (Vite)

===

# Các bước cài đặt: (chế độ development)

1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.development (nếu cần thiết)
4. Chạy dự án: npm run dev

===

# Cách chạy tại chế độ production:

1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.production (nếu cần thiết)
4. Build dự án: npm run build
5. Chạy dự án: npm run preview

===
# Luồng chạy React

1.Code trong Foder SRC
2.Các file code React sẽ được đọc và chuyển đổi thành Html , Css , Js nhờ vào thư viện Vite
3.Đưa ra file index.html để chạy

===
# ĐỊNH NGHĨA

1. viết style trực tiếp vào code :
           đây định nghĩa là JS
   style = { {trong này tượng trưng cho đối tượng object} }

2. Props (kế thừa)
- Props (Property) : truyền data giữa các component
- Props : là 1 biến object

VD : thằng cha truyền Props cho thằng con

===
HAI THỨ QUAN TRỌNG PHẢI HỌC KÍ
  1. Props
  2. useState

===
# Warning : 
Dôi khi không cần fix nó vẫn chạy , fix được thì càng tốt vì sẽ tối ưu hóa hiệu năng hơn

===
# Tại sao không dùng key mặc định của mảng cho các phần tử ? 
Vì khi thêm sản phẩm mảng tự sinh key ứng với phần tử đó , khi phần tử đó bị xóa thì key của phần tử đó sẽ truyền lại cho cho phần tử bên cạnh , như vậy thì sẽ không tối ưu hiệu năng và đôi khi sinh ra lag.




