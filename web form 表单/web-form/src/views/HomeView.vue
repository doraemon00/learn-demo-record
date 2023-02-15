<template>
  <div class="home">
    <!-- <validate /> -->
    <upload />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import validate from '@/components/validate.vue'
import upload from '@/components/upload.vue'



export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    validate,
    upload
  }
}
</script>
