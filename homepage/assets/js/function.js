function setActiveButton(activeId, inactiveId) {
    var activeBtn = document.getElementById(activeId);
    var inactiveBtn = document.getElementById(inactiveId);

    activeBtn.classList.add("btn-active");    
    activeBtn.classList.remove("btn-outline-secondary");

    inactiveBtn.classList.remove("btn-active");
    inactiveBtn.classList.add("btn-outline-secondary");
}

function addHoverEffect(card) {
    card.classList.add("hovered");
}

function removeHoverEffect(card) {
    card.classList.remove("hovered");
}
