# btvn2_web
2.1. Cài đặt Apache Web Server
🔹 Bước 1: Vô hiệu hóa IIS (nếu đang bật)
Nếu máy bạn đang chạy IIS (Internet Information Services), cần tắt nó để tránh xung đột cổng 80.
Thao tác:
Mở CMD với quyền Administrator
Gõ lệnh:
iisreset /stop
Nhấn Enter, đợi hiển thị:
Attempting stop...
Internet services successfully stopped
🔹 Bước 2: Tải và giải nén Apache
Truy cập trang tải Apache:
👉 https://www.apachelounge.com/download/
Tải bản phù hợp với Windows (thường là httpd-2.4.x-win64-VS17.zip)
Giải nén file vào ổ D:
➜ Sau khi giải nén xong, thư mục có dạng:
D:\Apache24\
🔹 Bước 3: Cấu hình file httpd.conf
Mở file:
D:\Apache24\conf\httpd.conf
Tìm và chỉnh các dòng sau:
(1) Thay đổi đường dẫn DocumentRoot
Tìm dòng:
DocumentRoot "D:/Apache24/htdocs"
<Directory "D:/Apache24/htdocs">
→ Sửa lại thành:
DocumentRoot "D:/Apache24/fullname"
<Directory "D:/Apache24/fullname">
(ví dụ sinh viên tên “Đỗ Duy Cốp” → “doduycop”)
(2) Cho phép chạy VirtualHost
Tìm dòng:
#Include conf/extra/httpd-vhosts.conf
→ Bỏ dấu # để kích hoạt:
Include conf/extra/httpd-vhosts.conf
🔹 Bước 4: Cấu hình Virtual Host
Mở file:
D:\Apache24\conf\extra\httpd-vhosts.conf
Thêm đoạn sau cuối file:
<VirtualHost *:80>
    ServerAdmin admin@doduycop.com
    DocumentRoot "D:/Apache24/doduycop"
    ServerName doduycop.com
    ServerAlias www.doduycop.com
    ErrorLog "logs/doduycop-error.log"
    CustomLog "logs/doduycop-access.log" common
    <Directory "D:/Apache24/doduycop">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
📌 Lưu ý:
Thay doduycop bằng tên của bạn (không dấu, không cách).
🔹 Bước 5: Tạo thư mục chứa mã web
Tạo thư mục:
D:\Apache24\doduycop
Bên trong tạo 1 file index.html đơn giản:
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome to doduycop.com</title>
</head>
<body>
    <h1>Xin chào, đây là website của Đỗ Duy Cốp!</h1>
</body>
</html>
🔹 Bước 6: Cấu hình file hosts
Mở file bằng Notepad (với quyền Admin):
C:\Windows\System32\drivers\etc\hosts
Thêm dòng sau cuối file:
127.0.0.1   doduycop.com
🔹 Bước 7: Cài đặt và khởi động Apache
Mở CMD với quyền Administrator, di chuyển đến thư mục:
cd D:\Apache24\bin
Chạy các lệnh sau:
(1) Cài đặt Apache như một dịch vụ Windows:
httpd.exe -k install
(2) Khởi động Apache:
httpd.exe -k start
Hoặc kiểm tra trạng thái bằng:
httpd.exe -k restart
🔹 Bước 8: Kiểm tra kết quả
Mở trình duyệt, truy cập:
http://doduycop.com
Nếu thấy hiện trang “Xin chào, đây là website của Đỗ Duy Cốp!” là cài đặt thành công ✅
🔹 Gỡ cài đặt (nếu cần)
Nếu muốn gỡ Apache khỏi dịch vụ Windows:
httpd.exe -k uninstall  
<img width="1241" height="617" alt="Screenshot 2025-10-25 192258" src="https://github.com/user-attachments/assets/e5839c9a-01ae-4429-9724-c808cabe1d06" />  
<img width="1241" height="617" alt="Screenshot 2025-10-25 192258" src="https://github.com/user-attachments/assets/f2f6e219-29d6-4621-a99d-607b7b472ca2" />  
<img width="313" height="36" alt="Screenshot 2025-10-25 194401" src="https://github.com/user-attachments/assets/caa39962-12e3-458a-ae50-8f3751bb8be0" />  
<img width="313" height="36" alt="Screenshot 2025-10-25 194401" src="https://github.com/user-attachments/assets/4f292cfd-ffa5-4467-a1c7-dbd7de0f2423" />  
<img width="261" height="31" alt="Screenshot 2025-10-25 194427" src="https://github.com/user-attachments/assets/2c0d3b22-26d2-4e7f-854c-2492b6ba9af0" />  
<img width="397" height="163" alt="Screenshot 2025-10-25 194442" src="https://github.com/user-attachments/assets/e380f750-0172-4e32-8488-40aaeb656cc9" />  
<img width="394" height="61" alt="Screenshot 2025-10-25 194457" src="https://github.com/user-attachments/assets/2b169544-5aca-4ff3-a9c7-b89de0f5875e" />  
<img width="541" height="323" alt="Screenshot 2025-10-25 194708" src="https://github.com/user-attachments/assets/f251f6bd-b113-4e2d-b24a-f421390bf6b5" />  
<img width="1621" height="791" alt="Screenshot 2025-10-25 195027" src="https://github.com/user-attachments/assets/17936b75-1bba-49b9-9480-f5cea9fbb748" />  
<img width="1426" height="734" alt="Screenshot 2025-10-25 195229" src="https://github.com/user-attachments/assets/31e7eca0-db23-4a82-a937-604a53fc3053" />  
<img width="1101" height="420" alt="Screenshot 2025-10-25 195330" src="https://github.com/user-attachments/assets/54a3de69-d6a1-4642-8b10-0c1df54e938d" />  
<img width="879" height="383" alt="Screenshot 2025-10-25 195921" src="https://github.com/user-attachments/assets/2f83a6e3-de79-4ab6-8113-4911dd3c3311" />  



