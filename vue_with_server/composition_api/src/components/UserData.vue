<template>
    <h2> {{  userName }}</h2>
    <h3> {{ age }}</h3>
</template>


<script>
import {computed ,inject} from 'vue';
export default {
    props: ['firstName','lastName'],
    setup(props) {
        const userName = computed(function() {
            return props.firstName + ' ' + props.lastName;
        });
        const age = inject("userAge")
        return {
            userName,
            age
        };
    },
    

}
</script>