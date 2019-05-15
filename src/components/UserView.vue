<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout>
                <v-flex>
                    <v-card v-if="validUser">
                        <v-card-title>
                            <h1>User: {{this.userData.name}}</h1>
                        </v-card-title>
                        <v-card-text>
                            <h3>Student Number: {{this.userData.student_number}}</h3>
                            <h3>RFID Number: {{this.userData.rfid_number}}</h3>
                            <h3>Time Left: {{formatTime(this.userData.balance)}}</h3>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click=logout()>LOGOUT</v-btn>
                        </v-card-actions>
                     </v-card>
                    <v-card v-else>
                        <v-card-title>
                            <h1>Not a valid user</h1>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn color="red" @click=logout()>BACK</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                validUser: false,
                userData: {}
            }
        },
        computed:{
            rfid_number(){
                return this.$route.params.rfid_number;
            }
        },
        mounted(){
            this.getUser(this.rfid_number)
        },
        methods:{
            getUser(rfid_number){
                this.$http.get(`/students/${rfid_number}/`)
                .then(response =>{
                    this.userData = response.data
                    this.validUser = true
                    console.log(response)
                })
                .catch(error=>{
                    this.validUser = false
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
            logout(){
                this.$router.push('/login')
            }
        }
    }
</script>