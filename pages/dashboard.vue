<template>
    <div>
        <h1>Welcome</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    layout: "signedin",
    data() {
        return {
            user: undefined   
        }
    },
    mounted() {
        this.user = this.$store.state.user.user.data
        if(!this.$store.state.user.user.loggedIn){
            this.$router.push("/")
        }
    },
}
</script>

