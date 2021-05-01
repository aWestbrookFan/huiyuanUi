import FBtn from './components/btn/index'
import FField from './components/field/index'
import FInput from './components/input/index'
import FSelect from './components/select/index'
import FRadio from './components/radio/index'
import FCheckbox from './components/checkbox/index'
import FIcon from './components/icon/index'
import FModal from './components/modal/index'
import FTable from './components/table/index'
import FPopover from './components/popover/index'
import FCard from './components/card/index'
import FBreadcrumb from './components/breadcrumb/index'
import FCarousel from './components/carousel/index'
import FCarouselItem from './components/carousel/item'
import FProgress from './components/progress/index'
import FDatepicker from './components/datepicker/index'
import FTips from './components/tips/index'
import FTree from './components/tree/index'

import FNotify from './components/notify/index.js'
import Loading from './directives/loading/index'
import CloseOverlay from './directives/closeoverlay/index'

import { platform } from './utils/function'

const components =  [
  FBtn,
  FInput,
  FSelect,
  FRadio,
  FCheckbox,
  FIcon,
  FModal,
  FTable,
  FPopover,
  FCard,
  FBreadcrumb,
  FField,
  FCarousel,
  FCarouselItem,
  FProgress,
  FDatepicker,
  FTips,
  FTree
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(Loading)
  Vue.use(CloseOverlay)
  Vue.use(FNotify)

  Vue.prototype.$f = {
    platform: platform
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  FBtn,
  FInput,
  FSelect,
  FRadio,
  FCheckbox,
  FIcon,
  FModal,
  FTable,
  FPopover,
  FCard,
  Loading,
  CloseOverlay,
  FNotify,
  FBreadcrumb,
  FField,
  FCarousel,
  FCarouselItem,
  FProgress,
  FDatepicker,
  FTips,
  FTree
}
