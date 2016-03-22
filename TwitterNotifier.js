var i = 0;

function check () {
	console.log("Start check");
i++;
	if(document.getElementsByClassName('stream-item js-new-items-bar-container')[0].innerHTML.length > 5) {
		eventFire(document.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0], 'click');
		notify();
return true;
	} else {
		updateVal();
		console.log("none");
return false;
	}
}

function updateVal() {
document.getElementsByClassName('ProfileNav-value')[0].innerHTML = ""+i;
}

window.setInterval(check, 5000);


Notification.requestPermission();


function notify() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png',
      body: "!!!!NEW TWEET FROM ISKA!!!!",
    });

    notification.onclick = function () {
      window.open("https://twitter.com/weekly_iska");      
    };

  }

}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
