function isOnline(){
    return navigator.onLine;
}

// Appeals

function addAppeal(appeal){
    if (!isOnline()){
        var existingAppeals = getExistingAppeals();
        existingAppeals.push(appeal);
        existingAppeals = JSON.stringify(existingAppeals);
        localStorage.setItem("appealsList", existingAppeals);
    }
    else{
        console.log("Using server.....");
    }
};



function getExistingAppeals(){
    if (!isOnline()){
        var existingAppeals = localStorage.getItem('appealsList');
        existingAppeals = JSON.parse(existingAppeals);
        if (existingAppeals === null){
            existingAppeals = [];
        }
        return existingAppeals;
    }
    else{
        console.log("Using server.....");
        return [];
    }
};

// News

function addNews(news){
    if (!isOnline()){
        var existingNews = getExistingNews();
        existingNews.push(news);
        existingNews = JSON.stringify(existingNews);
        localStorage.setItem("newsList", existingNews);
    }
    else{
        console.log("Using server.....");
    }
}

function getExistingNews(){
    if (!isOnline()){
        var existingNews = localStorage.getItem('newsList');
        existingNews = JSON.parse(existingNews);
        if (existingNews === null){
            existingNews = [];
        }
        return existingNews;
    }
    else{
        console.log("Using server.....");
        return [];
    }
};