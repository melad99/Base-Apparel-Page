// function valid(input1) {
// 	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	let input1 = document.getElementById = "email";
// 	let x = document.getElementById = "valid1";
// 	if (input1.value.match(mailformat)) {
// 		returntrue;
// 	} else {
// 		x.style.display = "block";
// 	}
// }

function ValidateEmail(inputText) {
	var x = document.getElementById("valid3");
	var y = document.getElementsByClassName("base-error")[0];
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailformat)) {
		x.style.display = "none";

		document.form1.text1.focus();
		return true;
	}
	else {
		x.style.display = "block";
		y.style.visibility = 'hidden';
		document.form1.text1.focus();
		return false;
	}
}