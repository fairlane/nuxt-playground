<template>
<div class="container align-center mt-2">
  <div class="row">
    <div class="col-md-6">
        <users />
    </div>
    <div class="col-md-6 align-center">
      <search-users />
    </div>
  </div>
</div>
</template>

<script>
import SearchUsers from './SearchUsers.vue'
import Users from './Users.vue'
export default {
  name: 'Layout',
  components: {Users, SearchUsers}
}
