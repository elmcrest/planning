<template>
  <div class="daySelector">
    <DayButton
      v-for="daybtn in dayButtons"
      :key="daybtn.key"
      :daySelector="daybtn.daySelector"
      :selectedDay="selectedDay(daybtn.daySelector, daybtn.excludeWeekends)"
      @update-ref-day="updateRefDay"
    />
  </div>
</template>

<script>
import moment from "moment";
import DayButton from "./DayButton.vue";
import { getSelectedDay } from "../lib/date_helpers.js";

let nextDayButtonId = 1;

export default {
  beforeCreate() {
    let today = moment();
    this.$store.commit("setRefDate", today);
  },
  components: {
    DayButton
  },
  data() {
    return {
      dayButtons: [
        {
          key: nextDayButtonId++,
          daySelector: "dayBeforeSelectedDay",
          excludeWeekends: true
        },
        {
          key: nextDayButtonId++,
          daySelector: "selectedDay",
          excludeWeekends: true
        },
        {
          key: nextDayButtonId++,
          daySelector: "dayAfterSelectedDay",
          excludeWeekends: true
        }
      ]
    };
  },
  methods: {
    selectedDay(daySelector, excludeWeekends) {
      return getSelectedDay(
        daySelector,
        this.$store.state.refDate,
        excludeWeekends
      ).format("dddd, Do MMMM");
    },
    updateRefDay(newRefDate) {
      if (newRefDate === "dayBeforeSelectedDay") {
        console.log(this.$store.state.refDate);
        this.$store.commit(
          "setRefDate",
          this.$store.state.refDate.subtract(1, "day")
        );
      } else if (newRefDate === "selectedDay") {
        // do nothing
      } else {
        this.$store.commit(
          "setRefDate",
          this.$store.state.refDate.add(1, "day")
        );
      }
    }
  }
};
</script>

<style lang="scss">
.daySelector {
  display: flex;
  justify-content: center;
  background-color: $background-dark;
  color: $font-color-light;
}
</style>
