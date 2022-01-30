const hygieneMixteButton = document.querySelector(".hygieneMixte_button");
const hygieneFemalButton = document.querySelector(".hygieneFemal_button");
const hygieneMaleButton = document.querySelector(".hygieneMale_button");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");


function handleButton1() {
    if (image1.classList.contains("hidden")) {
      hygieneMixteButton.style.backgroundColor = "aqua"
      hygieneFemalButton.style.backgroundColor = ""
      hygieneMaleButton.style.backgroundColor = ""
        image1.classList.remove("hidden");
        image1.classList.add("hygieneMixte_button");
        image2.classList.add("hidden");
        image3.classList.add("hidden");
    }
}

function handleButton2() {
    if (image2.classList.contains("hidden")) {
      hygieneFemalButton.style.backgroundColor = "#F7C9CE"
      hygieneMixteButton.style.backgroundColor = ""
        hygieneMaleButton.style.backgroundColor = ""
        hygieneMixteButton.classList.remove("hygieneMixte_button");
        image2.classList.remove("hidden");
        image1.classList.add("hidden");
        image3.classList.add("hidden");
    }
}

function handleButton3() {
    if (image3.classList.contains("hidden")) {
      hygieneMaleButton.style.backgroundColor = "#22B1B2"
      hygieneFemalButton.style.backgroundColor = ""
      hygieneMixteButton.style.backgroundColor = ""
      hygieneMixteButton.classList.remove("hygieneMixte_button");
        image3.classList.remove("hidden");
        image1.classList.add("hidden");
        image2.classList.add("hidden");
    }
}

hygieneMixteButton.addEventListener("click", handleButton1);
hygieneFemalButton.addEventListener("click", handleButton2);
hygieneMaleButton.addEventListener("click", handleButton3);