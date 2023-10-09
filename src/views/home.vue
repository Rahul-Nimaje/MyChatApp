<template>
    <div>
        <v-row no-gutters class="justify-center">
            <v-col cols="8">
        <v-tabs v-model="tab" >
            <v-tab class="px-2" @click="tab=0">Login</v-tab>
            <v-tab  @click="tab=1">Registration</v-tab>
        </v-tabs>
        </v-col>
        </v-row>
        <login v-if="tab==0" />
        <registration v-if="tab==1" @register="registerUser"/>
    </div>
</template>
<script>
import login from "../components/login.vue";
import registration from "../components/registration.vue";
export default {
    components:{login,registration},
    data() {
        return {
            tab:0
        }
    },
    methods: {
        registerUser() {
            console.log("user registration");
            this.tab = 0;
        }
    }
}
</script>