/* Author: */
var accordionBtns = document.querySelectorAll(".slides");
var imgText = document.querySelector(".img-text");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      accordionBtns.forEach((btn) => {
        if (btn === this) {
          this.classList.toggle("is-open");
          btn.style.width = "100%";
          //imgText.style.display = "block"
        } else {
          btn.style.width = "10%";
         // imgText.style.display = "none"
        } 
      });
    }
  });

 //   let content = this;
    //   if (content!==this) {
    //     //this is if the accordion is open
    //     content.style.width = "45%";
    //   } else {
    //     //if the accordion is currently closed
    //     content.style.width = "100%";
    //   }
    // };