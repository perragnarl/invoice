<template>
    <div id="app">
        <div class="layout">
            <div class="layout__invoices">
                <h1>All invoices 2016</h1>
                <Invoices
                    :invoicesData="invoicesData"
                    @setParentActiveInvoice="setActiveInvoice"
                />
            </div>
            <div class="layout__details">
                <Details
                    :activeInvoice="activeInvoice"
                    :invoiceOpen="invoiceOpen"
                    @parentCloseDetails="closeDetails()"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Invoices from "./components/Invoices.vue";
import Details from "./components/Details.vue";
import invoicesData from "./assets/data.json";

export default {
    name: "app",
    data() {
        return {
            invoicesData,
            invoiceOpen: false,
            activeInvoice: {}
        };
    },
    components: {
        Invoices,
        Details
    },
    methods: {
        setActiveInvoice(invoice) {
            this.invoiceOpen = true;
            this.activeInvoice = invoice;
        },
        closeDetails() {
            this.invoiceOpen = false;
        }
    }
};
</script>

<style lang="scss">
    @import './src/assets/settings.scss';

    html {
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        color: $text-color;
    }
    h1 {
        color: $contrast;
    }
    .layout {
        display: flex;
    }
    .layout__invoices {
        width: 55%;
        padding: $l $xl;
    }
    .layout__details {
        background-image: url("~@/assets/background.jpg");
        background-position: center bottom;
        background-size: cover;
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
</style>
