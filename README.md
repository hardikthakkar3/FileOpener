FileOpener
==========

FileOpener Plugin For PhoneGap / Cordova, supported platform is iOS.

This plugin opens UIWebView Modaly with a done button to dismiss the view.

You can open almost all type of images, documents, pdf, and all other document type which you can see in WebView.

For a reference you can see https://developer.apple.com/library/ios/qa/qa1630/_index.html

Create a folder called org.apache.cordova.fileopener under your Plugins folder of your xCode project.

Add all .h, .m and .xib file to that folder.

Add following to your cordova_plugins file.

{
      "file": "plugins/org.apache.cordova.fileopener/www/FileOpener.js",
      "id": "org.apache.cordova.fileopener.ChildBrowserCommand",
      "clobbers": [
                   "window.plugins.fileOpener"
                  ]
}

Create a folder called org.apache.cordova.fileopener > under your www > plugins folder, 
create www folder here and add FileOpener.js to it.

Add following to your config.xml

<feature name="ChildBrowserCommand">
   <param name="ios-package" value="ChildBrowserCommand" />
</feature>

Now you can open a file which is downloaded using phonegap by calling

window.plugins.fileOpener.open(url,name);

Where url is the local path of the file and name is the name of that file.
The file you are trying to open should be downloaded or available localy inside the app's documents directory.


