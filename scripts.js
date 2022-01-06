const searchBox  = document.querySelector(".search");
const container1 = document.querySelector(".row1");
const container2 = document.querySelector(".row2");
let windows = [];

searchBox.addEventListener('keydown', (e) =>{
    let searchString = searchBox.value;
        if (e.which === 13){
            removeLinks();
            closeOldWindows();
            createLinks(searchString);
            openWindows(searchString);
            addHistory(searchString);
            searchBox.value = "";
        }
        
    });

let createLinks = searchString => {
    let links = [];

    links.push(`https://papago.naver.com/?sk=ko&tk=en&st=${searchString}`);
    links.push(`https://koreanverb.app/?search=${searchString}`);
    links.push(`https://en.wiktionary.org/wiki/${searchString}`);
    links.push(`https://en.dict.naver.com/#/search?query=${searchString}`);
    links.push(`https://www.google.co.kr/search?q=${searchString}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX4oKPopb1AhWTGjQIHSNZAZwQ_AUoAXoECAEQAw&biw=975&bih=1126`);
    links.push(`https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${searchString}`);   
    links.forEach(link =>  {
        const htmlLink = document.createElement("a");
        const lineBreak = document.createElement("br");
        htmlLink.classList.add("link")
        htmlLink.href = link;
        htmlLink.textContent = link;
        htmlLink.target = "_blank";
        console.log(htmlLink.href);
        container2.appendChild(htmlLink);
        container2.appendChild(lineBreak);
    });

}

let openWindows = searchString => {
    windows.push(window.open(`https://papago.naver.com/?sk=ko&tk=en&st=${searchString}`));
    windows.push(window.open(`https://koreanverb.app/?search=${searchString}`));
    windows.push(window.open(`https://en.wiktionary.org/wiki/${searchString}`));
    windows.push(window.open(`https://en.dict.naver.com/#/search?query=${searchString}`));
    windows.push(window.open(`https://www.google.co.kr/search?q=${searchString}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX4oKPopb1AhWTGjQIHSNZAZwQ_AUoAXoECAEQAw&biw=975&bih=1126`));
    windows.push(window.open(`https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${searchString}`));   
}

let addHistory = searchTerm => {
    const historyButton = document.createElement("button");
    historyButton.classList.add("history-button")
    historyButton.textContent = searchTerm;
    container1.appendChild(historyButton);
    historyButton.addEventListener('click', (e) => {
        closeOldWindows();
        removeLinks();
        openWindows(e.target.innerHTML);
    })
}

let closeOldWindows = () =>{
    // for(var i = 0; i < windows.length; i++){
    //     windows[i].close()
    // }
    windows.forEach(window => window.close());
}

let removeLinks = () =>{
    let links = document.querySelectorAll('.link');     
    let lineBreaks = document.querySelectorAll('br');
    links.forEach(link => link.remove());
    lineBreaks.forEach(lineBreak => lineBreak.remove());
    
}

