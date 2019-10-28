function newAppeal(){
	var newAppealText = document.getElementById("newAppealText").value.trim();
	if (newAppealText === undefined || newAppealText.length == 0){
		alert("Enter valid appeal!");
		return;
	}
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	var newAppeal = {
		text: newAppealText,
		date: date,
		time: time,
		author: "Jack"
	};
	var serialNewAppeal = JSON.stringify(newAppeal);
	var existingAppeals = localStorage.getItem('appealsList');
	existingAppeals = JSON.parse(existingAppeals);
	if (existingAppeals === null){
		existingAppeals = [];
	}
	existingAppeals.push(serialNewAppeal);
	existingAppeals = JSON.stringify(existingAppeals);
	localStorage.setItem("appealsList", existingAppeals);
	document.getElementById("newAppealText").value = "";
	show(true);
}

function show(showLast = false){
	console.log(isOnline());
	var existingAppeals = localStorage.getItem('appealsList');
	existingAppeals = JSON.parse(existingAppeals);
	if (showLast){
		existingAppeals = [existingAppeals[existingAppeals.length - 1]];
	}
	for (appeal in existingAppeals){
		appeal = JSON.parse(existingAppeals[appeal]);
		var newDiv = document.createElement("div");
		newDiv.className = "row mt-3 p-3 appeal";
		var innerDiv1 = document.createElement("div");
		innerDiv1.className = "col-4 col-md-2 justify-content-center text-center bg-light";
		var innerDiv2 = document.createElement("div");
		innerDiv2.className = "col-8 col-md-10 bg-light";
		newDiv.appendChild(innerDiv1);
		newDiv.appendChild(innerDiv2);

		innerDiv1.appendChild(document.createTextNode(appeal.author));
		innerDiv1.appendChild(document.createElement("br"));
		innerDiv1.appendChild(document.createTextNode(appeal.date));
		innerDiv1.appendChild(document.createElement("br"));
		innerDiv1.appendChild(document.createTextNode(appeal.time));

		innerDiv2.appendChild(document.createTextNode(appeal.text));
		var parent = document.getElementById("container");
		parent.appendChild(newDiv);
	}
}

show();

function isOnline(){
	return navigator.onLine;
}

var dataStorage
