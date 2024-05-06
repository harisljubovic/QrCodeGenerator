//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let userInput = document.querySelector(".generator-container .user-input");
let generateBtn = document.querySelector(".generator-container .generate-btn");
let QrCode = document.querySelector(
  ".generator-container .qr-code-box .qr-code"
);
let qrCodeBox = document.querySelector(".generator-container .qr-code-box");
let container = document.querySelector(".generator-container");

generateBtn.addEventListener("click", () => {
  if (userInput.value != "") {
    generateQrCode(userInput.value);
  }
});

let generateQrCode = (value) => {
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  QrCode.src = url;
  qrCodeBox.classList.add("show");
  container.style.height = "447px";
};
