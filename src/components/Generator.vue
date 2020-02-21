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
          <v-list-item-subtitle class="d-flex justify-space-around mb-6">
            <div outline>Value: ${{value.times(count)}}</div>
            <div outline>Owned: {{count}}</div>
            <div outline>Completion: {{speed}}s</div>
            <div outline>Output/s: ${{value.times(count) / speed}}</div>
            <div outline>Update: {{updatespeed}}ms</div>
          </v-list-item-subtitle>
        <v-row justify="space-between">
          <v-btn elevation="5" text :disabled="gameTotal.lessThan(cost)"
            @click.stop="buyGenerator(gameTotal.dividedBy(cost).floor())">
            Buy Max ({{gameTotal.dividedBy(cost).floor() || 1 | withUnits}}):
            ${{Math.floor(gameTotal.dividedBy(cost))}}
            </v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost)"
            text @click.stop="buyGenerator(1)">
            Buy 1: ${{cost | withUnits}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost.times(10))"
            text @click.stop="buyGenerator(10)">
            Buy 10: $ {{cost * 10 | withUnits}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(cost.times(100))"
            text @click.stop="buyGenerator(100)">
            Buy 100: ${{cost * 100 | withUnits}}</v-btn>
          <v-btn elevation="5" :disabled="gameTotal.lessThan(autoCost)"
            text @click.stop="startAuto">
            Buy Auto: ${{autoCost | withUnits}}</v-btn>
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
  4. Send event "valueChanged" with value of generator (value, @valueChanged)
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
      auto: false,
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
    autoCost: {
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
    initialAuto: {
      type: Boolean,
      default: false,
      description: 'Whether to start automatically collecting output.',
    },
  },
  mounted() {
    this.count = this.initialCount;
    this.auto = this.initialAuto;
    if (this.auto) this.startAuto();
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
        this.completion = this.completion + ((100 / (this.speed * 1000 / this.updatespeed)));
        if (this.completion >= 100) {
          this.$nextTick(() => {
            this.generating = false;
            this.completion = 0;
            this.$emit('valueChanged', this.value.times(this.count));
            clearInterval(this.timer);
            if (this.auto) this.startAuto();
          });
        }
      }, this.updatespeed);
      return true;
    },
    startTimer() {
    },
    buyGenerator(num = 1) {
      this.count = this.count.add(num);
      this.$emit('valueChanged', this.cost.times(num).negated());
    },
    startAuto() {
      this.generating = true;
      this.$emit('valueChanged', this.auto.negated());
      this.timer = setInterval(() => {
        this.completion = this.completion + ((1 / (this.speed * 10 / this.updatespeed)));
        if (this.completion >= 100) {
          this.$nextTick(() => {
            this.generating = false;
            this.completion = 0;
            this.$emit('valueChanged', this.value.times(this.count));
            // clearInterval(this.timer);
          });
        }
      }, this.updatespeed);
      return true;
    },
  },
};
</script>

<style lang="scss">
.v-card .v-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  // transition: 0s map-get($transition, 'ease-in-out');
  width: 100%;
}
</style>
