function wonderCopy() {
	document.getElementById('texte_a_afficher').style.userSelect = 'auto';
    document.getElementById('texte_a_afficher').style.webkitUserSelect = 'auto';
    $('#texte_a_afficher').unbind("cut copy paste");
    copy(document.getElementById('texte_a_afficher').textContent);
};

function rocketCopy() {
    document.querySelector('.boilerWrapper').style.userSelect = 'auto';
    copy(document.querySelector('#boiler').textContent);
}