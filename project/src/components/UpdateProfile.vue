<template>
 <LogoBurger/>
 <div class="flex justify-center pl-4 pt-6 pb-4 mt-4 font-Montserrat text-3xl text-white">
        <p>Update your profile ! </p>
    </div> 
 <div id="container" class="flex justify-center items-center">
 <div class="bg-white bg-opacity-25 rounded-2xl ml-6 mr-6 mt-14 mb-80 w-auto">
     <div>
        <input v-model="username" type="text" placeholder="Username" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl w-72 mx-6 my-6 h-12 items-center placeholder:text-black placeholder:font-Montserrat"/>
        <input v-model="password" type="password" placeholder="Password" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl w-72 mx-6 my-6 h-12 items-center placeholder:text-black placeholder:font-Montserrat"/>
    </div>
<div>
    <button @click="updatePost()" class="flex justify-center border-solid border-2 bg-sky-400 border-sky-400 text-white rounded-xl ml-6 mr-6 w-72 h-12 items-center font-Montserrat" href="/profile">Save</button>
    <br>
</div>
</div>
</div>

 <Footer/>
</template>

<script>
import axios from 'axios'

import LogoBurger from '@/components/LogoBurger.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'updateProfile',
  components: {
    LogoBurger,
    Footer,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async updatePost() {
            // console.warn(this.notes)
            const response = await axios.put('http://localhost:3000/api/user/'+ localStorage.getItem("id"), {
                username: this.username,
                password: this.password,
            });
            if(response.status==200)
            {
                alert("Your profile has been updated !");
                this.$router.push({name:'profile'});
            } else {
                alert("Sorry, fill the form correctly !");
            }
      },
  }
}

</script>