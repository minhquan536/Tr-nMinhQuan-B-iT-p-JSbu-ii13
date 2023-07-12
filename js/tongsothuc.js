/* 
khối 1: Input
soThuc1
soThuc2
soThuc3
soThuc4
soThuc5

khối 2: các bước xử lý
+ thời điểm chạy tính năng ( thực thi code) => chạy khi click
+ Tạo hàm
+ Gán hàm vào sự kiện click
+ Code chi tiết trong hàm
        - LẤY GIÁ TRỊ TỪ FORM
        - LẤY CÔNG THỨC TÍNH TOÁN
        - tongSoThuc = (SoThuc1+SoThuc2+SoThuc3+SoThuc4+SoThuc5) / 5
+ Hiển thị kết quả lên UI

khối 3: output
tongSoThuc

*/

function tongSoThuc() {
    var soThuc1 = document.getElementById("soThuc1").value;
    var soThuc2 = document.getElementById("soThuc2").value;
    var soThuc3 = document.getElementById("soThuc3").value;
    var soThuc4 = document.getElementById("soThuc4").value;
    var soThuc5 = document.getElementById("soThuc5").value;

    var tongSo = (  Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;

    document.getElementById("txtResult-TongSoThuc").innerHTML =  "Tổng các số thực <br>" + tongSo
}



document.getElementById("tinhTongCacSoThuc").onclick = tongSoThuc;