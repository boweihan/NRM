document.addEventListener('DOMContentLoaded', function() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

var start = ["GET OFF YOUR ASS YOU", "GET TO WORK YOU", "KICK IT INTO GEAR YOU", "DO SOMETHING USEFUL YOU", "GET IT TOGETHER YOU", "GET GOING YOU"];

function starter() {
    var s = start[Math.floor(Math.random()*start.length)];
    return s
}

function random() {
  var n = noun[Math.floor(Math.random()*noun.length)];
  var a = adjective[Math.floor(Math.random()*adjective.length)];
  //
  // function getRandom(filename){
  //   data = fs.readFileSync(filename)
  //   var lines = data.split('\n');
  //   var str = lines[Math.floor(Math.random()*lines.length)];
  //   console.log(str);
  //   return str;
  // }
  randomInsult = " "+a+" "+n;
  return randomInsult
}

var note = function() {
  chrome.notifications.create(
    'test',{
      type:"basic",
      title: starter() + random(),
      message:"",
      iconUrl:"work.jpg"
    },
    function() {
    }
  )
}

chrome.alarms.create("1min", {
  delayInMinutes: 5,
  periodInMinutes: 5
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  note();
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url === "https://www.facebook.com/") {
      chrome.notifications.create(
        'test',{
          type:"basic",
          title: "GET OFF OF FACEBOOK YOU" + random(),
          message:"",
          iconUrl:"work.jpg"
        });
    } else {
    }
  });
});
