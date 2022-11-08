// function successLogin() {
//     // alert("Welcome Back !")
//     window.location.href = "/movies.html"
// }

function displayFriends() {
    const fie = document.getElementById("inp").value
    document.getElementById("list").innerHTML = "--" + fie + " <button>Select Friend</button>";
    window.open('mailto:'+fie);
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

// const modal = document.getElementById("myModal");
//
// // Get the button that opens the modal
// const btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// }

function auth() {
    const email = document.getElementById("emaill").value
    const password = document.getElementById("pasword").value
    console.log(email)
    console.log(password)
    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.assign("movies.html")
        alert("Success")
    }
    else{
        alert("Please try again")

    }

}