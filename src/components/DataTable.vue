<template>
  <div>
    <v-card class="red">
      <v-card-title>Hello!</v-card-title>
    </v-card>
    <p> Hi!</p>
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
body {
  background-color: pink;
  color: black;
}
</style>
