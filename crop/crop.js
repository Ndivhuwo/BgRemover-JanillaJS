const sharp = require('sharp');

// Input and output file paths
const inputImagePath = 'C:\\Users\\phind\\Downloads\\footimage.png';
const outputImagePath = 'C:\\Users\\phind\\Downloads\\cropped-footimage.png';

// Define the crop dimensions (left, top, width, height)
// crop dimensions calculated in pixels eg left: 100 means the left edge of the extracted region starts 100 pixels from the left edge of the original image.
const cropOptions = {
  left: 100,
  top: 50,
  width: 200,
  height: 150,
};

// Use sharp to crop the image
sharp(inputImagePath)
  .extract(cropOptions)
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image cropped successfully:', info);
    }
  });
