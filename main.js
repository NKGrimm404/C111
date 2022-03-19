prediction="";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
})
}
console.log('ml5version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FRy7u0Qlw/model.json',modelLoaded);
function modelLoaded(){
    console.log('model is loaded');
}

function speak(){
    synth = window.speechSynthesis;
    speak_data = "The Prediction is"+prediction;
    utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}