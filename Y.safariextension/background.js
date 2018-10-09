//for whatever reason, new Date on Safari gives one hour later result...
// localStorage.clear();
interventionStart = new Date('2018-10-29T08:00:00');
interventionEnd = new Date('2018-11-12T08:00:00');
studyEnd = new Date('2018-11-25T16:00:00');

// console.log("start is " + interventionStart + " and end is " + interventionEnd + ". Current time is " + new Date() + ". study end is " + studyEnd);
// console.log(new Date() > interventionStart);
// console.log(new Date() < interventionEnd);

if (new Date() > interventionStart && new Date() < interventionEnd) {

	store = window.localStorage; //access HTML5 local storage
	if (store.getItem('hasSeenPopup') != 1) { //used 1 because true/false was behaving strangely
		//alert("Dear participant,\n\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed your Facebook experience a little. Please get in touch if this causes any problems.\n\nHuman Centered Computing, University of Oxford");
		alert("Dear participant,\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed Facebook a little: The news feed is now removed, but all other functionality is still available to you.\n\nPlease get in touch if this causes any problems,\nHuman Centered Computing, University of Oxford");
		store.setItem('hasSeenPopup', 1); //similar syntax to the safari api we tried to use before
	}

	//if so, inject style element in the head of the page that hides the newsfeed
  	var node = document.createElement('style');
  	
  	node.innerHTML = "#topnews_main_stream_408239535924329 { display: none !important; }"
  	
  	document.head.appendChild(node); 

}

if (new Date() > studyEnd) {

	store = window.localStorage; //access HTML5 local storage
	if (store.getItem('hasSeenEndPopup') != 1) { //used 1 because true/false was behaving strangely
		alert("Dear participant,\n\nThank you so much for taking part!\n\nWe’ve emailed you about scheduling a time to finish the study and collect your compensation.\n\nHuman Centered Computing, University of Oxford");
		store.setItem('hasSeenEndPopup', 1); //similar syntax to the safari api we tried to use before
	}

}

