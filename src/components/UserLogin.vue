<template>
    <v-container>
        <v-layout>
                <v-flex>
                    <h1>Student Login</h1>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex>
                    <v-card>
                        <v-card-text>
                            <v-text-field v-model="rfid_number" label="RFID Number"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click= gotoUserPage() color="green">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>
    export default{
        data(){
            return{
                rfid_number: 0,
            }
        },
        methods:{
            gotoUserPage(){
                this.$router.push(`/viewing/${this.rfid_number}`)
            },
        }
    }
</script>