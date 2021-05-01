<template>
  <div class="f-date-picker">
    <div class="toolbar block">
      <f-btn
        icon="arrowhead-left-outline"
        flip
        round
        @click="_lastYear"
      />
      <f-btn
        icon="return"
        flip
        round
        @click="_lastMonth"
      />
      <div class="toolbar-title text-center">
        {{currentPageYear + '年' + currentPageMonth + '月'}}
      </div>
      <f-btn
        icon="next"
        flip
        round
        @click="_nextMonth"
      />
      <f-btn
        icon="arrowhead-right-outline"
        flip
        round
        @click="_nextYear"
      />
    </div>
    <div class="f-date-picker-header">
      <div
        v-for="(w, wIdx) in cnWeek"
        :key="'f_date_picker_header_week_' + wIdx "
        class="f-date-picker-cell"
      >
        {{w}}
      </div>
    </div>

    <div class="f-date-picker-body">
      <div
        v-for="(d, dIdx) in currentPageDate"
        :key="'f_date_picker_body_day_' + dIdx "
        class="f-date-picker-cell"
        :class="[_compareWidthModel(d.value) ? 'active' : '', d.isCurrentMonth === false ? 'text-faded' : 'text-black', d.disabled ? 'disabled' : '']"
        @click.stop="_chose(d)"
      >
        {{d.label}}
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'DatePicker',
  mixins: [mixin],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
