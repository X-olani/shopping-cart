<template>
  <div class="">
    <h2>Checkout</h2>
  </div>
  <div class="checkout-list">
    <div class="items">
      <div class="item-label">
        <p>Item</p>
        <p>Size</p>
        <p>Price</p>
        <p></p>
      </div>
      <div v-for="(product, index) in products" class="item-list">
        <p>{{ product.title }}</p>
        <p>{{ product.size }}</p>
        <p>${{ product.price }}</p>
        <img @click="deleteItem(index)" :src="require('@/assets/delete.png')" />
      </div>
      <br />
      <div class="total">Total: ${{ total }}</div>
    </div>
  </div>
</template>
<script>
import { cart } from "../global.js";
export default {
  name: "CheckOut",

  data() {
    return {
      products: [],
      total: 0,
    };
  },
  mounted() {
    //fetch data from cach when page reloads
    const cachData = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.value.length == 0) {
      this.products = cachData;
    } else {
      this.products = cart;
    }

    this.getTotal();
  },
  methods: {
    getTotal() {
      this.total = 0;
      this.products.map((cart) => {
        this.total += cart.price;
      });
    },
    // delete item from cart
    deleteItem(index) {
      this.products.splice(index, 1);
      this.getTotal();
      localStorage.setItem("cart", JSON.stringify(this.products));
    },
  },
};
</script>

<style>
.checkout-list {
  display: flex;
  justify-content: center;
}
.item-list {
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-label {
  display: flex;
  justify-content: space-between;
}
.items {
  width: 30%;
}
.item-list img {
  width: 5%;
  height: 27px;
}
.total {
  text-align: end;
}
</style>
