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
import { listUsers } from '../service/userService'
export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    this.users = await listUsers();
    console.log(`I'm mounted and fetched `);
    console.log(`I'm mounted and fetched `);
  }
}
</script>
