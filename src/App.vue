<template>
  <div id="app">
    <signup-header></signup-header>
    <signup-options></signup-options>
    <h1>Sign up for beta</h1>
    <login></login>
  </div>
</template>

<script>
import SignupHeader from './components/SignupHeader.vue'
import Login from './components/Login.vue'
import SignupOptions from './components/SignupOptions.vue'

export default {
  name: 'app',
  components: {
    Login,
    SignupHeader,
    SignupOptions
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  min-height: 100%;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;
}
a {
  text-decoration: none;
  color: #5a5a5a;
}
h1 {
  font-size: 20px;
}
</style>
