<template>
  <div class="container">
    <div class="header"><DaySelector /></div>
    <div class="content">
      <p></p>
    </div>
  </div>
</template>

<script>
import DaySelector from "./components/DaySelector.vue";

export default {
  name: "app",
  components: {
    DaySelector
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1em;
  background-color: salmon;
}

.content {
  padding: 1em;
  background-color: lightgreen;
}
</style>
