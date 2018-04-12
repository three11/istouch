# isTouch

Use JS to detect touch-enabled device

## Install

```
npm i @three11/istouch
```

or

```
yarn add @three11/istouch
```

## Usage

```
import { setTouchClass } from '@three11/istouch';

setTouchClass();
```

Or you can just check if the device you use is touch-enabled:

```
import isTouch from '@three11/istouch';

console.log(isTouch);
```

## Customization

By default, the module sets a classname to the `<html>` tag.
If the device is touch-enabled, the classname is `touch`.
If not - the classname is `no-touch`.

You can overwrite these settings:

```
const el = document.getElementById('element');
const classNames = {
	touch: 'is-touch-device',
	notouch: 'is-not-touch-device'
};

setTouchClass(el, classNames);
```
