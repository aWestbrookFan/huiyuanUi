<template>
  <div>
    <a href="https://github.com/aWestbrookFan/huiyuanUi/blob/master/src/pages/icon/index.vue" target="_blank">
      样例源码
    </a>
    <p>
      按钮素材来自于<a href="https://www.iconfont.cn/" target="_blank">阿里巴巴矢量图标图</a>
    </p>
    <h6>
      基本用法:
    </h6>
    <f-icon
      name="settings"
    />
    <h6>
      name
    </h6>
    <f-icon
      name="down"
    />
    <f-icon
      name="address"
    />
    <f-icon
      name="camera"
    />
    <f-icon
      name="home"
    />
    <f-icon
      name="brightness"
    />

    <h6>
      color
    </h6>
    <f-icon
      name="settings"
      color="positive"
    />
    <f-icon
      name="settings"
      color="primary"
    />
    <f-icon
      name="settings"
      color="negative"
    />
    <f-icon
      name="settings"
      color="light"
    />
    <f-icon
      name="settings"
      color="dark"
    />

    <h6>
      size
    </h6>
    <f-icon
      name="settings"
      size="9px"
    />
    <f-icon
      name="settings"
      size="14px"
    />
    <f-icon
      name="settings"
      size="20px"
    />
    <f-icon
      name="settings"
      size="24px"
    />
    <f-icon
      name="settings"
      size="30px"
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
  name: 'pageIcon',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
