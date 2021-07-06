<template>
    <div>
        
            <div class="col-sm-4">{{ count }}</div>

            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement By 10</button>
            <button @click="asyncIncrement">Async INcrement</button>
            
            


    </div>
</template>

<script>
// import { mapActions,mapState } from 'vuex'
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
        },
        asyncIncrement(){
            this.$store.dispatch('actionA').then(() => {
                console.log('success')
            }).catch((err => {
                console.log(err)
            }) )
        },
        // ...mapActions({
        //     // asyncIncrement: 'increment',
        //     asyncIncrement: 'actionA'
        // }),
      
       
    }
}
</script>