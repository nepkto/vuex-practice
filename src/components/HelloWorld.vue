<template>
  <div>
    <button class="btn btn sm" @click="incrementCounter">Increment</button> {{count}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    incrementCounter() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
