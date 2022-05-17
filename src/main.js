import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './i18n'

import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BasePageContainer from './components/ui/BasePageContainer.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseTitlesContainer from './components/ui/BaseTitlesContainer.vue';
import BaseMediaContainer from './components/ui/BaseMediaContainer.vue';

library.add(fas);
library.add(far);
dom.watch();

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-page-container', BasePageContainer);
app.component('base-container', BaseContainer);
app.component('base-titles-container', BaseTitlesContainer);
app.component('base-media-container', BaseMediaContainer);

app.mount('#app');