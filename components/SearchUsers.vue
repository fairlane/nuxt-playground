<template>
<div class="card">
  <div class="card-header bg-info">
    <input type="text" @keyup=search>
  </div>
  <div class="card-body">
    <ul v-if="searchResults.length">
        <li v-for="user in searchResults" :key="user.id">User #{{user.id}} {{user.username}}</li>
    </ul>
    <p v-else>no results / search again</p>
  </div>
</div>
</template>

<script>
import { searchUsers } from '../service/userService'
export default {
  name: 'SearchUsers',
  data() {
    return {
      searchResults: []
    }
  },
  methods: {
    async search(term) {
      const result = await searchUsers(term.srcElement.value); 
      console.log(result);
      this.searchResults = result;
    }
  }
}
</script>
