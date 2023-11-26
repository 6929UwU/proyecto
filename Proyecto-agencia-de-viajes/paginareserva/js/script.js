window.onload = function(){
    initialState();
}

function initialState(){    
    const btn = document.querySelector('footer button');
    btn.disabled = true;
}

let food = null;
let drink = null;
let dessert = null;

let foodName;
let foodPrice;

let drinkName;
let drinkPrice;

let dessertName;
let dessertPrice;

let valTot

/* Fução que marca os items selecionados */
function selectFood(element, classFather){
    const selectedFood = document.querySelector(`#${classFather} .selected`);
    if(selectedFood !== null && selectedFood !== element) {
        selectedFood.classList.remove('selected');
        selectedFood.querySelector('button').classList.add('hide');
    }
    
    element.classList.toggle('selected');
    element.querySelector('button').classList.toggle('hide');
    btn_active();
}


