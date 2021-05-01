<template>
  <div class="f-breadcrumb">
    <template v-for="(opt, idx) in options">
      <router-link
        :key="'f_breadcrumb_item_link_' + idx"
        :to="{
          path: opt.path,
          query: opt.query,
          param: opt.param
        }"
        :replace="replace"
        :class="opt.path === $route.path ? 'active' : ''"
      >
        <f-icon
          v-if="opt.icon"
          :name="opt.icon"
          style="color: inherit; font-size: inherit"
        />
        {{opt.label}}
      </router-link>
      <span
        v-if="idx < options.length - 1"
        :key="'f_breadcrumb_item_separator' + idx"
        class="pl-sm pr-sm"
      >
        {{separator}}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FBreadcrumb',
  props: {
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    separator: {
      type: String,
      default () {
        return  '/'
      }
    },
    replace: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

