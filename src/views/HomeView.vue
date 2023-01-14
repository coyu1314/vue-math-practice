<template>
  <div class="home">

    <h1>Simple Math Practices Questions for Grade 1-5</h1>
    <h3>Please select one from above</h3>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> | 
            <router-link to="/product">Product</router-link>
        </nav> -->
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Options({
    components: {
      // HelloWorld,
    },
  })
  export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {padding-top: 15%;}
</style>