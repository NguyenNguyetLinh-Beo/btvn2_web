# btvn2_web  
1. Sử dụng github để ghi lại quá trình làm, tạo repo mới, để truy cập public, edit file `readme.md`:  
   chụp ảnh màn hình (CTRL+Prtsc) lúc đang làm, paste vào file `readme.md`, thêm mô tả cho ảnh.  
2. NỘI DUNG BÀI TẬP:  
2.1. Cài đặt Apache web server:  
- Vô hiệu hoá IIS: nếu iis đang chạy thì mở cmd quyền admin để chạy lệnh: iisreset /stop  
- Download apache server, giải nén ra ổ D, cấu hình các file:  
  + D:\Apache24\conf\httpd.conf  
  + D:Apache24\conf\extra\httpd-vhosts.conf  
  để tạo website với domain: fullname.com  
  code web sẽ đặt tại thư mục: `D:\Apache24\fullname` (fullname ko dấu, liền nhau)  
- sử dụng file `c:\WINDOWS\SYSTEM32\Drivers\etc\hosts` để fake ip 127.0.0.1 cho domain này  
- thao tác dòng lệnh trên file `D:\Apache24\bin\httpd.exe` với các tham số `-k install` và `-k start` để cài đặt và khởi động web server apache.  
<img width="1241" height="617" alt="Screenshot 2025-10-25 192258 - Copy" src="https://github.com/user-attachments/assets/dbc4658b-bccb-4bd3-8cd1-48b04e33011b" />  
<img width="1241" height="617" alt="Screenshot 2025-10-25 192258" src="https://github.com/user-attachments/assets/8e72baa2-ee88-478c-8208-1a8cf628227a" />  
<img width="313" height="36" alt="Screenshot 2025-10-25 194401 - Copy" src="https://github.com/user-attachments/assets/73706e20-4858-4b40-96a1-0f556d5f45f0" />  
<img width="313" height="36" alt="Screenshot 2025-10-25 194401" src="https://github.com/user-attachments/assets/b0ac2640-448b-410b-8478-11be0baacbeb" />  
<img width="261" height="31" alt="Screenshot 2025-10-25 194427" src="https://github.com/user-attachments/assets/5fa37087-cd5e-4c83-b390-6a66513cf656" />  
<img width="397" height="163" alt="Screenshot 2025-10-25 194442" src="https://github.com/user-attachments/assets/da4732f2-6d02-4a84-a051-6c2e82ef52ac" />  
<img width="394" height="61" alt="Screenshot 2025-10-25 194457" src="https://github.com/user-attachments/assets/ba697cdf-af98-42e6-b3a1-cf6a6f8c0f6a" />  
<img width="541" height="323" alt="Screenshot 2025-10-25 194708" src="https://github.com/user-attachments/assets/4a68c230-9d8d-48fe-811a-a3d6ecd267f2" />  
<img width="1621" height="791" alt="Screenshot 2025-10-25 195027" src="https://github.com/user-attachments/assets/9dde0916-470a-4aee-ba3d-e7ba3bb28ebb" />  
<img width="1426" height="734" alt="Screenshot 2025-10-25 195229" src="https://github.com/user-attachments/assets/f0a9cea2-029d-4a03-bd89-559624973d5c" />  
<img width="1426" height="734" alt="Screenshot 2025-10-25 195229" src="https://github.com/user-attachments/assets/444259e2-f319-4ee8-aa8a-4991381f9536" />
<img width="1101" height="420" alt="Screenshot 2025-10-25 195330" src="https://github.com/user-attachments/assets/1ff6b179-e899-49d0-b62d-27532d523fc0" />  
<img width="879" height="383" alt="Screenshot 2025-10-25 195921" src="https://github.com/user-attachments/assets/02c94f88-a902-4fbf-9283-8fbca0f7a8d6" />  
2.2. Cài đặt nodejs và nodered => Dùng làm backend:  
- Cài đặt nodejs:  
  + download file `https://nodejs.org/dist/v20.19.5/node-v20.19.5-x64.msi`  (đây ko phải bản mới nhất, nhưng ổn định)  
  + cài đặt vào thư mục `D:\nodejs`  
- Cài đặt nodered:  
  + chạy cmd, vào thư mục `D:\nodejs`, chạy lệnh `npm install -g --unsafe-perm node-red --prefix "D:\nodejs\nodered"`  
  + download file: https://nssm.cc/release/nssm-2.24.zip  
    giải nén được file nssm.exe  
    copy nssm.exe vào thư mục `D:\nodejs\nodered\`  
  + tạo file "D:\nodejs\nodered\run-nodered.cmd" với nội dung (5 dòng sau):  
@echo off  
REM fix path  
set PATH=D:\nodejs;%PATH%  
REM Run Node-RED  
node "D:\nodejs\nodered\node_modules\node-red\red.js" -u "D:\nodejs\nodered\work" %*  
  + mở cmd, chuyển đến thư mục: `D:\nodejs\nodered`  
  + cài đặt service `a1-nodered` bằng lệnh: nssm.exe install a1-nodered "D:\nodejs\nodered\run-nodered.cmd"  
  + chạy service `a1-nodered` bằng lệnh: `nssm start a1-nodered`  
<img width="653" height="499" alt="Screenshot 2025-10-25 201147" src="https://github.com/user-attachments/assets/a8b8e53b-0d86-46aa-b668-f33b195de09b" />  
<img width="1109" height="636" alt="Screenshot 2025-10-25 201326" src="https://github.com/user-attachments/assets/decb4191-ba8c-4a51-aaa4-77ff04caa394" />  
<img width="1103" height="636" alt="Screenshot 2025-10-25 201714" src="https://github.com/user-attachments/assets/3b759ca7-9c3f-4c29-bed2-3f12c70dfbd8" />  
<img width="1086" height="581" alt="Screenshot 2025-10-25 202253" src="https://github.com/user-attachments/assets/6f6a05b3-6e45-4416-b27a-f755cdb21ca9" />  
<img width="500" height="161" alt="Screenshot 2025-10-25 203021" src="https://github.com/user-attachments/assets/9ebe7243-81d2-49e0-b5dc-c4f96806d749" />  
<img width="1901" height="901" alt="Screenshot 2025-10-25 203117" src="https://github.com/user-attachments/assets/fd18707c-5976-47c1-90fe-6d57b7978dad" />  
2.3. Tạo csdl tuỳ ý trên mssql (sql server 2022), nhớ các thông số kết nối: ip, port, username, password, db_name, table_name  
<img width="1919" height="1078" alt="Screenshot 2025-10-25 220853" src="https://github.com/user-attachments/assets/222dfb2c-157f-48cd-bdf6-d6dd6af52e02" />  
2.4. Cài đặt thư viện trên nodered:  
- truy cập giao diện nodered bằng url: http://localhost:1880  
- cài đặt các thư viện: node-red-contrib-mssql-plus, node-red-node-mysql, node-red-contrib-telegrambot, node-red-contrib-moment, node-red-contrib-influxdb, node-red-contrib-duckdns, node-red-contrib-cron-plus  
- Sửa file `D:\nodejs\nodered\work\settings.js` :   
  tìm đến chỗ adminAuth, bỏ comment # ở đầu dòng (8 dòng), thay chuỗi mã hoá mật khẩu bằng chuỗi mới  
    adminAuth: {  
        type: "credentials",  
        users: [{  
            username: "admin"  
            password: "chuỗi_mã_hoá_mật_khẩu"
            permissions: "*" 
        }]  
    },    
   với mã hoá mật khẩu có thể thiết lập bằng tool: https://tms.tnut.edu.vn/pw.php  
- chạy lại nodered bằng cách: mở cmd, vào thư mục `D:\nodejs\nodered` và chạy lệnh `nssm restart a1-nodered`  
  khi đó nodered sẽ yêu cầu nhập mật khẩu mới vào được giao diện cho admin tại: http://localhost:1880  
 <img width="882" height="175" alt="Screenshot 2025-10-25 221201" src="https://github.com/user-attachments/assets/81718f16-094c-4928-a905-30b9d70d3cb7" />  
<img width="1903" height="972" alt="Screenshot 2025-10-25 221250" src="https://github.com/user-attachments/assets/0017ed63-93a5-4785-86e0-92e5a573e8c8" />  
<img width="1918" height="968" alt="Screenshot 2025-10-25 221458" src="https://github.com/user-attachments/assets/2264e4b5-1906-49ba-a2b8-da7a7238aafa" />  
<img width="1129" height="593" alt="Screenshot 2025-10-25 221407" src="https://github.com/user-attachments/assets/2b838c28-1e99-4997-8976-4146b869122a" />  
2.5. tạo api back-end bằng nodered:  
- tại flow1 trên nodered, sử dụng node `http in` và `http response` để tạo api  
- thêm node `MSSQL` để truy vấn tới cơ sở dữ liệu  
- logic flow sẽ gồm 4 node theo thứ tự sau (thứ tự nối dây):   
  1. http in  : dùng GET cho đơn giản, URL đặt tuỳ ý, ví dụ: /timkiem  
  2. function : để tiền xử lý dữ liệu gửi đến  
  3. MSSQL: để truy vấn dữ liệu tới CSDL, nhận tham số từ node tiền xử lý  
  4. http response: để phản hồi dữ liệu về client: Status Code=200, Header add : Content-Type = application/json  
  có thể thêm node `debug` để quan sát giá trị trung gian. 
- test api thông qua trình duyệt, ví dụ: http://localhost:1880/timkiem?q=thị  
<img width="642" height="851" alt="Screenshot 2025-10-25 222102" src="https://github.com/user-attachments/assets/c4fb4ba0-2353-47fd-a17b-5567bcfcd60b" />  
<img width="632" height="801" alt="Screenshot 2025-10-25 224426" src="https://github.com/user-attachments/assets/53d9fe99-7a20-4bc3-af49-482dc3c3a9c6" />  
<img width="638" height="799" alt="Screenshot 2025-10-25 224442" src="https://github.com/user-attachments/assets/3b8a54f4-6dc2-4dd0-a04c-d38689c122a2" />  
  2.6. Tạo giao diện front-end:    
- html form gồm các file : index.html, fullname.js, fullname.css    
  cả 3 file này đặt trong thư mục: `D:\Apache24\fullname`    
  nhớ thay fullname là tên của bạn, viết liền, ko dấu, chữ thường, vd tên nguyễn nguyệt linh thì fullname là `nguyen nguyet linh`  
  khi đó 3 file sẽ là: index.html, nguyetlinh.js và nguyetlinh.css  
- index.html và fullname.css: trang trí tuỳ ý, có dấu ấn cá nhân, có form nhập được thông tin.  
- fullname.js: lấy dữ liệu trên form, gửi đến api nodered đã làm ở bước 2.5, nhận về json, dùng json trả về để tạo giao diện phù hợp với kết quả truy vấn của bạn.
<img width="1920" height="1020" alt="Screenshot 2025-10-25 225317" src="https://github.com/user-attachments/assets/b3c6376b-64e0-4527-8c85-b4c207948c35" />  
<img width="1920" height="1020" alt="Screenshot 2025-10-25 230819" src="https://github.com/user-attachments/assets/79d1aa5b-729d-4107-bdca-5464b8dc33e1" />  
<img width="1920" height="1020" alt="Screenshot 2025-10-25 231245" src="https://github.com/user-attachments/assets/1dd2fda6-3257-4d42-b378-a5afe2a8aa84" />  
<img width="1920" height="1020" alt="Screenshot 2025-10-25 232010" src="https://github.com/user-attachments/assets/ba90cb3a-a64c-47ab-9a70-aab7200e2486" />  
2.7Sau khi hoàn thành bài thực hành, em đã hiểu khá rõ quá trình cài đặt và cấu hình các phần mềm để chạy được một ứng dụng web hoàn chỉnh.  
Đầu tiên là phần cài đặt Apache, Node.js, Node-RED và SQL Server, em hiểu được mục đích của từng phần: Apache dùng để chạy trang web (front-end), Node-RED dùng để tạo API xử lý dữ liệu (back-end), còn SQL Server dùng để lưu trữ dữ liệu. Trong quá trình cài đặt, em cũng học được cách chỉnh file cấu hình, thêm domain giả trong file hosts, và cài thêm các thư viện cần thiết cho Node-RED.  
Phần tạo API bằng Node-RED giúp em hiểu rõ cách các node hoạt động với nhau. Em biết cách dùng node http in để nhận request từ trình duyệt, node function để xử lý dữ liệu đầu vào, node MSSQL để kết nối và truy vấn dữ liệu trong SQL Server, cuối cùng là node http response để gửi kết quả trả về cho người dùng. Nhờ đó, em hiểu được luồng hoạt động của một API cơ bản — từ khi người dùng gửi yêu cầu đến khi dữ liệu được truy vấn và trả về.  
Cuối cùng, phần giao diện front-end giúp em hiểu cách mà web phía người dùng tương tác với back-end. Em biết cách dùng JavaScript để lấy dữ liệu từ form, gửi yêu cầu đến API Node-RED, rồi nhận dữ liệu JSON trả về và hiển thị kết quả trên trang web. Qua đó em hiểu được cách mà front-end và back-end liên kết với nhau trong một ứng dụng web thực tế.  
Nhìn chung, qua bài này em nắm được toàn bộ quy trình: từ cài đặt môi trường, tạo cơ sở dữ liệu, xây dựng API đến hiển thị kết quả trên giao diện người dùng. Bài thực hành này giúp em hiểu rõ hơn cách các thành phần trong một hệ thống web phối hợp và hoạt động cùng nhau.
