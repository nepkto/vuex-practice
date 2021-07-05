<template>
  <div>
    <h1>Total: {{ getTodosCount}}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Text</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lists" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.text }}</td>
          <td>{{ item.done }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      lists: [],
    };
  },
//   computed: {
//     getTodos() {
//       return this.$store.getters.doneTodos;
//     },
//      getTodosCount() {
//       return this.$store.getters.doneTodosCount;
//     },
//     getTodoById() {
//       return this.$store.getters.getTodoById(2)
//     }
//   },
  computed:{
      ...mapGetters({
          getTodos:'doneTodos',
          getTodosCount:'doneTodosCount',
          getTodoById:'getTodoById'
      })
  },
  mounted() {

    this.lists = this.getTodos;
  },
};
</script>