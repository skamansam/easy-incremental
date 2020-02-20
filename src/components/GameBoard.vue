<template>
  <v-container>
    <v-row dense>
      <h2>${{total | unitsToName}}</h2>
      <v-col cols="12">
        <generator
          v-for="(g, idx) in generators"
          :key="idx"
          :name="g.name"
          :color="g.color"
          :value="g.value"
          :cost="g.cost"
          :auto="g.auto"
          :increment="g.increment"
          :initialCount="g.initialCount"
          :speed="g.speed"
          :icon="g.icon"
          :gameTotal="total"
          @complete="sum"></generator>
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
        auto: new Decimal(50.00),
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
        auto: lastGenerator.auto.times(multiplier),
        increment: lastGenerator.increment.times(multiplier),
        initialCount: 1,
        speed: lastGenerator.speed.times(2), // number of seconds before this generator finishes
        name: `Generator ${this.generators.length}`,
        color: '#111',
        icon: 'mdi-home',
      });
    },
    sum(value) {
      this.total = this.total.add(value);
    },
  },
};
</script>

<style lang="sass">
  //
</style>
