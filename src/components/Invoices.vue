<template>
    <table>
        <thead>
            <tr>
                <th role="button" @click="sortInvoices('type')">
                    <div class="flex-wrap">
                        Type
                        <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon" :class="{rotate: !sortAscending}">
                    </div>
                </th>
                <th role="button" @click="sortInvoices('accName')">
                    <div class="flex-wrap">
                        Account name
                        <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon" :class="{rotate: !sortAscending}">
                    </div>
                </th>
                <th role="button" @click="sortInvoices('status')">
                    <div class="flex-wrap">
                        Status
                        <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon" :class="{rotate: !sortAscending}">
                    </div>
                </th>
                <th role="button" @click="sortInvoices('currency')">
                    <div class="flex-wrap">
                        Currency
                        <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon" :class="{rotate: !sortAscending}">
                    </div>
                </th>
                <th role="button" @click="sortInvoices('balance')">
                    <div class="flex-wrap">
                        Balance
                        <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon" :class="{rotate: !sortAscending}">
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="invoice in invoices" :key="invoice.id">
                <td>{{ invoice.type }}</td>
                <td>{{ invoice.accName }}</td>
                <td>{{ invoice.status }}</td>
                <td>{{ invoice.currency }}</td>
                <td>{{ invoice.balance }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import data from '../assets/data.json';
import _ from 'lodash'

export default {
    name: 'Invoices',
    data: () => {
        return {
            invoices: data,
            sortAscending: true
        }
    },
    methods: {
        sortInvoices(sortKey) {
            this.sortAscending = (this.sortAscending) ? false : true;
            var sortOrder = (this.sortAscending) ? 'asc' : 'desc';
            this.invoices = _.orderBy(this.invoices, sortKey, sortOrder);
        }
    },
};
</script>

<style scoped lang="scss">
    table {
        width: 100%;
    }
    thead {
        background: #f3f3f3;
    }
    th, td {
        padding: 8px;
    }
    th {
        text-align: left;
        cursor: pointer;
    }
    .flex-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icon {
        width: 16px;
        height: 16px;
        transition: all 0.2s ease;
    }
    .icon.rotate {
        transform: rotate(-180deg);
    }
</style>
