<template>
  <div>
    <a href="https://github.com/darrenfei/f-vue-ui/blob/master/src/pages/tips/index.vue" target="_blank">
      样例源码
    </a>

    <h6>
      基本用法（在没有默认slot的组件中无法使用，必须用元素包裹才可以）：
    </h6>

    <span class="inline-block cursor-pointer">
      <f-icon
        name="warning"
        color="warning"
      />
      <f-tips>
        tips message
      </f-tips>
    </span>

    <!--  -->
    <f-table
      class="mt-md"
      title="slot"
      hide-bottom
      :tableData="config.slotConfig.tableData"
      :columns="config.slotConfig.columns"
    />

  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageTips',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
