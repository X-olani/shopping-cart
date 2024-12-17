<template lang="">
  <div class="">
    <h2>Product list</h2>
  </div>

  <div class="product-list">
    <div v-for="product in products" class="product">
      <img :src="require(`@/assets/${product.img}`)" />
      <br />
      <p>{{ product.title }}</p>
      <p>Size: {{ product.size }}</p>
      <p>Price:${{ product.price }}</p>
      <div
        @click="addProduct(product.id)"
        class="add-to-cart"
        style="text-align: end"
      >
        Add
      </div>
    </div>
  </div>
</template>
<script>
import { cart } from "../global.js";

export default {
  emits: ["update-nav"],
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  // when component is moundted fatch data from localhost
  mounted() {
    fetch("http://localhost:3000/products")
      .then((e) => e.json())
      .then((data) => (this.products = data));
  },

  methods: {
    //gets the id when clicked on, id used to find items and add to cart array
    addProduct(id) {
      this.products.map((product) => {
        if (product.id == id) {
          //cart.value.push(product);
          this.cart.push(product);
        }
      });
      //creating the catch to store the items
      localStorage.setItem("cart", JSON.stringify(this.cart));
      // updates the cart count in the parent component
      this.$emit("update-nav", this.cart);
    },
  },
};
</script>
<style>
.product {
  display: flex;
  width: 12%;
  border: 1px;
  flex-direction: column;
  margin: 15px;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.add-to-cart {
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  width: 32px;
  padding: 9px;
  display: flex;
  justify-content: center;
  color: #42b983;
}
.add-to-cart:hover {
  background-color: #42b983;
  color: white;
}
</style>
