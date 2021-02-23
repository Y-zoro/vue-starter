<template>
  <div class="about">
    <h1 class="lp">This is an about page</h1>
    <el-button @click="goHome()" round>home</el-button>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {}
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
