<template>
  <div>
    <a href="https://github.com/darrenfei/f-vue-ui/blob/master/src/pages/table/index.vue" target="_blank">
      样例源码
    </a>
    <!--  -->
    <f-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
      @handleFun="handleFun"
    />

<!--    &lt;!&ndash;  &ndash;&gt;-->
<!--    <f-table-->
<!--      class="mt-md"-->
<!--      title="emit"-->
<!--      hide-bottom-->
<!--      :tableData="config.emitConfig.tableData"-->
<!--      :columns="config.emitConfig.columns"-->
<!--    />-->
<!--    &lt;!&ndash;  &ndash;&gt;-->
<!--    <f-table-->
<!--      class="mt-md"-->
<!--      title="插槽"-->
<!--      hide-bottom-->
<!--      :tableData="config.slotConfig.tableData"-->
<!--      :columns="config.slotConfig.columns"-->
<!--    />-->
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageTable',
  data () {
    return {
      config
    }
  },
  methods:{
    handleFun(data){
      console.log(Object.create(data))
    }
  }
}
</script>

<style>
</style>
