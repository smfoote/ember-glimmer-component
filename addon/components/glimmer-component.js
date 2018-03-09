import Ember from 'ember';

export default Ember._setComponentManager(class Glimber {
  constructor(options) {
    Object.assign(this, options);
  }

  static get isComponentFactory() { return true; }
  static create() {
    return new this(...arguments);
  }
}, 'glimmer');