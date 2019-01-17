<template>
    <section class="details" v-if="invoiceOpen">
        <div class="details__card">
            <img :src="activeInvoice.image" alt="">
            <h2>{{ activeInvoice.accName }}</h2>
            <ul>
                <li>
                    <strong>Type</strong>
                    {{ activeInvoice.type }}
                </li>
                <li>
                    <strong>Status</strong>
                    {{ activeInvoice.status }}
                </li>
                <li>
                    <strong>Balance</strong>
                    ${{ activeInvoice.balance }}
                </li>
                <li>
                    <strong>Account name</strong>
                    {{ activeInvoice.accName }}
                </li>
                <li>
                    <strong>Currency</strong>
                    {{ activeInvoice.currency }}
                </li>
                <li>
                    <strong>Notes</strong>
                    {{ activeInvoice.notes }}
                </li>
            </ul>
        </div>
        <button @click="closeDetails()">✖</button>
    </section>
</template>

<script>
export default {
  name: "Details",
  props: {
    activeInvoice: {
      type: Object
    },
    invoiceOpen: {
      type: Boolean
    }
  },
  methods: {
    closeDetails() {
      this.$emit("parentCloseDetails");
    }
  }
};
</script>

<style scoped lang="scss">
@import "./src/assets/settings.scss";

.details {
  margin-top: 20vh;
  text-align: center;
}
.details__card {
  background: #fff;
  max-width: 500px;
  padding: $l $xl;
  text-align: left;
  box-shadow: 0 0 22px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  color: $contrast;
  margin: 0 0 $l 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  margin-bottom: $l;
  width: 50%;
}
strong {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: $s;
}
button {
  font-size: 40px;
  line-height: 1.1;
  color: inherit;
  background: transparent;
  border: none;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  margin-top: $m;
}
button:hover {
  opacity: 1;
}
img {
  margin: (-$l) 0 $l (-$xl);
}
</style>
