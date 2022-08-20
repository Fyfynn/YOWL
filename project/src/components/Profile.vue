<template>
    <LogoBurger/>
<div class="flex justify-center pl-4 pt-4 pb-4 font-Montserrat text-3xl text-white">
    <p>Welcome to your profile {{ user.username }} !</p>
</div>
<div id="container" class="flex justify-center items-center">
<div class="bg-white bg-opacity-25 rounded-2xl ml-6 mr-6 mt-2 mb-8 pb-2 pt-2 w-auto md:w-96">
         <ul>
                <li class="flex justify-start pl-6 pb-2 text-white font-Montserrat">Username : {{ user.username }}</li>
                <li class="flex justify-start pl-6 pb-2 text-white font-Montserrat">Email : {{ user.email }}</li>
                <li class="flex justify-start pl-6 pb-2 text-white font-Montserrat">Birthday : {{ user.birthday }}</li>
            </ul>
    <div class="bg-white rounded-2xl ml-6 mr-6 mt-6 mb-8">
        <p class="flex justify-start pl-4 pt-2 pb-14  text-black font-Montserrat">Vos commentaires :</p>
    </div>
    <div class="bg-white rounded-2xl ml-6 mr-6 mt-6 mb-6">
        <p class="flex justify-start pl-4 pt-2 pb-14  text-black font-Montserrat">Vos posts : </p>
    </div>
    <div>
        <a href="/createpost"><input class="border-solid border-2 border-green-500 bg-green-500 text-white rounded-xl mb-8 w-72 h-10 cursor-pointer placeholder:text-white placeholder:text-center placeholder:font-Montserrat" type="text" placeholder="Create a post"></a>
        <a href="/updateprofile"><input class="border-solid border-2 border-sky-400 bg-sky-400 text-white rounded-xl mb-8 w-72 h-10 cursor-pointer placeholder:text-white placeholder:text-center placeholder:font-Montserrat" type="text" placeholder="Modify Account"></a>
        <button @click="deleteUser()" class="border-solid border-2 border-red-600 bg-red-600 text-white rounded-xl mb-2 w-72 h-10 cursor-pointer placeholder:text-white placeholder:text-center placeholder:font-Montserrat">Delete Account</button>
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
  name: 'profile',
  components: {
    LogoBurger,
    Footer,
  },
  data() {
    return {
        user: ''
    }
  },
  async created() { 
    const response = await axios.get("http://localhost:3000/api/user/" + localStorage.getItem("id"));
    this.user = response.data;
  },
  components: {
    LogoBurger,
    Footer,
  },
  methods: {
  async deleteUser() {
    const response = await axios.delete("http://localhost:3000/api/user/" + localStorage.getItem("id"))
      if(response.status==200)
      {
        confirm("Are you sure you want to delete your account ?");
      } else {
        alert("Sorry, an error occurred...");
      }
      console.log(response)
  },
  }
}
</script>
