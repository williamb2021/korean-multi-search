const searchBox  = document.querySelector(".search");
const container = document.querySelector(".row");
let windows = [];

searchBox.addEventListener('keydown', (e) =>{
    let searchString = searchBox.value;
        if (e.which === 13){
            closeOldWindows();
            openWindows(searchString);
            addHistory(searchString);
            searchBox.value = "";
        }
    });

let openWindows = searchString => {
    
    windows.push(window.open(`https://papago.naver.com/?sk=ko&tk=en&st=${searchString}`));
    windows.push(window.open(`https://en.wiktionary.org/wiki/${searchString}`));
    windows.push(window.open(`https://www.google.co.kr/search?q=${searchString}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX4oKPopb1AhWTGjQIHSNZAZwQ_AUoAXoECAEQAw&biw=975&bih=1126`));
    windows.push(window.open(`https://en.dict.naver.com/#/search?query=${searchString}`));
    windows.push(window.open(`https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${searchString}`));
}

let addHistory = searchTerm => {
    const historyButton = document.createElement("button");
    historyButton.classList.add("history-button")
    historyButton.textContent = searchTerm;
    container.appendChild(historyButton);
    historyButton.addEventListener('click', (e) => {
        closeOldWindows();
        openWindows(e.target.innerHTML);
    })
}

let closeOldWindows = () =>{
    for(var i = 0; i < windows.length; i++){
        windows[i].close()
    }
}