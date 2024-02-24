var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("text_area").innerHTML="";  
    recognition.start();
    recognise.onresult=function(event){
        console.log(event);
        content=event.result[0][0].transcript;
        console.log(content);
        document.getElementById("text_area").innerHTML.content;
        if (content=="take my sefie") {
           speak();
        }
    }
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});