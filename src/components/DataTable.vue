<template>
  <div>
    <v-card-title>
      <h1>User Credit</h1>
    </v-card-title>
    <v-card-text>
      <v-dialog v-model="dialog" max-width = 500px>
        <template v-slot:activator="{on}">
          <v-btn v-if="adminMode" @click=newItem()>Add New User</v-btn>
        </template>

        <!-- Data Form dialog box -->
        <v-card>
          <v-card-title>
            <span v-if="this.editedIndex == -1">New User</span>
            <span v-else>User {{editedItem.student_number}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-flex>
                <v-text-field label="RFID Serial Number" v-model="editedItem.rfid_number"
                  v-if="this.editedIndex == -1">
                </v-text-field>
              </v-flex>
              <v-flex >
                <v-text-field label="Student Number" v-model="editedItem.student_number"></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field label="Name" v-model="editedItem.name"></v-text-field>
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
              <td>{{props.item.rfid_number}}</td>
              <td>{{props.item.student_number}}</td>
              <td>{{props.item.name}}</td>        
              <td>{{formatTime(props.item.balance)}}</td>
              <td><v-icon :color="isUsingColor(props.item.is_using)">{{ isUsingIcon(props.item.is_using) }}</v-icon></td>
              <td v-if="adminMode">
                <v-icon color="green" @click=editItem(props.item)>edit</v-icon>
                <v-icon color="red" @click=deleteItem(props.item)>delete</v-icon>
              </td>
          </template>
      </v-data-table>
    </v-card-text>
  </div>
    
</template>

<script>
export default {
  name: 'DataTable',
  data(){
    return{
      adminMode: true,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        student_number: 0,
        name: "",
        rfid_number: 0,
        balance: 0,
      },
      defaultItem:{
        student_number: 0,
        balance:0
      },
      headers:[
      {
        text: 'RFID Number',
        align: 'left',
        sortable: true,
        value: 'rfid_number'
      },
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
        text: 'Balance',
        align: 'left',
        sortable: true,
        value: 'balance'
      },
      {
        text: 'In Use',
        align: 'left',
        sortable: true,
        value: 'is_using'
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
    isUsingIcon(isUsing) {
      return isUsing? "power" : "power_off"
    },
    isUsingColor(isUsing) {
      return isUsing? "blue" : "#424242"
    },
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
      this.editedItem = Object.assign({},{student_number: 0, name: "", rfid_number: 0, balance: 0})
      this.dialog=false
    },
    submitItem(){
      if(this.editedIndex > -1){//For editing
        //Object.assign(this.users[this.editedIndex],this.editedItem)
        this.$http.patch(`/students/${this.editedItem.rfid_number}/`,{
          name: this.editedItem.name,
          balance: this.editedItem.balance,
          rfid_number: this.editedItem.rfid_number
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
          rfid_number: this.editedItem.rfid_number
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
      this.editedItem = Object.assign({},{student_number: 0, name: "", rfid_number: 0, balance: 0})
      this.close()
    },

    deleteItem(item){
      confirm('Are you sure you want to delete rfid number ' + item.rfid_number + '?') && this.$http.delete(`/students/${item.rfid_number}/`).then(
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
