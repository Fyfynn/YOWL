<template>
<LogoBurger/>
<div v-if="message" :class="`message ${error}`">
      <div>{{ message }}</div>
  </div>
<div class="flex justify-center pl-4 pt-4 pb-4 mt-4 font-Montserrat text-3xl text-white">
    <p>Create a post ! </p>
</div>
<div id="container" class="flex justify-center items-center">
    <div class="bg-white bg-opacity-25 rounded-2xl ml-6 mr-6 mt-6 mb-52 pt-2 pb-2">
        
        <form @submit.prevent="dropSend" enctype="multipart/form-data">
            
        <!-- <form @submit.prevent="createPost" method="POST" enctype="multipart/form-data"> -->
            <input v-model="title" name="title" type="text" placeholder="Title" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-2 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <input v-model="link" type="url" name="link" placeholder="http://example.fr" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-2 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <input v-model="content" type="text" name="content" placeholder="Comment" class="flex justify-start pl-2 border-solid border-2 bg-white border-white rounded-xl mx-2 my-6 h-12 w-80 items-center placeholder:text-black placeholder:font-Montserrat"/>
            <div class="min-height-100 p-10-10 position-relative cursor-pointer outline-2-dashed-grey outline-offset--10 bg-lightcyan color-dimgray width-50% hover:bg-lightblue">
            <input @change="previewFiles" ref="file" type="file" class="item-center border-2 bg-white rounded-xl w-80 mb-4 h-12 pt-2"/>
        </div>
            <button class="flex justify-center border-solid border-2 bg-green-500 border-green-500 text-white rounded-xl ml-6 mr-6 w-72 h-12 items-center font-Montserrat">Save</button>
        </form>
    </div> 
</div>

<Footer/>
</template>

<script>
import axios from 'axios'
import LogoBurger from '@/components/LogoBurger.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'createpost',
    components: {
        LogoBurger,
        Footer
    },
    data() {
        return {
            tab: {},
            title: '', 
            link: '',
            file: '',
            content: '',
            file: '',
            error: false,
            uploadedFiles: [],
            message: '',
        }
    },
    methods: {

        previewFiles(event){
            console.log(event.target.files)
        },

        onSelect(){
            const file = this.$refs.file.files[0];
            this.file = file;
        },
        // async createPost() {
        //     const formData = new FormData(form);
        //     const response = await axios.post('http://localhost:3000/api/post/add', formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         },
            // }),

        

        async dropSend() {
      const file = this.$refs.file.files[0];


      const formData = new FormData();
      const file_title = file.name

      formData.append('file', file)
      formData.set('title', this.title)
      formData.set('file_title', file_title.replace(/.png/g, ""))
      formData.set('link', this.link)
      formData.set('content', this.content)
      formData.set('user_id', localStorage.getItem('id'))

      try {
        const response = await axios.post('http://localhost:3000/api/post/add', formData)
          if(response.status==200)
                {
                    alert("Your post has been created !");
                    this.$router.push({name:'home'});
                } else {
                    alert("Sorry, fill the form correctly !");
                }

      } catch(err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    }
            //     title: this.title,
            //     link: this.link,
            //     file: test,
            //     content: this.content,
            //     user_id: localStorage.getItem("id"),
            // });
            // console.log(response)
    },
}

</script>