<template>
    <table>
        <caption>
            <h2>Invoices</h2>
        </caption>
        <thead>
            <tr>
                <th>
                    <a href="#" @click="sortInvoices('type')">Type</a>
                    <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon">
                </th>
                <th>
                    <a href="#" @click="sortInvoices('accName')">Account name</a>
                    <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon">
                </th>
                <th>
                    <a href="#" @click="sortInvoices('status')">Status</a>
                    <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon">
                </th>
                <th>
                    <a href="#" @click="sortInvoices('currency')">Currency</a>
                    <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon">
                </th>
                <th>
                    <a href="#" @click="sortInvoices('balance')">Balance</a>
                    <img src="../assets/arrow-down.svg" alt="arrow icon" class="icon">
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="invoice in invoices" :key="invoice.id" @click="setActiveInvoice(invoice)">
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
import _ from "lodash";

export default {
  name: "Invoices",
  props: {
    invoicesData: {
      type: Array,
      required: true
    },
    activeInvoice: {
      type: Object
    }
  },
  data() {
    return {
      invoices: this.invoicesData,
      activeSortHeader: "",
      activeSortOrder: "asc",
      activeSortHeaderIcon: "",
      activeSortHeaderElement: "",
      activeInvoiceRow: ""
    };
  },
  methods: {
    sortInvoices(sortKey) {
      if (this.activeSortHeader === sortKey) {
        // toggle sort order
        this.activeSortOrder = this.activeSortOrder === "desc" ? "asc" : "desc";
      } else {
        this.activeSortHeader = sortKey;
        this.activeSortOrder = "asc";
      }

      // Sort table by active sort order
      this.invoices = _.orderBy(this.invoices, sortKey, this.activeSortOrder);

      // Handle active state and icon rotation
      this.setActive(
        event.srcElement,
        this.activeSortOrder === "asc" ? false : true
      );
    },
    setActive(el, rotateIcon) {
      var newActiveHeader = el.parentNode,
        oldActiveHeader = this.activeSortHeaderElement,
        newActiveIcon = el.nextSibling,
        oldActiveHeaderIcon = this.activeSortHeaderIcon,
        firstSort = oldActiveHeader === "" ? true : false;

      if (!firstSort && newActiveHeader === oldActiveHeader) {
        // Toggle icon rotation
        rotateIcon
          ? newActiveIcon.classList.add("rotate")
          : newActiveIcon.classList.remove("rotate");
      } else {
        if (!firstSort) {
          oldActiveHeader.classList.remove("active");
          oldActiveHeaderIcon.classList.remove("rotate");
        }
        this.activeSortHeaderElement = newActiveHeader;
        this.activeSortHeaderIcon = newActiveIcon;
        newActiveHeader.classList.toggle("active");
      }
    },
    setActiveInvoice(invoice) {
      if (this.activeInvoiceRow !== "") {
        this.activeInvoiceRow.classList.remove("active");
      }
      this.activeInvoiceRow = event.srcElement.parentNode;
      this.activeInvoiceRow.classList.add("active");
      this.$emit("setParentActiveInvoice", invoice);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./src/assets/settings.scss";

table {
  width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.06);
}
caption {
  text-align: left;
}
thead tr {
  background: #fafafa;
  padding: 12px 24px;
}
th,
td {
  padding: 16px;
}
th {
  text-align: left;
  position: relative;
}
a {
  color: inherit;
}
tbody tr {
  cursor: pointer;
}
tbody tr:hover {
  background: #fafafa;
}
tr.active {
  background: #fafafa;
}
tr.active td:first-child {
  border-left: 2px solid #0277ff;
}
.icon {
  position: absolute;
  right: 8px;
  top: 20px;
  width: 16px;
  height: 16px;
  opacity: 0.3;
}
th.active .icon {
  opacity: 1;
}
.icon.rotate {
  transform: rotate(-180deg);
}
</style>
