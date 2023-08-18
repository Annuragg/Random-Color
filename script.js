let btn = document.querySelector("button");


btn.addEventListener("click" , function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector(
        "div"
    );
    div.style.backgroundColor = randomColor;

});

function getRandomColor (){
      let red = Math.floor(Math.random() * 225);
      let green = Math.floor(Math.random() * 225);
      let yellow = Math.floor(Math.random() * 225);

      let color = `rgb(${red} , ${green} , ${yellow})`; 
      return color
}