let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");

function generateQR() {
  qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrtext.Value;
} 