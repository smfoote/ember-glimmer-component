# ember-glimmer-component

Use Glimmer components in Ember. Today!

## Quick Start

Add this package (`ember-glimmer-component`)
```bash
$ yarn add ember-glimmer-component --dev
```
or
```bash
$ npm install --save-dev ember-glimmer-component
```

For now, this is only available in the Canary build of Ember.js, so make sure `ember-source` is pointing to [canary](https://www.emberjs.com/builds/canary/) in your package.json, and then run `yarn` or `npm install`.

Finally, in your `config/environment.js` file, you need to add the `'glimmer-custom-component-manager'` feature flag to your `FEATURES`.

```js
FEATURES: {
  // Here you can enable experimental features on an ember canary build
  // e.g. 'with-controller': true
  "glimmer-custom-component-manager": true
},
```

Then, when you create a component, replace this line:

```js
import Component from '@ember/component';
```
with this line:
```js
import { CompatComponent as Component } from 'ember-glimmer-component';
```

Everything else is _mostly_ the same, with some exceptions (see below).

### But Wait, there's ~~more~~ ES6

If you are a little more ambitious, you can write your components using ES6 classes.

```js
import { Component } from 'ember-glimmer-component';

export default class extends Component {
  // Your component code goes in here
}
```

## What's different

### Outer HTML templates
Glimmer components don't have a root element. That means `tagName` is meaningless, and `classNames`, `classNameBindings`, and `attributeBindings` won't do anything. All of this will move into the template. Let's take a look at how to convert an Ember component using these properties.

#### Ember Component
```js

import Component from '@ember/component';

export default Component.extend({
  tagName: 'time',
  classNames: 'time-ago',
  classNameBindings: ['isFuture'],
  attributeBindings: ['readableTime:datetime'],

  // clipped for brevity
});
```

#### Glimmer component
```js
import { Component } from 'ember-glimmer-component';

export default class extends Component {
  // clippled for brevity
}
```

#### Glimmer component template

```html
<time
  class="time-ago{{#if isFuture}} is-future{{/if}}"
  datetime={{readableTime}}
>
  {{@time}}
</time>
```

### Computed properties in ES6 classes
Computed properties do not and will not work in ES6 class components. Look forward to [`@tracked` landing in Ember](https://github.com/emberjs/ember.js/pull/16366). Until then, if you need `computed` properites, use the `CompatComponent`.
