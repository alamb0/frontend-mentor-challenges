<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
    <button class="main-button">{{ text }}</button>
</template>

<style scoped>
.main-button {
    color: var(--primary-violet);
    border: none;
    text-decoration: none;
    background-color: white;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border-radius: 20px;
    padding: 10px 40px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

@media (hover: hover) {
  button:hover {
    color: white;
    background-color: var(--primary-soft-magenta);
  }
}
</style>
