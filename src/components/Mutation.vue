<template>
    <div>
        <div class="col-sm-4">
            <button @click="increment">Increment</button>
        </div>
        <div class="col-sm-4">{{ count }}</div>
        <div class="col-sm-4">
            <button @click="decrement">Decrement By 10</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState([
        'count'
    ]),
    methods: {
        increment(){
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement',10)
        }
    }
}
</script>