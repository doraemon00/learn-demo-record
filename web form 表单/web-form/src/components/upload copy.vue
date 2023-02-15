<template>
  <div class="page">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称"></el-form-item>

      <div>
        <label for="file">Choose a file</label>
        <input
          type="file"
          id="file"
          name="myFile"
          @change="changeFile($event)"
        />
      </div>
      <!-- <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload> -->

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <form action="" >
      <input type="file" name="file" @change="changeFile($event)" />
      <input type="submit" value="提交" @submit="submit"/>
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
        file: "",
      },
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    changeFile(e) {
      // 拿到附件进行处理
      const file = e.target.files[0];
      this.form.file = file;
    },

    // 原生
    submit(){
      console.log("submit!");
    },  


    onSubmit() {
      // console.log("submit!");
      let tempData = {
        file: this.form.file,
      }
      var formdata = new FormData();
      console.log(this.form.file, ">>>");
      formdata.append("file", this.form.file);
      formdata.append("name", '张三');
      axios({
        method: "post",
        url: "http://localhost:3001/upload",
        data: tempData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }).then((res) => {
        console.log(res, "发送");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

