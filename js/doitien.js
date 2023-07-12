/* 
khối 1: Input
soTienDoi

khối 2: các bước xử lý
+ thời điểm chạy tính năng ( thực thi code) => chạy khi click
+ Tạo hàm
+ Gán hàm vào sự kiện click
+ Code chi tiết trong hàm
        - LẤY GIÁ TRỊ TỪ FORM
        - LẤY CÔNG THỨC TÍNH TOÁN
        - tongTienDoiDuoc = tienDoi * 23500;
+ Hiển thị kết quả lên UI

khối 3: output
tienDoiDuoc

*/

function doiTien(){
    var soTienDoi = document.getElementById("soTienDoi").value;

    var soTienDoiDuoc = soTienDoi * 23500;

    // console.log(soTienDoiDuoc);

    document.getElementById("txtResult-TienDoi").innerHTML = "Tiền đổi được <br> " + soTienDoiDuoc.toLocaleString();
}

document.getElementById("tienDoiDuoc").onclick = doiTien;