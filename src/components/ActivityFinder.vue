<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        activity: '',
        accessibility: null,
        type: '',
        participants: null,
        maxPrice: null,
        key: '',
        showSettings: false,
        link: '',
        categories: [
          'education',
          'recreational',
          'social',
          'diy',
          'charity',
          'cooking',
          'relaxation',
          'music',
          'busywork'
        ],
        selectedCategory: null,
        controller: ''
      }
    },
    mounted() {
      this.generateActivity()
    },
    methods: {
      async generateActivity() {
        const response = await axios.get(
          'https://www.boredapi.com/api/activity/'
        )
        this.activity = response.data.activity
        this.type = response.data.type
        this.participants = response.data.participants
        this.maxPrice = response.data.price
        this.accessibility = response.data.accessibility
        this.link = response.data.link
        console.log(response.data)
      },
      async generateByType() {
        const response = await axios.get(
          `https://www.boredapi.com/api/activity?type=${this.selectedCategory}`
        )
        this.activity = response.data.activity
        this.type = response.data.type
        this.participants = response.data.participants
        this.maxPrice = response.data.price
        this.accessibility = response.data.accessibility
        this.link = response.data.link
        console.log(response.data)
      }
    },
    watch: {
      selectedCategory(newValue, oldValue) {
        if (oldValue != null) {
          this.controller = `Category changed from ${oldValue} to ${newValue}`
        } else {
          this.controller = `Category changed to ${newValue}`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/main.scss';
  p {
    text-transform: capitalize;
    color: $body-bg;
  }
  .activity-container {
    font-size: large;
    font-weight: 600;
  }
</style>

<template>
  <div class="activity-container">
    <h1>Feeling bored?</h1>
    <p>Try this!</p>
    <p>To Do: {{ activity }}</p>
    <p>Category: {{ type }}</p>
    <p>Sugested participants: {{ participants }}</p>
    <p>Price: {{ maxPrice }}</p>
    <p>Availability: {{ accessibility }} (range 0-1)</p>
    <p v-if="link">
      Learn more: <a :href="link">{{ link }}</a>
    </p>

    <button class="btn btn-primary" @click="generateActivity">Randomize</button>
  </div>
  <div class="settings">
    <p>No Good? - Go to settings</p>
    <button class="btn btn-success" @click="showSettings = !showSettings">
      {{ showSettings ? 'Close' : 'Open' }} Settings
    </button>
    <form v-if="showSettings">
      <label>
        Type:
        <select class="form-select" v-model="selectedCategory">
          <option
            :key="category"
            v-for="category in categories"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </label>
      <button class="btn btn-primary" @click="generateByType">
        Find me something to do!
      </button>
      <p>{{ controller }}</p>
    </form>
  </div>
</template>
