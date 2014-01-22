  
  cordova.define("org.apache.cordova.fileopener.ChildBrowserCommand", function(require, exports, module) {
                 var exec = require('cordova/exec');
                 function ChildBrowser() {
                 
                 }
                 ChildBrowser.prototype.open = function(url,name) {
                      exec(null, null, "ChildBrowserCommand", "openPage", [url,name]);
                 }
                 
                 var fileOpener = new ChildBrowser();
                 module.exports = fileOpener;
  
  });
