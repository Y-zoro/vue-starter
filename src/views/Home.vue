<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="skip('/about')" round>about</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import styles from '@/assets/styles/variables.scss'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      styles: styles
    }
  },
  methods: {
    skip (str) {
      this.$router.push(str)
    },
    getList () {
      this.getQdysjList().then(res => {
        console.log(res)
      })
    }
  },
  created () {
    // 添加日志
    this.$store.commit('errorLog/add', [333])
    // 获取日志
    console.log(this.$store.getters.errorLogs)
    // 清空日志
    this.$store.commit('errorLog/clear')
    console.log(this.$store.getters.errorLogs)
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
  .home {
    color: $panGreen;
  }
</style>
