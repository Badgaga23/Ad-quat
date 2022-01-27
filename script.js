const firstButton = document.querySelector(".first_button");
const secondButton = document.querySelector(".second_button");
const thirdButton = document.querySelector(".third_button");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");


function handleButton1() {
    if (image1.classList.contains("hidden")) {
        firstButton.style.backgroundColor = "aqua"
        secondButton.style.backgroundColor = ""
        thirdButton.style.backgroundColor = ""
        image1.classList.remove("hidden");
        image1.classList.add("first_button1");
        image2.classList.add("hidden");
        image3.classList.add("hidden");
    }
}

function handleButton2() {
    if (image2.classList.contains("hidden")) {
        secondButton.style.backgroundColor = "rgb(99, 31, 73)"
        firstButton.style.backgroundColor = ""
        thirdButton.style.backgroundColor = ""
        firstButton.classList.remove("first_button1");
        image2.classList.remove("hidden");
        image1.classList.add("hidden");
        image3.classList.add("hidden");
    }
}

function handleButton3() {
    if (image3.classList.contains("hidden")) {
        thirdButton.style.backgroundColor = "rgb(158, 126, 37)"
        secondButton.style.backgroundColor = ""
        firstButton.style.backgroundColor = ""
        firstButton.classList.remove("first_button1");
        image3.classList.remove("hidden");
        image1.classList.add("hidden");
        image2.classList.add("hidden");
    }
}

firstButton.addEventListener("click", handleButton1);
secondButton.addEventListener("click", handleButton2);
thirdButton.addEventListener("click", handleButton3);