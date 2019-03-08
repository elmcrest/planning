<template>
  <button @click="$emit('update-ref-day', daySelector)">
    {{ selectedDay }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    day: String,
    selectedDay: String,
    daySelector: String,
    excludeWeekends: Boolean
  }
};
</script>

<style lang="scss">
button {
  background-color: orange;
}
</style>
