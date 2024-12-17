<template>
  <nav>
    <div class="nav-link">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="cart">
      <router-link :to="{ name: 'CheckOut' }"
        >cart({{ navData.length }})</router-link
      >
    </div>
  </nav>
  <router-view @update-nav="updateNav" />
</template>
<script>
import CheckOut from "./views/CheckOut.vue";
import { cart } from "./global.js";

export default {
  name: "App",
  components: { CheckOut },

  data() {
    return {
      navData: [],
    };
  },
  mounted() {
    const cachData = JSON.parse(localStorage.getItem("cart")) || [];
    this.navData = cachData;
  },
  methods: {
    // data is being passed up from child to parent and parent listing for data
    updateNav(data) {
      this.navData = data;
      //   this.$emit("update-nav", data);// Update the data for NavComponent
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black;
  display: flex;

  justify-content: center;
  align-items: center;
  position: relative;
}
.nav-link {
  width: 97%;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.cart {
  display: flex;
  margin-left: auto;
  color: white;
  cursor: pointer;
}
</style>
