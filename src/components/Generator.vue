<template>
  <v-card
    :color="color"
    dark
    elevation="5"
    @click="startGenerator"
  >
    <v-list-item>
       <v-list-item-avatar color="grey">
        <v-icon dark :color="color">{{icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{name}}</v-list-item-title>
        <v-list-item-subtitle>Value: ${{value}}</v-list-item-subtitle>
        <v-list-item-subtitle>Owned: {{count}}</v-list-item-subtitle>
        <v-row justify="space-between">
          <v-btn elevation="5" text :disabled="gameTotal.lessThan(cost)"
            @click.stop="buyGenerator(Math.floor(gameTotal.dividedBy(cost)))">
            Buy Max ({{Math.floor(gameTotal / cost) | unitsToName}}):
            ${{Math.floor(gameTotal.dividedBy(cost))}}
            </v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost)"
            text @click.stop="buyGenerator(1)">
            Buy 1: ${{cost | unitsToName}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost.times(10))"
            text @click.stop="buyGenerator(10)">
            Buy 10: $ {{cost * 10 | unitsToName}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost.times(100))"
            text @click.stop="buyGenerator(100)">
            Buy 100: ${{cost * 100 | unitsToName}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(auto)"
            text @click.stop="$emit('complete', auto.negated())">
            Buy Auto: ${{auto | unitsToName}}</v-btn>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-progress-linear
        :bottom="true"
        :height="30"
        :rounded="true"
        :striped="alwaysOn"
        :value="completion"
        color="light-blue"
      >{{completion}}%</v-progress-linear>
  </v-card>
</template>

<script>
import { Decimal } from 'decimal.js';

/**
  What happens with a generator?
  1. Buy generator at a specific cost and increment count (cost, count)
  2. Click on activation button
  3. Generator runs for a period of time (completionTime)
  4. Send event "complete" with value of generator (value, @complete)
*/
export default {
  name: 'generator',
  data() {
    return {
      alwaysOn: false,
      completion: 0.0,
      count: 1,
      generating: false,
      timer: null,
    };
  },
  props: {
    name: {
      type: String,
      default: 'Defalut Name',
      description: 'The the name of the generator.',
    },
    gameTotal: {
      type: Decimal,
      default: new Decimal('0'),
      description: 'The accumulated total of this board.',
    },
    color: {
      type: String,
      default: 'cccccc',
      description: 'The color of the card.',
    },
    icon: {
      type: String,
      default: 'mdi-account-circle',
      description: 'The mdi icon of the generator',
    },
    value: {
      type: Decimal,
      default: new Decimal('0'),
      description: 'The output value of each generator. Must be a Decimal object, or respond to `add`.',
    },
    cost: {
      type: Decimal,
      default: new Decimal('5.00'),
      description: 'The cost of the next generator.',
    },
    auto: {
      type: Decimal,
      default: new Decimal('50.00'),
      description: 'The cost of automating the generator.',
    },
    increment: {
      type: Decimal,
      default: new Decimal('1.00'),
      description: 'The yield of each generator we own.',
    },
    initialCount: {
      type: Decimal,
      default: new Decimal('0'),
      description: 'How many generators we start with.',
    },
    speed: {
      type: Number,
      default: 0,
      description: 'How many seconds it takes this generator to complete.',
    },
    updatespeed: {
      type: Number,
      default: 250,
      description: 'How many milliseconds before updating the timer.',
    },
  },
  mounted() {
    this.count = this.initialCount;
    // console.log('Mounted', this.count, this.initialCount);
  },
  methods: {
    startGenerator() {
      // console.log('starting...', this.speed, (100 / this.speed) * 1000);
      if (this.generating) {
        return false;
      }
      this.generating = true;
      this.timer = setInterval(() => {
        this.completion = this.completion + (100 / this.speed);
        // console.log('Complete: ', this.completion);
        if (this.completion >= 100) {
          // console.log('Generator complete!',
          // this.completion, this.value, this.count, this.value * this.count);
          clearInterval(this.timer);
          this.generating = false;
          this.completion = 0;
          this.$emit('complete', this.value.times(this.count));
        }
      }, this.updatespeed);
      return true;
    },
    buyGenerator(num = 1) {
      console.log('Buying generator');
      this.count = this.count.add(num);
      this.$emit('complete', this.cost.times(num).negated());
    },
  },
};
</script>

<style lang="sass">
  //
</style>
