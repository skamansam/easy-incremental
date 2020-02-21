<template>
  <v-container>
    <v-row dense>
      <h2>${{total | withUnits}}</h2>
      <v-col cols="12">
        <generator
          v-for="(g, idx) in generators"
          :key="idx"
          :name="g.name"
          :color="g.color"
          :value="g.value"
          :cost="g.cost"
          :autoCost="g.autoCost"
          :increment="g.increment"
          :initialCount="g.initialCount"
          :speed="g.speed"
          :icon="g.icon"
          :gameTotal="total"
          @valueChanged="updateTotal"></generator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Decimal } from 'decimal.js';
import Generator from './Generator';

export default {
  name: 'game-board',
  components: {
    Generator,
  },
  data: () => (
    {
      total: new Decimal(0.00),
      generators: [{
        value: new Decimal(0.50),
        cost: new Decimal(5.00),
        autoCost: new Decimal(50.00),
        increment: new Decimal(1.00),
        initialCount: new Decimal(1),
        speed: 5, // number of seconds before this generator finishes
        name: 'Generator 0',
        color: '#111',
        icon: 'mdi-home',
      }],
    }
  ),
  methods: {
    addGenerator(multiplier) {
      const lastGenerator = this.generators[this.generators.length - 1];
      this.generators.push({
        value: lastGenerator.value.times(multiplier),
        cost: lastGenerator.cost.times(multiplier),
        autoCost: lastGenerator.auto.times(multiplier),
        increment: lastGenerator.increment.times(multiplier),
        initialCount: 1,
        speed: lastGenerator.speed.times(2), // number of seconds before this generator finishes
        name: `Generator ${this.generators.length}`,
        color: '#111',
        icon: 'mdi-home',
      });
    },
    updateTotal(value) {
      this.total = this.total.add(value);
      this.$emit('totalUpdated', this.total);
    },
  },
};
</script>

<style lang="sass">
  //
</style>
