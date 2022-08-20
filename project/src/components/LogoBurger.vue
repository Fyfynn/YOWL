<template>
    <div id="container" class="flex justify-between items-center">
        <div id="burger_et_logo" class="flex items-center pl-2">
            <img id="logo" class="w-28 md:w-48" src="../assets/logo.png" alt="">
        </div>
        <div class="flex justify-center items-center">
            <a v-if="!user" class="mr-4  border-4 bg-black border-black rounded-xl text-white font-Montserrat w-20 h-10 pt-1" href="/login">Sign in</a>
            <a @click="logout" v-else="user" class="mr-4  border-4 bg-black border-black rounded-xl text-white font-Montserrat w-20 h-10 pt-1" href="/login">Logout</a>
            <a href="" class="w-8 mr-4"> <img src="../assets/burger.png" alt=""></a>
        </div>
    </div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'LogoBurger',
  data() {
    return {
        user: null
    }
  },
  async created() {
    const response = await axios.get("http://localhost:3000/api/user/" + localStorage.getItem("id"));
    this.user = response.data;
  },
  methods: {
    logout() {
        localStorage.removeItem('id');
        this.$router.push('/');
        this.user = null
    }
  }
}
</script>
