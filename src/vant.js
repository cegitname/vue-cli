import Vue from 'vue'
import {
  Col,
  Row,
  Button,
  Toast,
  List,
  Cell,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Switch,
  Popup,
  DatetimePicker,
  Image,
  Field,
  Form,
  Overlay,
  picker,
  Loading,
  Lazyload,
  Circle,
  Dialog,
  Icon,
  ImagePreview,
  Uploader,
  Area,
  Progress,
  Radio,
  RadioGroup,
  CellGroup,
  Divider,
  Tag
} from 'vant'

Toast.setDefaultOptions({
  duration: 3000
})

Vue.use(Button)
  .use(Tag)
  .use(Image)
  .use(Divider)
  .use(CellGroup)
  .use(Col)
  .use(Row)
  .use(Toast)
  .use(Cell)
  .use(List)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Popup)
  .use(DatetimePicker)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Switch)
  .use(Field)
  .use(Form)
  .use(Overlay)
  .use(Loading)
  .use(picker)
  .use(Area)
  .use(Progress)
  .use(Radio)
  .use(RadioGroup)
  .use(Lazyload, {
    lazyComponent: true
  })
  .use(Circle)
  .use(Icon)
  .use(Uploader)
  .use(Grid)
  .use(GridItem)

Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
Vue.prototype.$imagePreview = ImagePreview
