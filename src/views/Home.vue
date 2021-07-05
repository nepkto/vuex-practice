<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Getter></Getter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Getter from "@/components/Getter.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Getter
  },
};
</script>
