let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".content").style.display="block"
       document.querySelector(".contentDetail").innerHTML=`
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>DR Alexa Zoan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus labore perspiciatis ut ab beatae error. Perspiciatis ratione eos id minus reiciendis!</p>
        </div>
        `
        closeBtn.addEventListener("click", function(){
            document.querySelector(".content").style.display="none"
        })
    })
})


