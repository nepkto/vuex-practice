<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Getter></Getter>
    <Mutation></Mutation>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Getter from "@/components/Getter.vue";
import Mutation from '../components/Mutation.vue';

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Getter,
    Mutation
  },
};
</script>
