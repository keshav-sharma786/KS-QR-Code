// console.log("Namaste Javascript");

const inputField = document.querySelector(".input-field");

const shareQrBtn = document.querySelector(".share-qr");
const qrImage = document.querySelector(".qr-image");
const qrCodeBox = document.querySelector(".qr-code-box");

async function shareQr(qrUrl) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "QR Code",
        text: "Here is your QR Code",
        url: qrUrl,
      });
    } catch (err) {
      console.log("Sharing failed:", err);
    }
  } else {
    alert("Sharing not supported on this browser");
  }
}

function generateQrCode(userInput) {
  const userInputVal = userInput.trim();
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInputVal}`;
  qrCodeBox.style.opacity = 1;
  qrImage.src = qrUrl;
  inputField.value = "";
  shareQr(qrUrl);
  // try {
  //     await navigator.share(qrImage);
  // } catch(err) {
  //     console.log(err);
  // }
}

// attaching an event listener to the share-qr button
shareQrBtn.addEventListener("click", (e) => {
  // console.log('share-btn clicked');
  const userInput = inputField.value;
  if (userInput) {
    // it means that user has entered some valid text or url
    // calling the function generateQrCode()
    generateQrCode(userInput);
  } else {
    alert("Please enter valid text or url");
  }
});
