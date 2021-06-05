Webcam.set({
    width: 310,
    height: 270,
    img_format: 'png',
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
})
camera = document.getElementById("camera");
Webcam.attach("camera");

function captureImg() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="' + data_uri + '">'
    })
}

console.log("The Current Ml5 Version is: " + ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelloaded);

function modelloaded() {
    console.log("The Model is Loaded");
}

function identifyImg() {
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}