# AngularJS Emoji Filter

> An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual emoticons

## Installation

The filter is available in a default form on Bower. By default, each emoji is 21x21 pixels. You can install it the usual way:

    bower install angular-emoji-filter

To customise the emoji dimensions, you will need to fork the repository and change the Gruntfile appropriately (if you haven't used Grunt before, I suggest reading the [quick start guide](http://gruntjs.com/getting-started) on their website):

```js
grunt.initConfig({
   // ...
   montage: {
        "21x21": {
            files: {
                dist: [
                    "res/emoji/*.png"
                ]
            },
            // Customise your sprite sheet here:
            options: {
                size: 21,
                prefix: ".emoji",
                outputImage: "emoji.png",
                outputStylesheet: "emoji.css",
                magick: {
                    background: "none",
                    depth: 7
                }
            }
        }
    }
});
```

We are using the [Grunt Montage](https://github.com/globaldev/grunt-montage) plugin to generate the sprite sheet. Check the readme of the plugin for full configuration details. Once you have customised the Gruntfile, you can build production-ready assets by running the default Grunt task.

## Usage

Use it just like any Angular filter. Here's some very simple example markup:

```html
<body ng-app="app" ng-controller="AppCtrl">
    <ul>
        <li ng-repeat="message in messages" ng-bind-html-unsafe="message | emoji"></li>
    </ul>
</body>
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
Grunt Montage is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

Grunt Montage was developed by [James Allardice](http://jamesallardice.com) during work on [White Label Dating](http://www.whitelabeldating.com/), while employed by [Global Personals Ltd](http://www.globalpersonals.co.uk).  Global Personals Ltd have kindly agreed to the extraction and release of this software under the license terms above.