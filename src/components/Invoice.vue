<template>
    <tr>
        <td>{{ invoice.type }}</td>
        <td>{{ invoice.accName }}</td>
        <td>{{ invoice.status }}</td>
        <td>{{ invoice.currency }}</td>
        <td>{{ invoice.balance }}</td>
    </tr>
</template>

<script>
import data from '../assets/data.json';
export default {
    name: "Invoices",
    data: function () {
        return {
            invoices: data

        }
    }
};
</script>

<style scoped lang="scss">

</style>
