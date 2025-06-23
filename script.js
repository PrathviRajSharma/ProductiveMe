let allElem = document.querySelectorAll(".elem");
let fullElem = document.querySelectorAll(".fullElem");
let back = document.querySelectorAll(".back");

allElem.forEach((elem) => {
  elem.addEventListener("click", () => {
    fullElem[elem.id].style.display = "block";
    back.forEach((back) => {
      back.addEventListener('click', ()=>{
        fullElem[elem.id].style.display = "block";
        setTimeout(()=>{
            fullElem[elem.id].style.display = "none";
        },100)
      })
    });
  });
});
