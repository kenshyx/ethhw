'use strict';
// var hw = require('remote').require('ethhw')
const ipcRenderer = require('electron').ipcRenderer;

var settingButtons = document.querySelectorAll('.button-settings');
for (var i = 0; i < settingButtons.length; i++) {
    var thebutton = settingButtons[i];
    if (thebutton.attributes['data-action'])
    {
      thebutton.addEventListener('click', function () {
          ipcRenderer.send('settings', thebutton.attributes['data-action'].value);
      });
    }
}

$('#nav a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})