import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'

import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init()

import VueMeta from 'vue-meta'
import VueStyledShadows from 'vue-styled-shadows';
import VueLazyload from 'vue-lazyload'

Vue.use(plugin)
Vue.use(VueMeta)
Vue.use(VueLazyload)
Vue.component('VueStyledShadows', VueStyledShadows);

import AppLayout from "./Layouts/AppLayout";

const app = document.getElementById('app')
new Vue({
    metaInfo: {
        titleTemplate: (title) => title ? title + ' - ' + process.env.MIX_APP_NAME : process.env.MIX_APP_NAME
    },
    render: (h) =>
        h(App, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => import(`./Pages/${name}`)
                    .then(({default: page}) => {
                        page.layout = page.layout === undefined ? AppLayout : page.layout
                        return page
                    }),
            },
        }),
}).$mount(app)
