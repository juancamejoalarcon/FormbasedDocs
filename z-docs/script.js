(function(){
	document.getElementById('texte_a_afficher').style.userSelect = 'auto';
    document.getElementById('texte_a_afficher').style.webkitUserSelect = 'auto';
    $('#texte_a_afficher').unbind("cut copy paste");
})();