<script>
  import ProfilePage from '../components/ProfilePage.vue'
  export default {
    components: {
      ProfilePage
    },
    data() {
      return {
        profileName: ''
      }
    },
    methods: {
      onNameChanged(newName) {
        this.profileName = newName
      }
    }
  }
</script>
<template>
  <div>
    <ProfilePage :profile-name="profileName" @name-changed="onNameChanged" />
  </div>
</template>
