# AngularJS Emoji Filter

> An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual emoticons

## Installation

The filter is available in a default form on [Bower](http://bower.io) (you will need Bower 0.9 or greater). By default, each emoji is 21x21 pixels. You can install it the usual way:

    bower install angular-emoji-filter

To customise the emoji dimensions, you will need to fork the repository and change the Gruntfile appropriately (if you haven't used Grunt before, I suggest reading the [quick start guide](http://gruntjs.com/getting-started) on their website):

```js
grunt.initConfig({
   // ...
   montage: {
        "21x21": {
            // ...
            options: {
                size: 21,                         // Width/height of each icon
                prefix: ".emoji",                 // Base CSS selector
                outputImage: "emoji.png",         // File name of sprite sheet
                outputStylesheet: "emoji.css",    // File name of stylesheet
                baseRules: {                      // CSS properties added to the base rule
                    "text-indent": "-9999px",
                    display: "inline-block"
                },
                magick: {                         // ImageMagick options
                    background: "none",
                    depth: 7
                }
            }
        }
    }
});
```

We are using the [Grunt Montage](https://github.com/globaldev/grunt-montage) plugin to generate the sprite sheet. Check the readme of the plugin for full configuration details. Once you have customised the Gruntfile, you can build production-ready assets by running the default Grunt task. This will generate the necessary files in the `dist` directory.

To get the filter working with your Angular app just include the stylesheet and JavaScript, and inject the `emoji` module into your app as shown in the example below.

## Usage

Use it just like any Angular filter. Here's some very simple example markup:

```html
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="emoji.min.css">
        <script src="angular.min.js"></script>
        <script src="emoji.min.js"></script>
    </head>
    <body ng-app="app" ng-controller="AppCtrl">
        <ul>
            <li ng-repeat="message in messages" ng-bind-html-unsafe="message | emoji"></li>
        </ul>
    </body>
</html>
```

And the associated example Angular app:

```js
angular.module("app", ["emoji"]).controller("AppCtrl", function ($scope) {
    $scope.messages = [
        "Animals: :dog: :cat: :snake:",
        "People: :smile: :confused: :angry:",
        "Places: :house: :school: :hotel:"
    ];
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Licensing and Attribution
The AngularJS Emoji filter is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

The filter was developed by [James Allardice](http://jamesallardice.com) during work on [White Label Dating](http://www.whitelabeldating.com/), while employed by [Global Personals Ltd](http://www.globalpersonals.co.uk).  Global Personals Ltd have kindly agreed to the extraction and release of this software under the license terms above.