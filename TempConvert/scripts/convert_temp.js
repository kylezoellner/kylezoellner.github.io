window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.

function domLoaded() {

   const button = document.getElementById("convertButton");
   const F_in = document.getElementById("F_in");
   const C_in = document.getElementById("C_in");
   const msg = document.getElementById("message");

   F_in.addEventListener("click", ()=>{
      C_in.value = "";
   })

   C_in.addEventListener("click", ()=>{
      F_in.value = "";
   })

      button.addEventListener("click", ()=>{
         if(C_in.value == "" && F_in.value == ""){
            msg.innerHTML = "Enter a temperature to convert";
            document.getElementById("weatherIcon").src = "images/C-F.png";
         }

         if(C_in.value.length != 0){
            F_in.value = convertCtoF(parseFloat(C_in.value));
            msg.innerHTML = null;
         }

         if(F_in.value.length != 0){
            C_in.value = convertFtoC(parseFloat(F_in.value));
            msg.innerHTML = null;
         }
      });

}

function convertCtoF(C) {
   displayPic(C * 9/5 + 32);
   return (C * (9/5) + 32);
}

function convertFtoC(F) {
   displayPic(F);
   return (F - 32) * (5/9);
}

function displayPic(x){
   const image = document.getElementById("weatherIcon");
   if(x <= 32 && x > -200){
      image.src = "images/cold.png";
   } else if(x >= 90 && x < 200){
      image.src = "images/hot.png";
   } else if (x > 32 && x < 90){
      image.src = "images/cool.png";
   } else{
      image.src = "images/dead.png";
   }
}
