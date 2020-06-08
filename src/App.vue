<template>
  <div id="app" class="grid-container">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.svg"/>
      </div>
      <div class="menu">
        <button class="button button1">Claim DOG</button>
      </div>
    </div>
    <div class="section0">
      <h1>Polkadog</h1>
      <vue-typed-js :strings="['the new DOGΞ.', 'expect chaos.', 'without foundation.', 'a community choice.', 'just for fun, maybe.', 'SUDO? NO!']" :typeSpeed="80" :loop="true">
        <h1><ins><span class="typing"></span></ins></h1>
      </vue-typed-js>
    </div>
    <div class="section1">
      <h1>Polkadog?</h1>
      <VueFaqAccordion
        :items="faqItems"
      />
      <button class="button button1 margin-top-100">Claim DOG</button>
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  name: 'App',
  components: {
    VueFaqAccordion
  },
  data () {
    return {
      faqItems: [
        {
          title: 'What is Polkadog?',
          value: "Polkadog is the new DOGΞ, a social test, a... I'm pool in words.  If you don't believe me or don't get it, I don't have time to try to convince you, sorry.  ",
        },
        {
          title: 'Is DOG an ERC20 Token?',
          value: "YES.  (Who will ask this question? It's 2020 right now.)",
        },
        {
          title: "How many DOGs can I get?",
          value: '1 DOT = 100 DOG, calculate by yourself.',
        },
        {
          title: "Will I lose my DOT if I claim DOG?",
          value: 'Absolutely NO.  How?  If you find a way to do that, please tell me.  ',
        },
      ]
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Work Sans';
  src: url('./assets/WorkSans-VariableFont_wght.ttf') format('truetype');
}
#app {
  font-family: 'Work Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E6007A;
  margin-top: 20px;
}
h1 {
  color: #1e1e1e;
  font-weight: 700;
  font-size: 2.8rem;
}
ins {
  color: #E6007A;
}
.align-right {
  text-align: right;
}
.text-light {
  color: #4745437C !important;
}
.text-dark {
  color: #474543 !important;
}
.header { 
  grid-area: header; 
  text-align: left;
}
.logo {
  display: inline-block;
  width: 200px;
  text-align: left;
  padding-top: 20px;
}
.menu {
  vertical-align: top;
  display: inline-block;
  padding-top: 10px;
  margin-left: auto;
  width: calc(100% - 200px);
  text-align: right;
}
.section0 {
  grid-area: section0;
  padding-top: 220px;
  text-align: left;
  height: calc(100vh - 300px);
}
.section1 {
  grid-area: section1;
  text-align: center;
  height: 800px;
}
.margin-top-100 {
  margin-top: 100px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 825px 1fr;
  grid-template-rows: 100px 1fr 1fr;
  grid-template-areas:
    '. header .'
    '. section0 .'
    '. section1 .';
  grid-gap: 10px;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}
.button1 {
  background-color: white; 
  color: #E6007A; 
  border: 2px solid #E6007A;
  border-radius: 30px;
}

.button1:hover {
  background-color: #E6007A;
  color: white;
}
</style>
