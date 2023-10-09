<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-row class="justify-center" no-gutters>
            <v-card-title class="headline">Login</v-card-title>
          </v-row>
          <v-card-text>
            <v-form ref="form" @submit.prevent="login">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <div class="text-center">
                <v-btn color="primary" type="submit">Login</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import systemConfig from "@/services/systemconfig"
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("username", this.username);
      try {
        let loginData = {
          email: this.username,
          password: this.password
        }
        let login = await systemConfig.post('/user/login', loginData);
        if (login && login.data) {
           this.setSnackbar("Login SuccessFullly", "success");
        }
     
        console.log("login", login);
      } catch (err) {
        this.setSnackbar(err, "error");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 10%;
}
</style>
