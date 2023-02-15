<script>
  export default {
    data() {
      return {
        username: '',
        confirmedUserName: this.name,
        savedUserName: false
      }
    },

    props: {
      name: {
        type: String,
        required: true
      }
    },

    methods: {
      confirmName() {
        this.confirmedUserName = this.username
        this.savedUserName = true
      },
      resetForm() {
        this.username = null
        this.confirmedUserName = null
        this.savedUserName = false
      }
    },

    computed: {
      message() {
        return `Your username is ${this.username}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/main.scss';
  .about-container {
    color: $body-bg;
    margin-top: 30px;
  }
</style>

<template>
  <h1 v-if="savedUserName">Welcome {{ confirmedUserName }} !</h1>
  <h1 v-else>Welcome!</h1>
  <div class="about-container">
    <article>
      <h2>Need something to do?</h2>
      <p>We got you covered.</p>
      <h2>Need an excuse to get out of it?</h2>
      <p>We cover that to!</p>
    </article>
  </div>
  <div>
    <h3>Select your User Name below:</h3>
    <form>
      <input type="text" v-model="username" />
      <p>Current Name: {{ username }}</p>
      <p v-if="savedUserName">{{ message }}</p>
      <p v-else>Don't forget your name!</p>
      <input
        class="btn btn-danger"
        type="button"
        @click="resetForm"
        value="Delete"
      />
      <input
        class="btn btn-success"
        type="button"
        @click="confirmName"
        value="Sounds good!"
      />
    </form>
  </div>
</template>
