<template>
   <LogoBurger/>
<div>
    <h1 class="flex justify-center pl-6 pt-6 font-Montserrat text-white text-3xl mt-4">Register !</h1>
</div>
<div id="container" class="flex justify-center items-center">
<div class="bg-white bg-opacity-25 rounded-2xl ml-6 mr-6 mt-6 mb-28 ">
        
        <div class="flex justify-center ">
            <a href="#"><img src="../assets/group.png" alt="" class="w-36 h-36 mt-2"></a>      
        </div>
            
        <div>
            <input v-model="username" type="text" placeholder="Username" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <input v-model="email" type="email" placeholder="Email" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <input v-model="birthDate" type="date" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-80 items-center font-Montserrat"/>
            <input v-model="password" type="password" placeholder="Password" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
        </div>
        <div class="pb-4">
            <button v-on:click="register" class="flex justify-center border-solid border-2 bg-black border-black text-white rounded-xl ml-6 mr-6 w-80 h-12 items-center font-Montserrat" href="/login">Register</button>
        </div> 
        
    </div>
</div>
   <Footer/> 
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

import LogoBurger from '@/components/LogoBurger.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'register',
  components: {
    LogoBurger,
    Footer,
  },
  name: 'Register',
    data () {
        return {
            username: '',
            email: '',
            birthDate: '',
            password: ''
        }
    },  
    methods: {


        
        // async handleSubmit() {
        //     const response = await axios.post("users", {
        //         username: this.username,
        //         email: this.email,
        //         birthDate: this.birthDate,
        //         password: this.password
        //     });

        //     console.log(response)
        // },
        async register() {
            let result = await axios.post("http://localhost:3000/api/user/signup", 
            {
                username: this.username,
                email: this.email,
                password: this.password,
                birthday: this.birthDate,

            })
                alert("Congrats ! Your account has been created !");
                this.$router.push('/login');
        },
    }
}
</script>
