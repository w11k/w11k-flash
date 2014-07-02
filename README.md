# w11k-flash - AngularJS flash/flex integration module

w11k-flash is an AngualarJS module providing a directive to include flash movies and flex applications into your AngularJS application as well as thin communication layer for flash/flex and AngularJS. Integrating a flex application into an AngularJS application is a common usecase of a step-by-step migration of a Flex application to AngularJS.


## Documentation and Demo

See Project Website at [http://w11k.github.com/w11k-flash](http://w11k.github.com/w11k-flash)


## Installation

* Install via Bower (`w11k-flash`)
* Include scripts into your application (`w11k-flash` and `swfobject`)
* Add dependency to `w11k-flash` to your angular module
* Include `w11k-flash` stylesheet


## Usage

There are two types of usage:

1. Embedding Only
2. Embedding With Interaction

### Embedding

```html
<div w11k-flash="flash.config"
     w11k-select-visible="flash.visible"
     >
</div>
```

Pass a config object via `w11k-flash` attribute. This config object has to have a property `swfUrl` refenrencing the flash file to load. 
You can also pass `flashvars`, `params`, `attributes`, `width` and `height` via the config object. These values are passed to swfobject. See [https://code.google.com/p/swfobject](https://code.google.com/p/swfobject/) for more information.

With the `w11k-flash-visible` attribute you can show and hide the Flash/Flex application. The Flash file is loaded lazy and once. If `w11k-flash-visible` changes from true to false, the Flash object will be invisible but not removed. If `w11k-flash-visible` evaluates to true later on, the Flash object will be visible again without reinitialization.


### Interacting

JavaScript and Flash/Flex are able to communicate via the Flash-JavaScript-Bridge of the Flash Player called `ExternalInterface`. With this bridge JavaScript can call exposed ActionScript functions withing the Flash/Flex application and the Flash/Flex application can call global JavaScript functions of the hosting browser window.

w11k-flash provides an integration of this communication into the AngularJS application. The config object passed via `w11k-flash` can contain a `callback` which will be called with a promise and the promise will be resolved with a reference to the flash instance when the flex application reports finishing initialization. This can be done via `AngularJSAdapter#fireFlashReady` (see example below).

The AngularJS application is now able to call exposed ActionScript functions within the Flash/Flex application via the flash-ready-promise and the resolved reference.


```javascript
module.controller('TestCtrl', function ($scope) {
  $scope.flash = {
    config: {
      swfUrl: '../bin-release/test.swf',
      callback: function (readyPromise) {
        $scope.flash.ready = readyPromise;
      }
    }
  };

  $scope.navigateFlashTo = function (state) {
    $scope.flash.ready.then(function (flash) {
      // call exposed ActionScript function
      flash.navigateTo(state);
    });
  };
});
```

The Flash application can call everything accessable via the scope (hierarchy) of the element containing the w11k-flash directive. You can use the `AngularJSAdapter#call` to evaluate expressions. All expressions supported by AngularJS which can be used within an HTML template can be used. `AngularJSAdapter#call` also supports locals, so you can define your expression as one string and pass arguments via the locals object. This is much easier than concatenating an expression string.

```actionscript
protected function application_creationCompleteHandler(event :FlexEvent) :void {
	var angularApp :AngularJSAdapter = AngularJSAdapter.getInstance();
	
	// initialize flex application and expose functions
	this.currentState = 'default';
	ExternalInterface.addCallback("navigateTo", setState);
	
	// fire event to inform angular app about finished initialization
	angularApp.fireFlashReady();
	
	// call something on scoope
	angularApp.cal('say(text)', {text: 'Hello'});
}
```


## Roadmap

see milestones and issues at https://github.com/w11k/w11k-flash/issues


## License

MIT - see LICENSE file
