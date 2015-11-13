# w11k-flash Changelog


<a name="1.0.0"></a>
## 1.0.0 (2015-11-13)


#### Features

* **dependencies:** define dependency to angular as version range from 1.2.0 to 1.5.x ([bcb30a00](https://github.com/w11k/w11k-flash/commit/bcb30a00461cae398d7973f7b7227b81ba223ce4))


<a name="0.2.0"></a>
## 0.2.0 (2015-04-03)


#### Features

* **styling:** add less support ([5ced5132](https://github.com/w11k/w11k-flash/commit/5ced513285655dddac44ef45f3c2d0cfba1b9b7c))


<a name="0.1.7"></a>
## 0.1.7 (2015-04-03)


#### Bug Fixes

* **$compileProvider.debugInfoEnabled:** avoid use of angular.element.scope() ([17eb84e9](https://github.com/w11k/w11k-flash/commit/17eb84e9a69f5c1ea9d1bf80df2bb20232fdbb33))
* **call-angular-from-flash:** trigger digest on root scope instead of specific scope ([53f77038](https://github.com/w11k/w11k-flash/commit/53f770387d44d2d87177b187af59a6bf8f5331ad))


<a name="0.1.6"></a>
## 0.1.6 (2014-10-07)


### Bug Fixes

* **promise:** call callback with promise on directive link phase not on including flash ([b7c6ce53](https://github.com/w11k/w11k-flash/commit/b7c6ce5334aa89374a7c38e627ef43ad0620def8))

### Performance

* **scope:** use scope.$digest instead of scope.$apply to not trigger digest on rootScope ([4843f3d](https://github.com/w11k/w11k-flash/commit/4843f3d7d471466f899dc6348e9aa47d289c8132))



<a name="0.1.5"></a>
## 0.1.5 (2014-07-15)


### Bug Fixes

* **test:** use AngularJSAdapter#expose instead of ExternalInterface.addCallback in test.mxm ([a1c49cdd](https://github.com/w11k/w11k-flash/commit/a1c49cdd99afd339744d0be1b853b680e7e9a5d7))


### Features

* **readme:** remove installation and usage instructions from readme, now on github page ([18d091c](https://github.com/w11k/w11k-flash/commit/18d091c91016e45630b378062538e672d050603c))



<a name="0.1.4"></a>
## 0.1.4 (2014-07-15)


### Features

* **flex:** add AngularJSAdapter#expose to hide ExternalInterface completely ([7c913786](https://github.com/w11k/w11k-flash/commit/7c91378677fe1d0fff4400e3400f433c065e661e))


<a name="0.1.3"></a>
## 0.1.3 (2014-07-02)


### Bug Fixes

* **code:** add angular-array-notation to survive code uglify ([d81b9ed9](https://github.com/w11k/w11k-flash/commit/d81b9ed9e18a9e7c7efa9ce07235f148b1388152))


<a name="0.1.2"></a>
## 0.1.2 (2014-07-02)


### Bug Fixes

* **config:** merge default config and instance config recursive ([bf5a1591](https://github.com/w11k/w11k-flash/commit/bf5a15916cbbdc0de4b9cb75ed285a4bb10b07e8))
* **defaults:** update default for required flash player version to current version 14 ([4d1f3770](https://github.com/w11k/w11k-flash/commit/4d1f377056aaa3751e9a76190ec962f507a7eb19))


<a name="0.1.1"></a>
## 0.1.1 (2014-07-02)


### Bug Fixes

* **styling:** replace plain css with sass and add sass and css to dist ([40026e7b](https://github.com/w11k/w11k-flash/commit/40026e7b7139f96db56ecd45caf0e69feebb43ea))


<a name="0.1.0"></a>
## 0.1.0 (2014-07-02)


### Features

* **project:** add first version of directive, services and utils for AngularJS and Flex ([3831699b](https://github.com/w11k/w11k-flash/commit/3831699b3ebe452bf1e11496ba4f12e656731686))
