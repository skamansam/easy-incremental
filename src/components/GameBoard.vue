<template>
  <v-container>
    <v-row dense>
      <h2>${{total}} {{total | unitsToName}}</h2>
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
          @complete="sum"></generator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Generator from './Generator';

export default {
  name: 'game-board',
  components: {
    Generator,
  },
  data: () => (
    {
      total: 0.00,
      generators: [{
        value: 0.50,
        cost: 5.00,
        auto: 50.00,
        increment: 1.00,
        initialCount: 1,
        speed: 5, // number of seconds before this generator finishes
        name: 'Gen 1',
        color: '#111',
        icon: 'mdi-account-circle',

      }],
    }
  ),
  methods: {
    addGenerator(multiplier) {
      const lastGenerator = this.generators[this.generators.length - 1];
      this.generators.push({
        cost: lastGenerator.cost * multiplier,
        auto: lastGenerator.auto * multiplier,
        increment: lastGenerator.increment * multiplier,
        completionTime: lastGenerator.completionTime * multiplier / 10,
      });
    },
    sum(value) {
      console.log('SUM', value);
      this.total = this.total + value;
    },
  },
};
</script>

<style lang="sass">
  //
</style>
