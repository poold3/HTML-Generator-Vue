<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'addRulesModal',
  props: {
    sectionId: String,
  },
  data() {
    return {
    }
  },
  methods: {
    Close(nextModal) {
      this.$emit("NextModal", nextModal);
    }
  },
  
}
</script>