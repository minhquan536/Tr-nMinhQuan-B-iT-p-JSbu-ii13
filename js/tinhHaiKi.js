/*
khối 1: input
nhapSo
hangDV
hangChuc
tinhHaiKi

khối 2:
+ thời điểm chạy tính năng ( thực thi code) => chạy khi click
+ Tạo hàm
+ Gán hàm vào sự kiện click
+ Code chi tiết trong hàm
        - LẤY GIÁ TRỊ TỪ FORM
        - LẤY CÔNG THỨC TÍNH TOÁN
        hangDV = nhapSo % 10;
        hangChuc = nhapSo / 10;
        tinhHaiKi = hangDV = hangChuc
+ Hiển thị kết quả lên UI

khối 3:
*/

function tinhHaiKi() {
    var nhapSo = document.getElementById("nhapSo").value;

    var hangDV = nhapSo % 10;
    var hangChuc = nhapSo / 10;

    var tinhHaiKi = hangChuc + hangDV

    document.getElementById("txtResult-HaiKi").innerHTML = "TỔNG 2 KÝ SỐ: <br>" + Math.floor(tinhHaiKi);
}

document.getElementById("tinhHaiKi").onclick =  tinhHaiKi;