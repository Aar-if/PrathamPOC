<template>
  <button @click="click">This is a custom made button to Test Module Federation</button>
</template>

<script>

export default {
name: 'CustomButton', 
  methods: {
    click() {
      this.$emit("btnClick");
      // vue3 events needs the Camel-Case start with "on"
      this.$emit("onBtnClick");
    }
  }
}
</script>
