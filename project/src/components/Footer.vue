<template>
    <div class="bg-black border-2 border-black rounded-t-3xl flex justify-around items-center pl-2 pr-2 pt-4 pb-4">
        <a  href="/"><img src="../assets/home.png" alt="" class="w-10 h-10 ml-2"></a>
        <a class="text-white font-Montserrat text-2xl" href="">Top</a>
        <a class="text-white font-Montserrat text-2xl" href="">Recent</a>
        <a v-if="!user" href="/login"><img src="../assets/group.png" alt="" class="w-10 h-10 mr-2"></a>
        <a v-else="user" href="/profile"><img src="../assets/group.png" alt="" class="w-10 h-10 mr-2"></a>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Footer',
  data() {
    return {
        user: null
    }
  },
  async created() {
    const response = await axios.get("http://localhost:3000/api/user/" + localStorage.getItem("id"));
    this.user = response.data;
    console.log(response);
  },
}
</script>
