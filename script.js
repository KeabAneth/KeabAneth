const htmlDesc = `HTML (HyperText Markup Language) is the foundational language used to create the structure of web pages. It employs specific tags, enclosed in angle brackets (e.g., <p> for paragraphs, <h1> for headings), to define the arrangement and content of a webpage. Essentially, HTML provides the blueprint that web browsers interpret to construct the visual layout and interactive elements you see on a website.`;
const cssDesc = `CSS (Cascading Style Sheets) is the language used to style and layout web pages. Think of it as the makeup artist for your HTML structure. It controls the appearance of elements, such as colors, fonts, spacing, and layout. By separating styles from the content (HTML), CSS makes web pages more efficient, maintainable, and visually appealing.`;
const jsDesc = `JavaScript (JS) is the programming language that brings web pages to life. It's the dynamic counterpart to HTML's structure and CSS's style. JS allows you to create interactive elements, handle user input, manipulate the DOM (Document Object Model), and much more. Think of it as the brain behind the webpage, enabling it to respond and adapt to user actions.`;


//end descriptions

const formatHTML = () => {
    const width = document.documentElement.clientWidth;

    if (width > 1200) {
        document.getElementById("title").textContent = "Frontend Development";
    } else {
        document.getElementById("title").textContent = "Frontend";
    }
}
//end format

const imageContEl = document.getElementById("images");
const img1Select = true;
const img2Select = false;
const img3Select = false;
const descEl = document.getElementById("desc");
descEl.textContent = htmlDesc;

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
    }
}