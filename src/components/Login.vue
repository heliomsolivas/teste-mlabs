<template>
  <div class="login">
    <form action="#">
      <div class="login__field">
        <label for="username" class="login__label">Username</label>
        <input v-model="username" v-validate="'required'" name="username" type="text" class="login__input" placeholder="dawiddomanski">
        <span class="login__error" v-show="errors.has('username')">{{ errors.first('username') }}</span>
      </div>
      
      <div class="login__field">
        <label for="password" class="login__label">Password</label>
        <input v-model="password" v-validate="'required|min:6'" name="password" type="password" class="login__input" placeholder="*******">
        <span class="login__error" v-show="errors.has('password')">{{ errors.first('password') }}</span>
      </div>

      <div class="login__field">
        <label for="email" class="login__label">E-mail</label>
        <input v-model="email" v-validate="'required|email'"  name="email" type="email" class="login__input" placeholder="your e-mail goes here...">
        <span class="login__error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      
      <div class="login__field login__field--terms">
        <input type="checkbox" class="login__checkbox" id="terms"  name="terms" v-validate="'required'">
        <span class="login__fakebox"></span>
        <div class="terms">
          <label for="terms" class="login__label--terms">I agree to all statements included in </label><a href="#" class="login__link" v-on:click.self.prevent>terms of service</a>
        </div>
        <span class="login__error" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
      </div>

      <div class="login__field login__field--actions">
        <a href="#" class="login__btn" v-on:click.self.prevent @click="nextStep">Sign Up</a>
        <a href="#" class="login__link" v-on:click.self.prevent>I am already a member</a>
      </div>
    </form>

    <modal name="confirmation" :width="300" :height="235">
        <h2>Your informations are correct?</h2>
        <p>Name: {{username}}</p>
        <p>Password: {{password}}</p>
        <p>E-mail: {{email}}</p>
        <div class="wrapper__actions">
        <a class="btn__modal btn__modal--no" href="#" v-on:click.self.prevent @click="closeForm">No</a>
        <a class="btn__modal btn__modal--yes" v-on:click.self.prevent href="#" @click="finishForm">Yes</a>
        </div>
    </modal>

    <modal class="thanks" name="thanks" :width="300" :height="235">
      <h2 class="thanks__message">Thank you for your registration!</h2>
    </modal>
</div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    closeForm(){
       this.$modal.hide('confirmation');
    },
    finishForm(){
      this.$modal.hide('confirmation');
      this.$modal.show('thanks');
    },
    nextStep() {
      this.$validator.validateAll().then((result) => {
        if (result) {
        this.$modal.show('confirmation');
        return;
        }
      });
    }
  },
}
</script>

<style lang="scss">
.login {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
  .thanks {
    .v--modal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .v--modal {
    color: #222222;
    padding: 24px;
    .wrapper__actions {
      display: flex;
      justify-content: space-between;
    }
    .btn__modal {
      width: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      height: 42px;
      border-radius: 20px;
      &--no {
        background-color: red;
      }
      &--yes {
        background-color: green;
      }
    }
    h2 {
      font-size: 16px;
      margin-bottom: 24px;
    }
    p {
      font-size: 14px;
      margin-bottom: 12px;
    }
    p:last-of-type {
      margin-bottom: 24px;
    }
  }
  &__btn {
    width: 160px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 18px;
    letter-spacing: 0.1em;
    color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 20px;
    height: 42px;
    background-color: #ffbb00;
    border: 0;
    outline: 0;
  }
  &__error {
    color: #c0392b;
    font-size: 11px;
    position: absolute;
    bottom: -18px;
  }
  &__field {
    width: 100%;
    border-bottom: 1px solid #5a5a5a;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 36px;
    position: relative;
    &:last-of-type {
      margin-bottom: 0;
    }
    &--actions {
      border: none;
      align-items: center;
    }
    &--terms {
      display: flex;
      flex-direction: row;
      border: none;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  &__fakebox {
    height: 20px;
    width: 20px;
    border-radius: 2px;
    background: #ffbb00;
    position: absolute;
    display: flex;
    justify-content: center;
  }
  &__checkbox {
    display: none;
  }
  &__link {
    text-decoration: underline;
    font-size: 12px;
  }
  &__label {
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #5a5a5a;
    font-size: 12px;
    &--terms {
      font-size: 12px;
      margin-right: 4px;
      padding-left: 30px;
    }
  }
  &__input {
    font-size: 16px;
    margin-bottom: 12px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
  }
  &__checkbox:checked ~ .login__fakebox:after {
    content: 'L';
    font-size: 16px;
    color: #000;
    font-weight: bold;
    transform: scaleX(-1) rotate(-35deg);
    margin-top: -2px;
  }
}
.terms {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 3;
  .login__link {
    margin-left: 30px;
  }
}
</style>
