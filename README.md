# React Ultimate Starter Template

Template này được sử dụng cho series React Ultimate (Vite)

===============================================================================================================================
# Các bước cài đặt: (chế độ development)

1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.development (nếu cần thiết)
4. Chạy dự án: npm run dev

===============================================================================================================================
# Cách chạy tại chế độ production:

1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.production (nếu cần thiết)
4. Build dự án: npm run build
5. Chạy dự án: npm run preview

===============================================================================================================================
# Luồng chạy React

1.Code trong Foder SRC
2.Các file code React sẽ được đọc và chuyển đổi thành Html , Css , Js nhờ vào thư viện Vite
3.Đưa ra file index.html để chạy

===============================================================================================================================
                                        ** Khái Niệm **
# ĐỊNH NGHĨA VỀ LIBRARY , FRAMEWORK
- code bình thường -> file đơn lẻ

- code gộp nhiều file -> thư viện (library)    ( Tập hợp nhiều dòng code )

- nhiều thư viện (library) gộp lại -> framework          ( Dùng framework phải tuân theo bộ khung cho sẵn )

- môi trường thực thi -> platform

- ctrl + ` : mở terminal
# React JS : 
- Gọi tắt là React , là một THƯ VIỆN (library) được fb phát triển và có thể ứng dụng vào mọi trang web

- React khác Angular (google) và Vue (con lai React + Angular) ở chỗ 2 thằng kia là Framework , còn React là Thư viện

- Vì nó là Library nên nó chỉ chịu trách nhiệm render thông qua Props/UseState, và nếu muốn thêm tính năng như router, ... thì chúng ta phải tự làm 
# React có 2 giai đoạn 
  + GĐ 1 : 2013 - T4/2022 : được coi là 1 Thư Viện , sử dụng cơ chế CSR (client side rendering) và SPA

  + GĐ 2 : T4/2022 - Nay : được coi là Framefork : quay lại chạy SSR với hình thứ SSG
 

- Môt Website khi click vào mà chuyển trang reload lại thì đang dùng SSR (server side rendering)

- Môt Website khi click vào mà chuyển trang KHÔNG reload lại thì đang dùng SPA (single page application)
# Có 2 cách dử dụng React :
 + CÁCH 1 : Sử dụng CSR 
   \Cho các web có nội dung thay đổi liên tục - real time (mess , tỉ giá coin)
 
 + CÁCH 2 : Sử Dụng SSR
  \Cần cho các web cần SEO , tin tức , trải nghiệm người dùng cao , độ chịu tải dữ liệu cao

=> Ưu nhược điểm : 
 + CÁCH 1 : Code đơn giản , sử dụng react thuần túy (thư viện)
     \Khó SEO , trải nghiệm người dùng kém

 + CÁCH 2 : Sử dụng React Framework , trải nghiệm người dùng ok , dễ SEO
     \Code phức tạp hơn

===============================================================================================================================
# ĐỊNH NGHĨA

1. viết style trực tiếp vào code :
           đây định nghĩa là JS
   style = { {trong này tượng trưng cho đối tượng object} }

2. Props (kế thừa)
- Props (Property) : truyền data giữa các component
- Props : là 1 biến object

VD : thằng cha truyền Props cho thằng con

3. Hook (useState) : trạng thái 
- Có biến (function) để có thể tại sử dụng nhiều lần 
===============================================================================================================================
HAI THỨ QUAN TRỌNG PHẢI HỌC Kĩ
  1. Props
  2. useState

===============================================================================================================================
# Warning : 
Dôi khi không cần fix nó vẫn chạy , fix được thì càng tốt vì sẽ tối ưu hóa hiệu năng hơn

===============================================================================================================================
# Tại sao không dùng key mặc định của mảng cho các phần tử ? 
Vì khi thêm sản phẩm mảng tự sinh key ứng với phần tử đó , khi phần tử đó bị xóa thì key của phần tử đó sẽ truyền lại cho cho phần tử bên cạnh , như vậy thì sẽ không tối ưu hiệu năng và đôi khi sinh ra lag.

===============================================================================================================================
# Chidren : 
 - Khi router để trong Chidren sẽ được gọi là router con và nó sẽ KẾ THỪA lại layout của cả thằng Cha
# Outlet : 
 - Sau khi kế thừa thằng cha thì vị trí thằng con sẽ được đặt vào đâu thì sẽ phụ thuộc vào vị trí của Outlet
# Điều hướng không reload trang
- Nếu không cần css vào nút trên thanh điều hướng : LINK

- Nếu cần Css vào : NavLink (vẫn CSS bình thường và nó sẽ tự nhận biết Css ứng với event) -> Đây là nó áp dung Library để xử lí cho mình 
# Các cách Css
1. Css thường
2. Css thường + module (Tránh tình trạng trùng class)
3. Css bằng SASS
4. Taiwin
# API
- LÀ sự kết hợp của link url + các Method (GET , POST , ...)

* Mô hình chiều đi (Request)
FE -> Gọi tới Axios -> interceptor xử lý request (Gán thêm thoog tin ) -> BE

* Mô hình chiều về (response)
BE -> interceptor xử lý response (format data) -> FE
# Các Giai Đoạn Của 1 App 
1. Mount (Chèn Html , css , code)
- Khi vào Web : dịch code (JSX) -> render ra view cho người dùng

2. Update
-Vẽ lại giao diện (Mount) -> sẽ dịch lại code (JSX) -> render ra (động như coin)

3. UnMount
- Xóa Html để vẽ cái mới khi chuyển trang