import imglyRemoveBackground from "@imgly/background-removal";

// document.getElementById("removebutton").onclick = () => {
//   removeBackground();
// };


function removeBackground() {
  const fileInput = document.getElementById('fileInput');
  const image = fileInput.files[0];

  imglyRemoveBackground(image).then((blob) => {
    const url = URL.createObjectURL(blob);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<img src="${url}" alt="Background Removed Image">`;
  });
}

