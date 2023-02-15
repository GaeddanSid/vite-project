<script>
  export default {
    emits: ['name-changed'],
    computed: {
      userName() {
        return this.$route.params.userName
      }
    },
    props: {
      profileName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        newName: this.profileName
      }
    },
    methods: {
      nameChange() {
        this.$emit('name-changed', this.newName)
      },
      updateName() {
        const newParams = { userName: this.newName }
        this.$router.push({ userName: 'ProfileView', params: newParams })
      }
    }
  }
</script>

<template>
  <h1>Profile for: {{ userName }}</h1>
  <form>
    <input type="text" v-model="newName" />
    <button class="btn btn-success btn-sm" @click="nameChange">Preview</button>
  </form>
  <p>
    New Profile Name: <b>{{ profileName }}</b>
  </p>
  <button class="btn btn-primary" v-if="profileName" @click="updateName">
    Confirm
  </button>
</template>
