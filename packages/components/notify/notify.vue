<template>
  <transition name="fade">
    <div class="f-notify" :class="type" v-show="show">
      <f-icon
        v-if="icon"
        :name="icon"
        size="14px"
      />
      {{msg}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FNotify',
  props: {
    type: {
      type: String,
      default () {
        return ''
      }
    },
    icon: {
      type: String,
      default () {
        return ''
      }
    },
    msg: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
