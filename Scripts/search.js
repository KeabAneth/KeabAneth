const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const query = document.getElementById("query").value;
    console.log(query)
    console.log($Spelling.SpellCheckSuggest(query));
})