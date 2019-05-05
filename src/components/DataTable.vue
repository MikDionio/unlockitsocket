<template>
  <div>
    <v-dialog v-model="dialog" max-width = 500px>
      <template v-slot:activator="{on}">
        <v-btn @click=newItem()>Add New User</v-btn>
      </template>

      <!-- Data Form dialog box -->
      <v-card>
        <v-card-title>
          <span v-if="this.editedIndex == -1">New User</span>
          <span v-else>User {{editedItem.student_number}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-flex v-if="this.editedIndex == -1">
              <v-text-field label="Student Number" v-model="editedItem.student_number"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="Name" v-model="editedItem.name"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label = "RFID Serial Number" v-model="editedItem.serial_number"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="Balance" suffix="seconds" v-model="editedItem.balance"></v-text-field>
            </v-flex>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn @click=close()>Cancel</v-btn>
          <v-btn @click=submitItem() class="green">Submit</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <!-- Data Table -->
    <v-data-table
    :headers="headers"
    :items="users"
    >
      <template v-slot:items="props">
        <td>{{props.item.student_number}}</td>
        <td>{{props.item.name}}</td>
        <td>{{props.item.serial_number}}</td>
        <td>{{formatTime(props.item.balance)}}</td>
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
        student_number: 0,
        name: "",
        serial_number: 0,
        balance: 0,
      },
      defaultItem:{
        student_number: 0,
        balance:0
      },
      headers:[
      {
        text: 'Student Number',
        align: 'left',
        sortable: true,
        value: 'student_number'
      },
      {
        text: 'Student Name',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      {
        text: 'Card Serial Number',
        align: 'left',
        sortable: true,
        value: 'serial_number'
      },
      {
        text: 'Balance',
        align: 'left',
        sortable: true,
        value: 'balance'
      },
      {
        text: 'Actions',
        align: 'left',
        sortable: false,
        value: 'student_number',
      }
      ],
      users:[]
    }
    
  },
  mounted(){
    this.getItems()
  },
  methods:{
    getItems(){
      this.$http.get('/students')
      .then(response =>{
        this.users = response.data
      })
      .catch(error =>{
        console.log(error)
      })
    },
    formatTime(seconds){
      let h = parseInt(seconds/3600)
      let m = parseInt((seconds%3600)/60)
      let s = seconds%60

      //padding
      h = (h < 10 ? '0': '') + h
      m = (m < 10 ? '0':'') + m
      s = (s < 10 ? '0':'') + s
      return h + ":" + m + ":" + s
    },

    newItem(){
      this.editedIndex = -1,
      this.editedItem.student_number = "0",
      this.editedItem.balance = 0,
      this.dialog=true
    },
    
    editItem(item){
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({},item)
      this.dialog=true
    },

    close(){
      this.editedItem = Object.assign({},{student_number: 0, name: "", serial_number: 0, balance: 0})
      this.dialog=false
    },

    submitItem(){
      if(this.editedIndex > -1){//For editing
        //Object.assign(this.users[this.editedIndex],this.editedItem)
        this.$http.patch(`/students/${this.editedItem.student_number}/`,{
          name: this.editedItem.name,
          balance: this.editedItem.balance,
          serial_number: this.editedItem.serial_number
        }).then(
          response => {
            this.getItems()
            console.log(response)
          }
        ).catch(error => {console.log(error)})
      }else{//For creating
        this.$http.post('/students/',{
          student_number:this.editedItem.student_number,
          name: this.editedItem.name,
          balance: this.editedItem.balance,
          serial_number: this.editedItem.serial_number
        }).then(
          response=>{
            this.getItems()
            console.log(response)
          }
        ).catch(
          error=>{
            console.log(error)
          }
        )
      }
      this.editedItem = Object.assign({},{student_number: 0, name: "", serial_number: 0, balance: 0})
      this.close()
    },

    deleteItem(item){
      confirm('Are you sure you want to delete account number ' + item.student_number + '?') && this.$http.delete(`/students/${item.student_number}/`).then(
        response => {
          console.log(response)
          this.getItems()
        }
      ).catch(
        error =>{
          console.log(error)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
