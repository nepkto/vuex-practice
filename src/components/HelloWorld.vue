<template>
  <div>
    <button class="btn btn sm" @click="incrementCounter">Increment</button>{{countAlias}} {{countPlusLocalState}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      localCount: 10
    }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  computed: mapState({
    count: state=> state.count,
    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'count',
    // to access local state with `this`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
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
