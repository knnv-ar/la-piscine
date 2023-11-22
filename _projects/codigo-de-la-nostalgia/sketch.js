const video = document.getElementById('camVideo');
const audioHappy = new Audio('/la-piscine/projects/codigo-de-la-nostalgia/sonidos/feliz.wav');
const audioSad = new Audio('/la-piscine/projects/codigo-de-la-nostalgia/sonidos/triste.wav'); 

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/la-piscine/projects/codigo-de-la-nostalgia/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/la-piscine/projects/codigo-de-la-nostalgia/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/la-piscine/projects/codigo-de-la-nostalgia/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/la-piscine/projects/codigo-de-la-nostalgia/models')
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  );
  video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();

      if (detections.length > 0) {
        const expression = detections[0].expressions;
        if (expression.happy > 0.7) {
          audioHappy.play(); 
        } else {
          audioHappy.pause(); 
        }
      } 
      if (detections.length > 0) {
        const expression = detections[0].expressions;
        if (expression.sad > 0.7) {
          audioSad.play(); 
        } else {
          audioSad.pause(); 
        }
      } 
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas
        .getContext('2d')
        .clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  });
}
let originalDensity = '   .,:;░▒▓█';
let alternateDensity = '█▓▒░;:,.   ';
let currentDensity = originalDensity;
let videoo;
let audio;

function preload() {
  soundFormats('mp3', 'wav');
  audio = loadSound('/sonidos/fondo.wav');
}
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('asciiDiv');
  videoo = createCapture(VIDEO);
  videoo.size(64, 48);
  videoo.hide()
  audio.play()
}

function draw() {
  videoo.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < videoo.height; j++) {
    for (let i = 0; i < videoo.width; i++) {
      const pixelIndex = (i + j * videoo.width) * 4;
      const r = videoo.pixels[pixelIndex + 0];
      const g = videoo.pixels[pixelIndex + 1];
      const b = videoo.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = currentDensity.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = currentDensity.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  document.getElementById('asciiDiv').innerHTML = asciiImage; 
}

function mouseClicked() {
  if (currentDensity === originalDensity) {
    currentDensity = alternateDensity;
  } else {
    currentDensity = originalDensity;
  }
}
