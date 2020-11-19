function eyeCtr(str) {

    var eyeopen = document.getElementById("eyeopen");
    var eyeclose = document.getElementById("eyeclose")
    var pw = document.getElementById("pw");
    var rePw = document.getElementById("rePw");

    if (str == 'eyeopen') {
        eyeopen.style.display = 'none';
        eyeclose.style.display = 'block';
        pw.type = 'password';
        rePw.type = 'password';
    } else {
        eyeopen.style.display = 'block';
        eyeclose.style.display = 'none';
        pw.type = 'text';
        rePw.type = 'text';

    }
}


function checkPw() {
    var pw = document.getElementById("pw");
    var rePw = document.getElementById("rePw");
    var html = document.getElementById("validationMsg4");
    var msg = ''
    if (pw.value.length > 0 && rePw.value.length > 0) {
        if (pw.value == rePw.value) {
            msg = "Password match!"
        } else {
            msg = "Password mismatch!"
        }
    } else {
        msg = "Please enter your password!"
    }

    if (msg != '') {
        html.textContent = msg;
    }
}

function validation() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pw = document.getElementById("pw");
    var rePw = document.getElementById("rePw");

    var validationMsg1 = document.getElementById("validationMsg1");
    var validationMsg2 = document.getElementById("validationMsg2");
    var validationMsg3 = document.getElementById("validationMsg3");
    var validationMsg4 = document.getElementById("validationMsg4");

    if (fname.value == '') {
        validationMsg1.textContent = "Please check Your First Name!"
    }

    if (lname.value == '') {
        validationMsg2.textContent = "Please check Your Last Name!"
    }

    if (email.value == '') {
        validationMsg3.textContent = "Please check Your Email Address!"
    }


    if (pw.value.length <= 0 && rePw.value.length <= 0) {
        if (pw.value == rePw.value) {
            validationMsg4.textContent = "The form was submitted!"
        } else {
            validationMsg4.textContent = "please check your password!"
        }
    }
}

document.onkeyup = function(esc) {
	if (esc.keyCode == 27) {
		destroyModal();
	}
};

function createModal() {
	tint.hidden = false;
	modal.hidden = false;
}

function destroyModal() {
	tint.hidden = true;
	modal.hidden = true;
}

function disableCheckbox() {
	agreed.disabled = true;
	agreed.checked = false;
	destroyModal();
}

function enableCheckbox() {
	agreed.disabled = false;
	agreed.checked = true;
	destroyModal();
}

function on() {
	document.getElementById("help").style.display = "block";
}

function off() {
	document.getElementById("help").style.display = "none";
}


















