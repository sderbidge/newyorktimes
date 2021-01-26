<template>
  <div class="register">
    <div class="header">
      <router-link to="/">
        <img src="../../images/New-York-Times-Logo.png" />
      </router-link>
    </div>
    <div class="register-body-container">
      <div class="register-body">
        <center>
          <div class="sign-up">
            <h1>We just need a little more information to create your account.</h1>
            <div class="input-fields">
              <form v-on:submit.prevent="register" class="pure-form">
                <input v-model="firstName" placeholder="First name" />
              </form>
              <form v-on:submit.prevent="register" class="pure-form">
                <input v-model="lastName" placeholder="Last name" />
              </form>
            </div>
            <div class="register-button" @click="register()">
              <p>Register</p>
            </div>
          </div>
        </center>
      </div>
    </div>
    <div class="footer">
      <div class="top-div">
        <span>
          This site is protected by reCAPTCHA and the Google
          <span class="underline">Privacy Policy</span>
          and
          <span class="underline">Terms of Service</span>
          apply.
        </span>
      </div>
      <div class="bottom-div">
        <span>
          © 2020 The New York Times Company
          <span class="underline span-spacing">Privacy Policy</span>
          <span class="underline span-spacing">Help</span>
          <span class="underline span-spacing">Contact Us</span>
          <span class="underline span-spacing">California Notices</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    async register() {
      let response = await axios.post("/api/register", {
        firstName: this.firstName,
        lastName: this.lastName,
        sessionID: this.$root.$data.sessionID
      });
      console.log(response);
      if (response.status === 200) {
        this.$router.push({ path: "/authenticated" });
      }
    }
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.register {
  font-family: "Times New Roman", Times, serif;
}

.header {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.125em 0.1875em;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header img {
  width: 186px;
  height: 25px;
}

.register-body-container {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
}

.register-body {
  width: 400px;
  height: 560px;
  margin-top: 40px;
  padding-right: 16px;
  padding-left: 16px;
}

.sign-up {
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.sign-up h1 {
  font-size: 24px;
}

.input-fields {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.input-fields input {
  margin-bottom: 20px;
  width: 300px;
  height: 30px;
}

.register-button {
  border: 1.5px solid #1877f2;
  border-radius: 15px;
  width: 100px;
  padding: 2px;
  cursor: pointer;
}

.register-button p {
  color: #1877f2;
  font-weight: 600;
}

.footer {
  width: 98%;
  height: 28px;
  padding: 8px 16px 0px 16px;
  margin-top: 24px;
  border-top: 0.0625em solid rgb(204, 204, 204);
  color: rgb(118, 118, 118);
  font-family: Arial, Helvetica, sans-serifs;
  font-size: 11px;
}

.underline {
  text-decoration: underline;
}

.top-div {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.bottom-div {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.span-spacing {
  padding: 0 8px;
}
</style>