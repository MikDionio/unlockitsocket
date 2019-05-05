<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>User Credit</h1>
      </v-card-title>
      <v-card-text>
        <DataTable />
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable'

export default {
  name: 'App',
  components: {
    DataTable
  },
  data () {
    return {
      //
    }
  }
}
</script>
