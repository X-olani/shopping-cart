<template>
  <div class="home">
    <Products @update-nav="sendData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "../components/Product.vue";
export default {
  name: "HomeView",
  components: {
    Products,
  },
  // methods to send data to parent component
  methods: {
    sendData(data) {
      this.$emit("update-nav", data);
    },
  },
};
</script>
