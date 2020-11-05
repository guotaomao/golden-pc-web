<template>
  <div class="container">
    golden_pc_web
  </div>
</template>

<script>
import Section from '../components/section'
import {getUserInfo} from '../api/user'
export default {
  layout: 'default',
  middleware: 'http-proxy-middleware',
  async asyncData() {
    // let data = await getUserInfo()
    // console.log('data', data)
  },
  components: {
    Section
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 760px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
