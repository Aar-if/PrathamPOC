<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CustomButton @btnClick="handleButtonClick" @onBtnClick="handleButtonClick">vue2 button click</CustomButton>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomButton from './components/Button.vue'; 
export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomButton
  },
  methods: {
    handleButtonClick() {
      // Handle button click event
      console.log('Button clicked');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
