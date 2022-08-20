<template>
<LogoBurger/>
  <div class="flex justify-center items-center pt-4">
      <input v-model="link" class="text-white outline-none bg-transparent border-solid	border-b-2	border-b-white	md:w-[70em] w-64 h-10 placeholder:text-white placeholder:font-Montserrat placeholder:text-xl" type="search" placeholder="Hurlez votre avis !"> 
      <button><img class="w-8" @click="searchbar(link)" src ="../assets/search-interface-symbol.png" alt=""></button>
  </div>
  <h1 class="font-Montserrat text-white text-2xl mt-6 mb-6">
    Find the best reviews of your favorite music !  
  </h1>
<div class="flex flex-wrap justify-center">
<div v-for="post in posts" :key="post.id" id="container">
  <div class="ml-8 mr-8 mt-6 mb-10 bg-white rounded-lg shadow-md w-auto md:w-96">
    <a href="#">
        <img :src="require(`../api/${post.file_title}.png`)" class="rounded-t-lg" alt="" />
    </a>
    <!--v-for-->
    <div class="p-5">
            <h5 class="flex justify-start mb-2 text-2xl font-Montserrat tracking-tight text-gray-900">{{ post.title }}</h5>
        <p class="flex justify-start mb-3 font-Montserrat text-gray-700">{{ post.content }}</p>
        <a :href="post.link"><p class="flex justify-start mb-3 font-Montserrat text-gray-700 hover:text-orange-500">Read more...</p></a>
        
         <button @click="getCom(post._id)" class="border-2 border-black rounded-xl bg-black hover:bg-orange-500 hover:border-orange-500 text-white w-60 h-10">Shows comments</button>
        <div v-if="showComs" v-for="comment in comments" :key="comment.post_id" class="mt-4 mb-4">
          <p class="flex justify-start text-lg font-semibold pl-2 italic" v-if="post._id === comment.post_id">{{ comment.author }} :</p>
          <p class="flex justify-start pl-2" v-if="post._id === comment.post_id">{{ comment.content }}</p>
        </div> 
        <div v-if="user">
          <textarea v-if="post._id == selected" v-model="content" class="outline-none border-none w-80 h-20 resize-none" placeholder="Write a comment..."></textarea>
        </div>
        <div v-if="post._id == selected" class="flex justify-center pt-2">
          <button v-if="user" @click="createCom(post._id)" class="border-2 border-black rounded-xl bg-black hover:bg-orange-500 hover:border-orange-500 text-white w-20 h-10">Save</button>
        </div>
    </div>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    LogoBurger,
    Footer,
  },
  data() {
    return {
      posts: '',
      showComs: false,
      user: '',
      comments: '',
      content: '',
      selected: null,
      link: '',
      
    }
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/api/posts")
        this.posts = response.data
        console.log(response.data)
  },
  async created() {
    const response = await axios.get("http://localhost:3000/api/user/" + localStorage.getItem("id"));
        this.user = response.data;
        console.log(this.user.username)
  },
  methods: {
    viewCom() {
            this.showComs = true;
    },
    closePost() {
            this.showpost = false;
            location.reload();
    },
    async getCom(id) {
      const response = await axios.get("http://localhost:3000/api/" + id + "/comment")
      this.comments = response.data
      this.showComs = true
      this.selected = id
    },
    async createCom(id) {
            const response = await axios.post("http://localhost:3000/api/comment/add", {
            content: this.content,
            user_id: this.user._id,
            post_id: id ,
            author: this.user.username,
            });
            console.log(this.user._id),
            location = "/";
            alert('Comment added');
    },    
    async searchbar(url)
    {
      const response = await axios.get("http://localhost:3000/api/post?search=" + url)
      this.posts = response.data
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>