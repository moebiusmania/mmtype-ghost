// JS code wrapper
(function(){
	// Internal variables
	var select;

	// On blog loading
	window.onload = function(){
		// Event listner on mobile navigation change
		select = document.querySelector('.mobile-nav');
		select.addEventListener('change', mobileNavChange);
		customData();
	}

	// Change url location when change selection on mobile navigation
	function mobileNavChange(evt){
		window.location.href = this.value;
	}

	// Generate social networks icons
	function socialIcons(list){
		var socialContainer = document.querySelector('footer .social');
		for(var i = 0; i < list.length; i++){
			var elem = '<a href="' + list[i].url + '" title="' + list[i].name + '" target="_blank"><span class="fa fa-' + list[i].icon + '"></span></a>';
			socialContainer.innerHTML += elem;
		}
	}

	// Load custome theme data from /assets/options.js
	function customData(){
		fetch('/assets/options.js').then(function(response) { 
			return response.json();
		}).then(function(j) {
			console.log(j);
			socialIcons(j.social);
		}).catch(function(msg){
			alert(msg,'Error');
		});
	}

})();