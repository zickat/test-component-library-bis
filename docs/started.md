# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


## HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/test-component-library-bis/dist/test-component-library-bis.js"></script>

<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

## JavaScript

```javascript
// If using a module system (e.g. via Vue CLI), import Vue and test-component-library-bis and then call Vue.use(test-component-library-bis).
// import Vue from 'vue'
// import test-component-library-bis from 'test-component-library-bis'
// 
// Vue.use(test-component-library-bis)

// NOTE: here the example

// Now the app has started!
new Vue({ }).$mount('#app')
```

Output the following:

```html
<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```
