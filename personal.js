function sendMail(){
    var parms={
        name:document.getElementById("Name").value,
        mail:document.getElementById("Mail").value,
        subject:document.getElementById("Sub").value,
        message:document.getElementById("textarea").value,
    }
    emailjs.send("service_vukbsg5","template_k8jap2m",parms).then(function (res){
        alert("succes")
    });
}
  
