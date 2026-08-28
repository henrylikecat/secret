function eyes(){
    passwordshow = document.getElementById("passwordshowing")
    if(passwordshow.type === "password"){
        passwordshow.type = "text"
    }
    else{
        passwordshow.type = "password"
    }
}
let passwordleakk = () => {
    let p = document.getElementById("passwordshowing").value
    document.getElementById("passwordleak").innerHTML = "YOU HAVE BEEN HACKED----"+p+"----IS YOUR PASSWORD HAHAHAHAHAHAHA"
    document.getElementById("passwordleakkk").src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm53eDJ2anJ2ZzF0YXM1OTUyNDZha3A4bHB3djJ5ZmZiaHFvemUwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mcsPU3SkKrYDdW3aAU/giphy.gif"
}
document.getElementById("enterpassword").addEventListener("click",passwordleakk)