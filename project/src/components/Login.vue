<template>
<LogoBurger/>
<div>
    <h1 class="flex justify-center pl-6 pt-4 font-Montserrat text-white text-3xl mt-4">Login ! </h1>
    </div>
<div id="container" class="flex justify-center items-center">
    <div class="bg-white bg-opacity-25 rounded-2xl ml-6 mr-6 mt-10 mb-40 w-auto ">
        
        <div class="flex justify-center ">
            <a href="#"><img src="../assets/group.png" alt="" class="w-36 h-36 mt-2"></a>      
        </div>
            
        <div>
            <input  v-model="email" type="email" placeholder="Email" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-72 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <input v-model="password" type="password" placeholder="Password" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-6 my-6 h-12 w-72 items-center placeholder:text-black placeholder:font-Montserrat"/>
        </div>
        <div class="pt-4">
            <button v-on:click.prevent="login" class="flex justify-center border-solid border-2 bg-black border-black text-white rounded-xl ml-6 mr-6 w-72 h-12 items-center font-Montserrat" href="/profile">Sign In</button>
        </div>
        <div class="text-white">
            <p class="pt-4 font-Montserrat" >Not a member ?</p>
            <a class=" hover:text-black font-Montserrat" href="/register">Register !</a>
        </div> 
    </div>
</div>
<Footer/>
</template>

<script>
import axios from 'axios'
import LogoBurger from '@/components/LogoBurger.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'login',
  components: {
    LogoBurger,
    Footer,
  },
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
        async login() {
            let result = await axios.post("http://localhost:3000/api/user/login", 
            {
                email: this.email,
                password: this.password,
            })
            localStorage.setItem('id', result.data.id)
            if(result.status == 200)
            {
                alert("You're log in !");
                this.$router.push('/');
            } else {
                alert("Sorry, an error has occurred...");
            }
        },
        
    },
}

</script>


<style scoped>

</style>