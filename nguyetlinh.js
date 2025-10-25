async function timSach() {
  const bookid = document.getElementById("bookid").value.trim();
  const ketqua = document.getElementById("ketqua");

  // Xóa kết quả cũ
  ketqua.innerHTML = "";

  if (bookid === "") {
    ketqua.innerHTML = "<p style='color:red'>Vui lòng nhập Book ID!</p>";
    return;
  }

  try {
    // Gửi request đến Node-RED API (ở bước 2.5)
    const response = await fetch(`http://localhost:1880/timkiem?bookid=${bookid}`);
    const data = await response.json();

    if (data.length === 0) {
      ketqua.innerHTML = "<p>Không tìm thấy sách nào với ID này.</p>";
      return;
    }

    // Hiển thị kết quả
    const book = data[0];
    ketqua.innerHTML = `
      <h3>Kết quả:</h3>
      <p><strong>ID:</strong> ${book.BookID}</p>
      <p><strong>Tên sách:</strong> ${book.Title}</p>
      <p><strong>Tác giả:</strong> ${book.Author}</p>
      <p><strong>Giá:</strong> ${book.Price} VNĐ</p>
      <p><strong>Số lượng:</strong> ${book.Quantity}</p>
    `;
  } catch (error) {
    console.error(error);
    ketqua.innerHTML = "<p style='color:red'>Lỗi kết nối đến API Node-RED!</p>";
  }
}
