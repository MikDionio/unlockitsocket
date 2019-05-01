<template>
  <div>
    <v-card class="red">
      <v-card-title>Hello!</v-card-title>
    </v-card>
    <v-button>Hi!</v-button>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
