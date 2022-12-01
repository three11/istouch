[![GitHub release](https://img.shields.io/github/release/three11/istouch.svg)](https://github.com/three11/istouch/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/istouch.svg)](https://github.com/three11/istouch/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/istouch.svg)](https://github.com/three11/istouch/commits/master)
[![Build Status](https://travis-ci.org/three11/istouch.svg?branch=master)](https://travis-ci.org/three11/istouch)
[![npm](https://img.shields.io/npm/dt/@three11/istouch.svg)](https://www.npmjs.com/package/@three11/istouch)
[![npm](https://img.shields.io/npm/v/@three11/istouch.svg)](https://www.npmjs.com/package/@three11/istouch)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/istouch/README.md)](https://github.com/three11/istouch/)

# isTouch

> Use JS to detect touch-enabled device

## Install

```sh
npm i @three11/istouch
```

or

```sh
yarn add @three11/istouch
```

## Usage

```javascript
import isTouch from '@three11/istouch';
import { setTouchClass } from '@three11/istouch';

console.log(isTouch); // Returns true for touch-enabled devices

setTouchClass(); // Set the default "touch" or "notouch" className to the `html` element
```

## Customization

By default, the module sets a classname to the `<html>` tag.
If the device is touch-enabled, the classname is `touch`.
If not - the classname is `no-touch`.

You can overwrite these settings:

```javascript
const el = document.getElementById('element');
const classNames = {
	touch: 'is-touch-device',
	notouch: 'is-not-touch-device'
};

setTouchClass(el, classNames);
```

## License

MIT
