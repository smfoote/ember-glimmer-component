import { computed } from '@ember/object';
import GlimmerComponentCompat from 'ember-future/components/glimmer-component-compat';

export default GlimmerComponentCompat.extend({
  forwards: true,
  nameWithDirection: computed('forwards', function() {
    return this.forwards ? this.args.name : this.args.name.split('').reverse().join('');
  }),

  didUpdate() {
    console.log('goodbye world updated');
  },
  actions: {
    switch() {
      this.set('forwards', !this.forwards);
    }
  }
});