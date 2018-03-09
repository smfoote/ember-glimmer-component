import { set } from '@ember/object';

export default class {
  static create() {
    return new this();
  }

  create({ ComponentClass, args }) {
    const component = ComponentClass.create(args);
    component.args = args;
    return component;
  }

  update(component, args) {
    set(component, 'args', args);
  }

  didUpdate(component) {
    if (typeof component.didUpdate === 'function') {
      component.didUpdate(component);
    }
  }

  didCreate(component) {
    if (typeof component.didRender === 'function') {
      component.didRender();
    }
  }

  getContext(component) {
    return component;
  }
}