const cl = console.log;

const bgColor = document.getElementById("bgColor");
const allDiv = [...document.querySelectorAll(".all")];


const filterGallery = (eve) => {
    // cl(eve.target.value)
    let getClassName = eve.target.value;
    allDiv.forEach(div => div.classList.add("d-none"))

    const selectedDiv = [...document.getElementsByClassName(getClassName)]
    

    selectedDiv.forEach(div => {
        div.classList.remove("d-none")
    }) 
}


bgColor.addEventListener("change", filterGallery)