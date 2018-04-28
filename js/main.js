;(function () {
	"use strict";
	var chooseDiv = document.querySelector('.ba-content');
	var chooseArea = document.querySelector('.ba-transform');
	
	document.addEventListener('keydown', function(e){
		if (e.ctrlKey && e.keyCode == 69) {
	 		e.preventDefault();
	 		chooseDiv.style.display = 'none';
	 		chooseArea.style.display = 'block';
	 		chooseArea.focus();
	 	}
		if (e.ctrlKey && e.keyCode == 83){
    		e.preventDefault();
    		addToDiv(chooseArea.value);
    	}
    	if (e.keyCode == 27) {
    		close();
    	}

	})
	function addToDiv(value) {
		chooseDiv.innerHTML = value;
		chooseArea.value = '';
		chooseArea.style.display = 'none';
		chooseDiv.style.display = 'block';		

	}
	function close() {
		chooseArea.style.display = 'none';
		chooseDiv.style.display = 'block';
		return;
	}

	



})();