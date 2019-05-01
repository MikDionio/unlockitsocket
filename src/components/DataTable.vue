<template>
  <div>
    <v-dialog v-model="dialog" max-width = 500px>
      <template v-slot:activator="{on}">
        <v-btn @click=newItem()>Add New User</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span>User {{editedItem.userid}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-flex>
              Credits:<v-text-field label="Credits" suffix="seconds" v-model="editedItem.credit"></v-text-field>
            </v-flex>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn @click=cancel()>Cancel</v-btn>
          <v-btn @click=submitItem() class="green">Submit</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
    <v-data-table
    :headers="headers"
    :items="users"
    >
      <template v-slot:items="props">
        <td>{{props.item.userid}}</td>
        <td>{{props.item.credit}}</td>
        <td>
          <v-icon color="green" @click=editItem(props.item)>edit</v-icon>
          <v-icon color="red" @click=deleteItem(props.item)>delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data(){
    return{
      dialog: false,
      editedIndex: -1,
      editedItem: {
        userid: 0,
        credit: 0,
      },
      defaultItem:{
        userid: 0,
        credit:0
      },
      headers:[
      {
        text: 'User ID',
        align: 'left',
        sortable: true,
        value: 'userid'
      },
      {
        text: 'Credit',
        align: 'left',
        sortable: true,
        value: 'credit'
      },
      {
        text: 'Actions',
        align: 'left',
        sortable: false,
        value: 'userid',
      }
      ],
      users:[
        {userid: 1, credit: 10000},
        {userid: 2, credit: 200},
        {userid: 3, credit: 40},
      ]
    }
    
  },
  methods:{
    newItem(){
      this.editedIndex = -1,
      this.editedItem.userid = this.users.length + 1,
      this.editedItem.credit = 0,
      this.dialog=true
    },
    editItem(item){
      this.editedIndex = this.users.indexOf(item),
      this.editedItem = Object.assign({},item)
      this.dialog=true
    },
    cancel(){
      this.dialog=false
    },
    submitItem(){
      if(this.editedIndex > -1){
        Object.assign(this.users[this.editedIndex],this.editedItem)
      }else{
        this.users.push(this.editedItem)
      }
      this.cancel()
    },
    deleteItem(item){
      const index = this.users.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
