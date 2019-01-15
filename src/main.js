import Vue from "vue";
import App from "./App.vue";
import _ from "lodash";

Vue.config.productionTip = false;

const storeInvoice = {}

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
