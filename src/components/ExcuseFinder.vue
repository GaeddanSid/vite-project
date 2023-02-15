<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        excuses: null,
        categories: [
          'family',
          'office',
          'children',
          'college',
          'party',
          'funny',
          'unbelievable',
          'developers',
          'gaming'
        ],
        selectedCategory: null,
        numbers: 0,
        showSettings: false,
        savedExcuses: null,
        controller: ''
      }
    },
    created() {
      this.randomExcuse()
    },
    methods: {
      async randomExcuse() {
        const response = await axios.get(
          'https://excuser-three.vercel.app/v1/excuse/5'
        )
        this.excuses = response.data
        this.savedExcuses = response.data
        console.log(response.data)
      },
      async selectedExcuses() {
        const response = await axios.get(
          `https://excuser-three.vercel.app/v1/excuse/${this.selectedCategory}/${this.numbers}`
        )
        this.excuses = response.data
        this.savedExcuses = response.data
        console.log(response.data)
      },
      sendToStore() {
        this.$store.dispatch('setSavedExcuses', this.savedExcuses)
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

<style scoped>
  ul li {
    list-style: none;
    margin-top: 10px;
    font-weight: 700;
    text-transform: capitalize;
  }
</style>

<template>
  <div class="excuse-container">
    <h1>Need an Excuse?</h1>
    <p v-if="excuses < 1 || categories === ''">Please select your options</p>
    <p v-else>Here are some quick options:</p>
    <ul>
      <li :key="excuse.id" v-for="excuse in excuses">
        {{ excuse.excuse }} - {{ excuse.category }}
      </li>
    </ul>

    <button class="btn btn-primary" @click="randomExcuse">
      Regenerate Random
    </button>
    <button class="btn btn-success" @click="showSettings = !showSettings">
      {{ showSettings ? 'Close' : 'I need options' }}
    </button>
    <input
      class="btn btn-secondary"
      type="button"
      value="Save Excuses"
      @click="sendToStore"
    />
    <form v-if="showSettings">
      <label>
        Excuses:
        <input class="form-select" type="number" v-model="numbers" />
      </label>
      <label>
        Type
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
      <button class="btn btn-primary btn-lg" @click="selectedExcuses">
        GO
      </button>
      <p>{{ controller }}</p>
    </form>
  </div>
</template>
