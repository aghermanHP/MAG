
<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="headerBlue">
    <b-navbar-brand href="#">MGA</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="https://www.facebook.com/adrian.gherman1997">Facebook</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Pages" right>
          <b-dropdown-item to="/">Home</b-dropdown-item>
          <b-dropdown-item to="/about">About</b-dropdown-item>
          <b-dropdown-item v-b-modal.modal-login>login</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

   <b-modal id="modal-login" title="Login to MGA" @submit="onSubmit">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Your password"
          type="password"
        ></b-form-input>
        <b-btn @click="onSubmit()">submit</b-btn>
      </b-form-group>
    </b-form>
    </b-modal>
</div>

</template>

<script>
import *  as firebase from 'firebase'
import { log } from 'util'
export default {
    name: "HeaderMag",
     data() {
      return {
        form: {
          email: '',
          password: '',
          error:''
        },
      }
    },
    methods: {
      onSubmit() {
         firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(
        this.$router.replace({ name: "home" }), log("loged in with succes"),
        this.$router.params.email = this.form.email   
        )
      .catch(err => {
        this.error = err.message, log('all messages of error are:', err.message)
      });
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      },

      logout(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
         }).catch(function(error) {
           this.form.error = error.message
        });
      }
    }
}
</script>
<style scoped>
/* please add variable headerBlue in /node_module/bootstrap/_variables.scss*/
</style>