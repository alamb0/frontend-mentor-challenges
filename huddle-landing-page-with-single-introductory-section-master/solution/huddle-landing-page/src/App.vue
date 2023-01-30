<script setup>
import Button from './components/Button.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" />
  </header>

  <main class="container">
    <img alt="Illustration" src="./assets/illustration-mockups.svg" />
    <div class="main-content">
      <h1 class="title">Build The Community Your Fans Will Love</h1>

      <p class="description">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
      Create connections with your users as you engage in genuine discussion.</p>

      <Button text="Register"></Button>
    </div>
  </main>

  <footer>
    <font-awesome-icon icon="fa-brands fa-facebook" size="2x"/>
    <font-awesome-icon icon="fa-brands fa-twitter" size="2x"/>
    <font-awesome-icon icon="fa-brands fa-instagram" size="2x"/>
  </footer>

  <!-- <p class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Austin Lamb</a>.
  </p> -->
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
  padding-bottom: 40px;
}

.container {
  display: flex;
  flex-direction: row;
}

.main-content {
  padding: 40px;
}

.title {
  font-weight: 600;
}

.description {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  padding: 20px 0;
}

footer {
  display: flex;
  justify-content: flex-end;
}

footer > * {
  padding: 10px;
}

/* .attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); } */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
 }

  .logo {
    margin: 0;  
  }
}

@media (max-width: 1024px) {
  .container{
    flex-direction: column;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
