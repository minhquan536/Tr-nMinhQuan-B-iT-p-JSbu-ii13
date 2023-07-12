/* 
khối 1: Input
luongMotNgay
soNgayLam

khối 2: các bước xử lý
+ thời điểm chạy tính năng ( thực thi code) => chạy khi click
+ Tạo hàm
+ Gán hàm vào sự kiện click
+ Code chi tiết trong hàm
        - LẤY GIÁ TRỊ TỪ FORM
        - LẤY CÔNG THỨC TÍNH TOÁN
        - tongSoTien = luongMotNgay * tongSoTien
+ Hiển thị kết quả lên UI

khối 3: output
tongSoTien

*/
// C1:
function tinhLuong() {
    var luongMotNgay = document.getElementById("luongMotNgay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;

    var tongSoTien = luongMotNgay * soNgayLam;

    console.log(tongSoTien);

    document.getElementById("txtResult-TinhLuong").innerHTML = "tổng tiền lương <br>" + tongSoTien.toLocaleString();
}

document.getElementById("tinhLuongTong").onclick = tinhLuong;

// C2: qua html gắn sự kiện onclink="tinhLuong()"