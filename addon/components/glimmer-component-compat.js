import Ember from 'ember';
import Component from '@ember/component';

export default Ember._setComponentManager(
  Component.extend({}),
  'glimmer'
);
