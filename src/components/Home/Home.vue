<template>
  <div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Page from '../Page/Page.vue'

  export default {
    name: 'Home',
    data () {
      return {
        
      }
    },
    components:{
      Page
    }
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
