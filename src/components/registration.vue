<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-row class="justify-center" no-gutters>
            <v-card-title class="headline">Registration</v-card-title>
          </v-row>
          <v-card-text>
            <v-form ref="form" @submit.prevent="registerUser">
              <v-row no-gutters>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    class="mx-5"
                    required
                    :rules="required"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    class="mx-5"
                    required
                    :rules="required"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    class="mx-5"
                    required
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    class="mx-5"
                    type="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-text-field
                    v-model="mobile"
                    label="Mobile"
                    class="mx-5"
                    required
                    :rules="required"
                  ></v-text-field>
                </v-col>
              </v-row>

              <div class="text-center">
                <v-btn color="primary" type="submit">Register</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import systemConfig from "../services/systemconfig";
export default {
  data() {
    return {
      username: "",
      password: "",
      mobile: "",
      firstName: "",
      required: [(v) => !!v || "required field"],
      emailRules: [
        (v) => !!v || "Email required",
        (v) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v) ||
          "Please Enter Valid Email",
      ],
      passwordRules: [
        (v) => !!v || "Please Enter Password",
        (v) => (v && v.length >= 8) || "Password Should be 8 Digit",
      ],
      lastName: "",
      email: "",
    };
  },
  methods: {
    clearData() {
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.password = null;
      this.mobile = null;
    },
    async registerUser() {
      console.log("systemConfig", systemConfig);
      let isValid = this.$refs.form.validate();
      console.log("registerUser", isValid);
      if (isValid) {
        try {
          let obj = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            mobile: this.mobile,
          };
          console.log("obj", obj);
          let userRegister = await systemConfig.post("/user/register", obj);
          console.log("userRegister", userRegister);
          if (userRegister) {
            this.setSnackbar("User Created SuccessFullly", "success");
            this.$emit("register");
            this.clearData();
          }
        } catch (err) {
          this.setSnackbar(err, "error");
          console.log("err", err);
        }
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
