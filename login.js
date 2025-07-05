const username = document.getElementsById("username");
const password = document.getElementsById("pwd");
const submit = document.querySelector("#reset");
if (addEventListener(onclick, submit)) {
    if (username == '' || password == '') {
        alert("Please fill in both username and password");
    }
}