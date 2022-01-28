<template>
<div class="card">
  <div class="card-header bg-info">
    User list
  </div>
  <div class="card-body">
    <ul v-for="user in users" :key="user.id">
      <li>User #{{user.id}} {{user.username}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import { getRuntimeConfig } from '../config/settings'
export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    let response = await fetch(getRuntimeConfig().apiUrl + '/list-users');
    this.users = await response.json();
    
    console.log(`I'm mounted and fetched `);
  }
}
</script>
