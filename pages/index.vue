<template>
  <users/>
</template>

<script lang="ts">
import Vue from 'vue';
import Users from '~/components/Users.vue';

export default Vue.extend({
  components: { Users },
  name: 'IndexPage'
})
</script>
