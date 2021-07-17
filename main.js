Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 100,

    constraints: {
        facingMode: 'environment'
    }
});

Webcam.attach("#webcam")


function take_pic() {
    Webcam.snap(function(Picture){
        document.getElementById("output").innerHTML = '<img id="imag"  src="' +  Picture  + '"/>';
    })
}

console.log(ml5.version);
model = ml5.imageClassifier("MobileNet", loaded);

function loaded() {
    console.log("Model Is Loaded Idiot");
}

function verify_pic() {
    Img = document.getElementById("imag");
    model.classify(Img, resultget);
}

function resultget(erroor, result) {
    if (erroor){
        console.error(erroor);
    }
    else {
        console.log(result);
        object = result[0].label;
        document.getElementById("object_name").innerHTML = object;
    }
}