<template>
  <div>
    <a href="https://github.com/darrenfei/f-vue-ui/blob/master/src/pages/btn/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <f-btn
      label="size: sm"
      size="sm"
      @click="_click"
    />

    <f-btn
      label="size: md"
      bgColor="positive"
      size="md"
      @click="_click"
    />

    <f-btn
      label="size: lg"
      bgColor="negative"
      size="lg"
      @click="_click"
    />

    <h6>
      禁用
    </h6>
    <f-btn
      label="disabled"
      size="md"
      disabled
    />

    <h6>
      loading
    </h6>
    <f-btn
      label="loading"
      size="md"
      :loading="true"
    />

    <h6>
      flip
    </h6>
    <f-btn
      label="flip"
      icon="add"
      size="md"
      flip
    />

    <!--  -->
    <f-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />

    <!--  -->
    <f-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageBtn',
  data () {
    return {
      config
    }
  },
  methods: {
    _click () {
      this.$notify.success('click success')
    }
  }
}
</script>

<style>
</style>
