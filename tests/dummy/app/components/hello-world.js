import { set } from '@ember/object';
import GlimmerComponent from 'ember-glimmer-component/components/glimmer-component';

export default class HelloWorld extends GlimmerComponent {
  constructor(options) {
    super(...arguments);
    Object.assign(this, options);
    this.forwards = true;
  }

  get reverseName() {
    return this.args.name.split('').reverse().join('');
  }

  didUpdate() {
    console.log('updated');
  }

  didRender() {
  }

  switch() {
    set(this, 'forwards', !this.forwards);
  }
}