document.getElementById("linkersCont").addEventListener("click", e => {
    if (e.target.id === "backendLink") {
        window.location.href = "/backend";
    } else if (e.target.id === "frontendLink") {
        window.location.href = "/frontend";
    } else {
        window.location.href = "/"
    }
})