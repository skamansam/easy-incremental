<template>
  <v-card
    :color="color"
    dark
    elevation="5"
    @click="startGenerator"
  >
    <v-list-item>
       <v-list-item-avatar color="grey">
        <v-icon dark>{{icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{name}}</v-list-item-title>
        <v-list-item-subtitle>Value: ${{value}}</v-list-item-subtitle>
        Owned: {{count}}
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
      type: Number,
      default: 0.00,
      description: 'The output value of each generator.',
    },
    cost: {
      type: Number,
      default: 5.00,
      description: 'The cost of the next generator.',
    },
    auto: {
      type: Number,
      default: 50.00,
      description: 'The cost of automating the generator.',
    },
    increment: {
      type: Number,
      default: 1.00,
      description: 'The yield of each generator we own.',
    },
    initialCount: {
      type: Number,
      default: 0,
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
    console.log('Mounted', this.count, this.initialCount);
  },
  methods: {
    startGenerator() {
      console.log('starting...', this.speed, (100 / this.speed) * 1000);
      if (this.generating) {
        return false;
      }
      this.generating = true;
      this.timer = setInterval(() => {
        this.completion = this.completion + (100 / this.speed);
        console.log('Complete: ', this.completion);
        if (this.completion >= 100) {
          console.log('Generator complete!', this.completion, this.value, this.count, this.value * this.count);
          clearInterval(this.timer);
          this.generating = false;
          this.completion = 0;
          this.$emit('complete', this.value * this.count);
        }
      }, this.updatespeed);
      return true;
    },
  },
};
</script>

<style lang="sass">
  //
</style>
