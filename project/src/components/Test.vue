<template>
  
  <div v-if="message" :class="`message ${error}`">
      <div>{{ message }}</div>
  </div>

  <form @submit.prevent="sendFile" enctype="multipart/form-data">

    <input @change="selectFile" ref="fil" type="file"/>
    <button>Send</button>

  <div class="dropzone">

    <input @change="dropSend" ref="file" type="file" class="inputFile"/>

    <p class="inputField" v-if="!uploading">Drag your file here</p>

    <p class="progressBar" v-if="uploading">
      <progress class="progress" :value="progress" max="100">
    {{ progress }} %
      </progress>
    </p>
  </div>

  <div class="content">
  </div>

  </form>

</template>
<script>
import axios from 'axios'

export default {
    name: 'Test',

  data() {
    return {
      file: '',
      message: '',
      error: false,
      uploading: false,
      progress: 0,
      uploadedFiles: []
    };
  },
  methods: {

    selectFile() {
      const file = this.$refs.file.files[0];
      const allowedTypes = ["images/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)){
      this.file = file;
      this.error = false;
      this.message = "";
      } else {
        this.error = true,
        this.message = "Only images are allowed"
      }
    },

    async dropSend() {
      const file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', file)
      try {
        this.uploading = true;
        const res = await axios.post('http://localhost:3000/dropzone', formData, {
          onUploadProgress: e => this.progress = Math.round(e.loaded * 100 / e.total)
        })
        this.uploadedFiles.push(res.data.file)
        console.log(this.uploadedFiles)
        this.uploading = false;
      } catch(err) {
        this.message = err.response.data.error;
        this.error = true;
        this.uploading = false;
      }
    }
}
}
</script>

<style scoped>

.dropzone {
  min-height: 100px;
  padding: 10px 10px;
  position: relative;
  cursor: pointer;
  outline: 2px dashed grey;
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  width: 50%;
}

.inputFile {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropzone:hover {
  background: lightblue;
}

.dropzone .inputField {
  font-size: 1.2rem;
  text-align: center;
  padding: 50px 0;
}

.dropzone .progressBar {
  text-align: center;
  padding: 70px 10px
}


</style>