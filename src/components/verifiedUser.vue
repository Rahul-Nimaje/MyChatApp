<template>
    <div>
        <h2 class="mx-2">{{ message }}</h2>
        <v-btn class="primary mx-2" to='/'>Back to Login</v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message:null
        }
    },
    mounted() {
        console.log("this.$router", this.$route.query.verified);
        this.message="User Alredy Verified"
        if (this.$router && this.$router.query &&this.$router.query.verified) {
            this.message="User Verified"
        }
    }
}
</script>