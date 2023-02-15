<template>
  <div class="page">
    <form action="/example" onsubmit="return false">
      <p>
        <input type="text" v-model="form.name" name="name" placeholder="name" />
      </p>
      <p>
        <input type="number" v-model="form.age" name="age" placeholder="age" />
      </p>
      <input type="submit" value="Submit" @click="submit" />
    </form>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
      },
    };
  },
  created() {
    // this.validate();
  },
  methods: {
    submit() {
      console.log("submit");
      this.validate();
    },
    validate() {
      const descriptor = {
        name: {
          type: "string",
          required: true,
          validator: (rule, value) => value === "muji",
        },
        age: {
          type: "number",
          asyncValidator: (rule, value) => {
            return new Promise((resolve, reject) => {
              if (value < 18) {
                reject("too young"); // reject with error message
              } else {
                resolve();
              }
            });
          },
          // asyncValidator(rule, value,callback) {
          //   fetch("http://localhost:3000/validate").then(
          //     (res) => {
          //       console.log(res);
          //       // callback();
          //       if (res.statusText == "ok") {
          //         callback();
          //       }
          //     },
          //     (err) => {
          //       console.log(err);
          //       callback(new Error(error));
          //     }
          //   );
          // },
        },
      };
      const validator = new Schema(descriptor);
      let params = this.form;
      // validator.validate(params, (errors, fields) => {
      //   if (errors) {
      //     console.log("errors", errors);
      //   } else {
      //     console.log("success");
      //   }
      // });

      // promise
      validator
        .validate(params)
        .then(() => {
          console.log("success");
        })
        .catch(({ errors, fields }) => {
          console.log(errors, fields, "???");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

