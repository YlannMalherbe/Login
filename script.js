var data = [{
    "Email":"ylann09.18@gmail.com",
    "Password":"ouais"
    }, {
    "Email": "random@free.com",
    "Password": "random_too"
}]    

function identification() {
    var identification = false;
    
    var Email = document.getElementById("email").value
    var Password = document.getElementById("password").value 

    for (var item of data) {
        if (item.Email == Email) {
            if (item.Password == Password) {
                identification = true
            }
        }
    }

    if (identification == true) {
        let contener = document.getElementsByClassName("contener")[0]
        contener.remove()
        NewPage();
    }
    
    if (identification == false) {
        document.getElementById("email").value=""
        document.getElementById("password").value="" 
        let verif = document.getElementsByClassName("validation")
        if (verif.length == 0) {
            let wrong = document.createElement("p")
            wrong.textContent = "Your Email or Password isn't correct, please Try again"
            wrong.setAttribute("class","validation")
            let valid = document.getElementsByClassName("valid")[0]
            valid.insertAdjacentElement("beforebegin",wrong)
        }
    }
}

function NewPage() {
    let contener = document.createElement("div")
    contener.setAttribute("class","link_contener")
    let position = document.getElementsByTagName("footer")[0]
    position.insertAdjacentElement("beforebegin",contener)
    linkApp("Map site","file:///C:/Users/ylann/OneDrive/Documents/ylann/Projet%20perso%20NSI/site%20test%20de%20style/Projet%20site%20styler/Essaie%202%20-%20Google%20Map/index.html");
    linkApp("Quizz App","file:///C:/Users/ylann/OneDrive/Documents/ylann/Projet%20perso%20NSI/site%20test%20de%20style/Projet%20site%20styler/Essaie%201-2/index.html")
}

function linkApp(text_content,link_) {
    let contener = document.getElementsByClassName("link_contener")[0]

    let link = document.createElement("a")
    link.setAttribute("href",link_)
    link.textContent = text_content
    link.setAttribute("target","_blank")
    link.setAttribute("class","link")
    contener.insertAdjacentElement("afterbegin",link)
}
