import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import * as ELIcons from'@element-plus/icons-vue'

const app = createApp(App)
for(const name in ELIcons) {
  app.component(name,(ELIcons as any)[name])
}
app.use(router)

app.use(ElementPlus)
app.mount("#app")
