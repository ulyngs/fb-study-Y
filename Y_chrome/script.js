interventionStart = new Date('2018-10-29T09:00:00');
interventionEnd = new Date('2018-11-10T09:00:00');
studyEnd = new Date('2018-11-25T17:00:00');

//console.log("start is " + interventionStart + " and end is " + interventionEnd + ". Current time is " + new Date() + ". study end is " + studyEnd);
// console.log(new Date() > interventionStart);
// console.log(new Date() < interventionEnd);
//chrome.storage.sync.clear()

if (new Date() > interventionStart && new Date() < interventionEnd) {

	chrome.storage.sync.get({'hasShownPopUp': false}, function(result) {
		//console.log(result['hasShownPopUp']);
	
		if (result['hasShownPopUp'] === false) {
			//alert("Dear participant,\n\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed your Facebook experience a little. Please get in touch if this causes any problems.\n\nHuman Centered Computing, University of Oxford");
			alert("Dear participant,\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed Facebook a little: The news feed is now removed, but all other functionality is still available to you.\n\nPlease get in touch if this causes any problems,\nHuman Centered Computing, University of Oxford");
			chrome.storage.sync.set({hasShownPopUp: true});
		}
	});
  
  //hide the newsfeed
  var node = document.createElement('style');
  node.innerHTML = "#topnews_main_stream_408239535924329 { display: none !important; }"

  document.head.appendChild(node); 
  //document.body.appendChild(node); 

}

if (new Date() > studyEnd) {

	chrome.storage.sync.get({'hasShownEndPopUp': false}, function(result) {
		//console.log(result['hasShownEndPopUp']);
	
		if (result['hasShownEndPopUp'] === false) {
			alert("Dear participant,\n\nThank you so much for taking part!\n\nWe’ve emailed you about scheduling a time to finish the study and collect your compensation.\n\nHuman Centered Computing, University of Oxford");
			chrome.storage.sync.set({hasShownEndPopUp: true});
		}
	});
}