// JavaScript Document

document.getElementById('form_login').addEventListener('submit', function(e){fetchlogin(e)});


function fetchlogin(evt) {
	evt.preventDefault()
	var fd = new FormData();
	fd.append('name', uname.value);
	fd.append('password', upass.value);
	fetch('http://localhost:9998/api.php?action=login',
		{
		method: 'post',
		body: fd,
		credentials: 'include'
	})
	.then(function(headers) {
		  console.log(headers)
	headers.json().then(function(body) {
		console.log(body);
	})
		  })
	.catch(function(error) {
		console.log(error)
	});
}

