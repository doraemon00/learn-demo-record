<template>
  <div class="page">
    <form @submit.prevent="submitForm">
      <label>
        Name:
        <input type="text" v-model="form.name" />
      </label>
      <label>
        Email:
        <input type="email" v-model="form.email" />
      </label>
      <label>
        附件：
        <input type="file" name="file" @change="changeFile($event)" />
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        file: "",
      },
    };
  },
  methods: {
    changeFile(e) {
      // 拿到附件进行处理
      const file = e.target.files[0];
      this.form.file = file;
    },

    // 原生提交表单
    submitForm() {
      let { name, email, file } = this.form;
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", file);

      axios({
        method: "post",
        url: "http://localhost:3001/upload",
        data: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }).then((res) => {
        console.log(res, "发送数据");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

