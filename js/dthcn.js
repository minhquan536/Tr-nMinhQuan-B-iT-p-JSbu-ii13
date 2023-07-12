/* 
khối 1: Input
chieuDai
chieuRong

khối 2: các bước xử lý
+ thời điểm chạy tính năng ( thực thi code) => chạy khi click
+ Tạo hàm
+ Gán hàm vào sự kiện click
+ Code chi tiết trong hàm
        - LẤY GIÁ TRỊ TỪ FORM
        - LẤY CÔNG THỨC TÍNH TOÁN
        - dTHCN = (chieuDai  + chieuRong) * 2
+ Hiển thị kết quả lên UI

khối 3: output
dTHCN

*/

function tinhDienTich(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var dTHCN = (Number(chieuDai)  + Number(chieuRong)) * 2;

    document.getElementById("txtResult-HCN").innerHTML = "DIỆN TÍCH HCN: <br> " + dTHCN;
}

document.getElementById("tinhHCN").onclick = tinhDienTich;