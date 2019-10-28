function isOnline(){
    return navigator.onLine;
}


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
