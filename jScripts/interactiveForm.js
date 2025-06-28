function setSize(size) {
    document.getElementById('dogSizeImage').src = "../images/interactiveForm/" + size+".png";
    document.getElementById('dogSizeImage').alt = size;
}

function setFood(food) {
    let selectedFoodImage = document.getElementById(food+"Image");
    let selectedFoodImageOpacity = selectedFoodImage.style.opacity;
    if (selectedFoodImageOpacity < 1) {
        selectedFoodImage.style.opacity = "1";
        selectedFoodImage.alt = food + ", selected";
    }
    else {
        selectedFoodImage.style.opacity = "0.5";
        selectedFoodImage.alt = food + ", unselected";
    }
}

function updateDogName (input) {
    if (input && !dogName.trim()) {
        document.getElementById('dogNameDisplay').innerHTML = "הכלב שלי: " + input;
    }
    else {
        document.getElementById('dogNameDisplay').innerHTML = "הכלב שלי";
    }
}

function submitForm() {
    // All "const"s in this function can be easily swapped with global "let"s (because each variable has a relevant update/set function)
    const dogName = document.getElementById('dogName').value;
    const size = document.querySelector('input[name="dogSize"]:checked').labels[0].innerHTML;
    const favFoods = getFavFoods();
    
    // Validity Check
    if (!dogName || !dogName.trim()){ //Check if dogName is empty and also not just whitespace
        return false; //Invalidity will be displayed with the "required" field
    }

    document.getElementById('dogNameSubmit').innerText = 'שם הכלב: ' + dogName;
    document.getElementById('sizeSubmit').innerText = 'גודל הכלב: ' + size;
    document.getElementById('favFoodSubmit').innerText = 'מאכל/ים מועדפים: ' + favFoods;

    document.getElementById('showSubmit').style.opacity = "1";
}

function getFavFoods() {
    const favFoodElements = document.getElementsByName("favFood");
    let favFoods = "";
    for (let i = 0; i < favFoodElements.length; i++) {
        let favFoodElement = favFoodElements[i];
        if (favFoodElement.checked) {
            if (favFoods !== "") {
                favFoods += ", ";
            }
            favFoods += favFoodElement.labels[0].innerHTML;
        }
    }
    if (favFoods === "") {
        favFoods = "לא סומנו";
    }
    return favFoods;
}
