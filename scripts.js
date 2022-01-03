const searchBox  = document.querySelector(".search");
const container = document.querySelector(".row");

searchBox.addEventListener('keydown', (e) =>{
    let searchString = searchBox.value;
        if (e.which === 13){
            openWindows(searchString);
            addHistory(searchString);
            searchBox.value = "";
        }
    });

let openWindows = searchString => {
    window.open(`https://papago.naver.com/?sk=ko&tk=en&st=${searchString}`)
    window.open(`https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${searchString}`)
    window.open(`https://en.wiktionary.org/wiki/${searchString}`)
    window.open(`https://www.google.co.kr/search?q=${searchString}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX4oKPopb1AhWTGjQIHSNZAZwQ_AUoAXoECAEQAw&biw=975&bih=1126`)
}

let addHistory = searchTerm => {
    const historyButton = document.createElement("button");
    historyButton.classList.add("history-button")
    historyButton.textContent = searchTerm;
    container.appendChild(historyButton);
    historyButton.addEventListener('click', (e) => {
        openWindows(e.target.innerHTML);
    })
}


