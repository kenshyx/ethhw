// here goes all the api for your app

//example

var Promise = require("bluebird");

var dummyAsync = function(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve('stubbed ASYNC data on '+ new Date().toISOString());
    }, 500);
  });
};

var dummySync = function(){
  return new Promise(function(resolve){
    resolve('stubbed SYNC data on '+ new Date().toISOString());
  });
};

window.ethhw = {
  dummyAsync: dummyAsync,
  dummySync: dummySync
};