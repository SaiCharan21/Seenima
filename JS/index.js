// function successLogin() {
//     // alert("Welcome Back !")
//     window.location.href = "movies.html"
// }

function displayFriends() {
    const fie = document.getElementById("inp").value
    document.getElementById("list").innerHTML = "--" + fie + " <button>Select Friend</button>";
    window.open('mailto:' + fie);
}


function submitfeedback() {
    const movie_name = document.getElementById("btn-feed")
    movie_name.addEventListener("click", () => {
        alert("Thank You for taking the time to give us your feedback!")
    })
}


function sendReciept() {
    const fie = document.getElementById("email").value
    // document.getElementById("list").innerHTML = "--" + fie + " <button>Select Friend</button>";
    window.open('mailto:' + fie);
}


function displayEndgame() {
    const movie_name = document.getElementById("endgame")
    movie_name.addEventListener("click", () => {

        document.getElementById("movie").innerHTML +=
            "<p style='font-size:40px; color: white; padding-left: 375px; padding-top: 450px'>Avengers Endgame is Starting...</p>";
    })
}

function displayBP() {
    const movie_name = document.getElementById("bp")
    movie_name.addEventListener("click", () => {

        document.getElementById("movie").innerHTML +=
            "<p style='font-size:40px; color: white; padding-left: 375px; padding-top: 450px'>Black Panther is Starting...</p>";
    })
}

function displayTLT() {
    const movie_name = document.getElementById("tlt")
    movie_name.addEventListener("click", () => {

        document.getElementById("movie").innerHTML +=
            "<p style='font-size:40px; color: white; padding-left: 375px; padding-top: 450px'>Thor Love and Thunder is Starting...</p>";
    })
}

function displayBA() {
    const movie_name = document.getElementById("ba")
    movie_name.addEventListener("click", () => {

        document.getElementById("movie").innerHTML +=
            "<p style='font-size:40px; color: white; padding-left: 375px; padding-top: 450px'>Black Adam is Starting...</p>";
    })
}

function auth() {
    const email = document.getElementById("emaill").value
    const password = document.getElementById("pasword").value
    console.log(email)
    console.log(password)
    if (email === "admin@gmail.com" && password === "admin123") {
        alert("Success")
        window.open("movies.html");
    } else {
        alert("Please try again")

    }
}

function register(){
    const email = document.getElementById("emaill").value
    const password = document.getElementById("pasword").value
    console.log(email)
    console.log(password)
    if (email === "admin1@gmail.com" && password === "admin123") {
        alert("Success")
        window.open("profiles.html");
    } else {
        alert("Please try again")

    }
}


function updateCart() {
    const counterElem = document.querySelector('#cart_amt'),
        count = +counterElem.innerHTML;
    counterElem.innerHTML = count + 1;
    if (count === 4) {
        alert("You have reached the limit for renting movies for this session! Come Back Later!")
    }
}


function rsetpwd(){
    document.getElementById("resetpwdd").innerHTML+="<a href= /password-reset.html></a>"
}

function updateProfile(){
    const name = document.getElementById('name').value;
    const emailInput = document.getElementById('email');
    const loc = document.getElementById('loc');
    const phone = document.getElementById('phone');


    document.getElementById("name").value = name
    document.getElementById("email").value = emailInput
    document.getElementById("loc").value = loc
    document.getElementById('phone').value = phone

    alert("Profile updated!")

}
