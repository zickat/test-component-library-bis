# Installation

## Direct Download / CDN

https://unpkg.com/test-component-library-bis/dist/test-component-library-bis 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/test-component-library-bis@{{ $version }}/dist/test-component-library-bis.js
 
Include test-component-library-bis after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/test-component-library-bis/dist/test-component-library-bis.js"></script>
```

## NPM

```sh
$ npm install test-component-library-bis
```

## Yarn

```sh
$ yarn add test-component-library-bis
```

When used with a module system, you must explicitly install the `test-component-library-bis` via `Vue.use()`:

```javascript
import Vue from 'vue'
import test-component-library-bis from 'test-component-library-bis'

Vue.use(test-component-library-bis)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `test-component-library-bis` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//test-component-library-bis.git node_modules/test-component-library-bis
$ cd node_modules/test-component-library-bis
$ npm install
$ npm run build
```

