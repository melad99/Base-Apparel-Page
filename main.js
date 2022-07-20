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
	const inputField = document.querySelector("#email");
	const errorMessage = document.querySelector(".base-error");
	var x = document.getElementById("valid3");
	var y = document.getElementsByClassName("base-error")[0];
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailformat)) {
		

		document.form1.text1.focus();
		return true;
	}
	else {
		x.style.display = "block";
        inputField.classList.add("base-error");
		
		document.form1.text1.focus();
		return false;
	}
}