Webcam.set({
    width:350,
   height:300,
   image_format:"png",
   png_quality:90
   });
   
   camera=document.getElementById("camera");
   Webcam.attach(camera);
   
   
   function take_snapshot(){
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML="<img id='capture_image' src="+data_uri+">";
       });
   }
   
   console.log("ml5 Version" , ml5.version);
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S4I9vr4x0/model.json",Model_loaded);
   
   function Model_loaded(){
       console.log("Model Loaded");
   }
   function speak(){
    var synth=window.speechSynthesis;
    speak_data1="hand gesture shown by you is "+ prediction1+" and thanks for visiting our website";
    var utterthis=new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterthis);
}
function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img , gotResult);
    }
     function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
         console.log(results);
         document.getElementById("gesture_name").innerHTML=results[0].label;
         prediction1=results[0].label;
         speak();
    if(prediction1=="BEST"){
        document.getElementById("gesture_emoji").innerHTML="&#128077;";
    }
    if(prediction1=="AMAZING"){
        document.getElementById("gesture_emoji").innerHTML="&#128076;";
    }
    if(prediction1=="VICTORY"){
        document.getElementById("gesture_emoji").innerHTML="&#9996;";
    }
}
     }
