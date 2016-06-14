// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var fs = require('fs');
var { shell } = require('electron');

var files = fs.readdirSync('.');
files.map( (file) => {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = "<b onClick=openFile('" + file + "')>" + file + "</b>";
  document.querySelector('#files').appendChild(newDiv);
});

window.openFile = function(theFile) {
  alert(theFile);
  shell.openItem(theFile);
}
