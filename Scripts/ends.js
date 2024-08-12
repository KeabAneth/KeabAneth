

//end descriptions

const formatHTML = () => {
    const width = document.documentElement.clientWidth;
    let title1 = "Frontend";
    console.log(document.head.title)
    if (isBackend) {
        console.log(document.head.title)
        title1 = "Backend";
    } 
    if (width > 1200) {
        document.getElementById("title").textContent = `${title1} Development`;
    } else {
        document.getElementById("title").textContent = title1;
    }

}
//end format

const imageContEl = document.getElementById("images");
const img1Select = true;
const img2Select = false;
const img3Select = false;
const descEl = document.getElementById("desc");

if (isBackend) {
    descEl.textContent = phpDesc
} else {
descEl.textContent = htmlDesc;
}

formatHTML();

window.addEventListener("resize", formatHTML);

imageContEl.addEventListener("click", e => {
    const target = e.target;
    const hasClassAlredy = e.target.classList.contains("selected")
    if (target == imageContEl || hasClassAlredy) {
            return;
        }
    const images = imageContEl.querySelectorAll("img");
    for (const img in images) {
        if(images[img].classList.contains("selected")) {
            images[img].classList.remove("selected");
            target.classList.add("selected");
            switch (target.id) {
                case "html":
                    printDescHandle("html");
                    break;
                case "css":
                    printDescHandle("css");
                    break;
                case "js": 
                    printDescHandle("js");
                    break;
                case "php":
                    printDescHandle("php");
                    break;
                case "python":
                    printDescHandle("python");
                    break;
                case "nodejs": 
                    printDescHandle("nodejs");
                    break;
            }
            return;
            
        }
        
    }
    
})
function printDescHandle(codingLang) {
    switch (codingLang) {
                case "html":
                    descEl.textContent = htmlDesc;
                    break;
                case "css":
                    descEl.textContent = cssDesc;
                    break;
                case "js": 
                    descEl.textContent = jsDesc;
                    break;
                case "php":
                    descEl.textContent = phpDesc;
                    break;
                case "python":
                    descEl.textContent = pythonDesc;
                    break;
                case "nodejs": 
                    descEl.textContent = nodeDesc;
                    break;

    }
}