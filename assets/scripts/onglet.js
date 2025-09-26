function rotateImg180(element){
    let img = element.querySelector("img");
    img.classList.add("rotate");
}

function rotateImg0(element){
    let img = element.querySelector("img");
    img.classList.remove("rotate");
}

function FaireApparaitreElement(element) {
    element.style.display = "flex";
}

function FaireDisparaitreElement(element) {
    element.style.display = "none";
}

function removeAllBlock(){
    let sosusFeatures = document.querySelector('[id="Features"]');
    FaireDisparaitreElement(sosusFeatures);
}

function removeAllList(){
    let element = document.querySelector('[name="Features"]');
    let element2 = document.querySelector('[name="company"]');
    element.setAttribute("id", "ongletnoClick");
    element2.setAttribute("id", "ongletnoClick");
    removeAllBlock;
}

function clickFeatures() {
    let element = document.querySelector('[name="Features"]');
    let block = document.querySelector('[id="Features"]');

    if(element.getAttribute('id') == "ongletnoClick"){
        removeAllList();
        element.setAttribute("id", "ongletClick");
        console.log(element.getAttribute('id'));
        rotateImg180(element);
        FaireApparaitreElement(block);
    }else{
        element.setAttribute("id", "ongletnoClick");
        console.log(element.getAttribute('id'));
        rotateImg0(element);
        FaireDisparaitreElement(block);
    }
}

function clickCompany() {
    let element = document.querySelector('[name="company"]');
    let block = document.querySelector('[id="Company"]');

    if(element.getAttribute('id') == "ongletnoClick"){
        removeAllList();
        element.setAttribute("id", "ongletClick");
        rotateImg180(element);
        FaireApparaitreElement(block);
    }else{
        element.setAttribute("id", "ongletnoClick");
        rotateImg0(element);
        FaireDisparaitreElement(block);
    }
}