<script>
  export default {
    computed: {
      savedExcuses() {
        return this.$store.state.savedExcuses
      }
    }
  }
</script>

<style scoped>
  p {
    font-weight: 700;
    text-transform: capitalize;
  }
</style>

<template>
  <h1>Saved Excuses</h1>
  <div :key="excuse.id" v-for="excuse in savedExcuses">
    <p v-if="savedExcuses">
      Excuse: {{ excuse.excuse }} - Category: {{ excuse.category }}
    </p>
    <p v-else>No excuses saved</p>
  </div>
</template>
