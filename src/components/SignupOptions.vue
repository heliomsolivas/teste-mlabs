<template>
  <div>
        <div class="signup__options">
          <a href="#" v-on:click.self.prevent class="signup__opt active">Sign up</a>
          <a href="#" v-on:click.self.prevent class="signup__opt">Log in</a>
        </div>
  </div>
</template>

<script>
export default {
  name: 'signup-options',
  data(){
    return{
      
    }
  },
}
</script>

<style lang="scss" scoped>
.signup__options {
  display: flex;
  width: 160px;
  height: 32px;
  margin: 0 auto 24px;
}
.signup__opt {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  width: 50%;
  display: flex;
  align-items: center;
  border: 1px solid #5a5a5a;
  color: #fff;
  justify-content: center;
  &.active {
    background-color: #5a5a5a;
  }
}
.signup__opt:first-of-type {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.signup__opt:last-of-type {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
