function newAppeal(){
	var newAppealText = document.getElementById("newAppealText").value.trim();
	if (newAppealText === undefined || newAppealText.length == 0){
		alert("Enter valid appeal!");
		return;
	}
	var newDiv = document.createElement("div");
	newDiv.className = "row mt-3 p-3 appeal";
	var innerDiv1 = document.createElement("div");
	innerDiv1.className = "col-4 col-md-2 justify-content-center text-center bg-light";
	var innerDiv2 = document.createElement("div");
	innerDiv2.className = "col-8 col-md-10 bg-light";
	newDiv.appendChild(innerDiv1);
	newDiv.appendChild(innerDiv2);

	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	innerDiv1.appendChild(document.createTextNode("Petro Semenko"));
	innerDiv1.appendChild(document.createElement("br"));
	innerDiv1.appendChild(document.createTextNode(date));
	innerDiv1.appendChild(document.createElement("br"));
	innerDiv1.appendChild(document.createTextNode(time));

	innerDiv2.appendChild(document.createTextNode(newAppealText));

	document.getElementById("newAppealText").value = "";

	var parent = document.getElementById("container");
	parent.appendChild(newDiv);
}