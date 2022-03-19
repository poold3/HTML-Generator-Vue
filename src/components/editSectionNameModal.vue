<template>
  <div>
    <h3>Edit Section Name!</h3>
      <img id="exitIcon" src="Images/exit-icon.png" @click="Close">
      <form name="editSectionNameForm">
          <input class="input-text-new" type="text" name="name" v-model="newName" required>
          <br>
          <button class="submitButton" @click.prevent="ChangeName">Change</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'editSectionNameModal',
  props: {
    sectionId: String,
  },
  data() {
    return {
      newName: '',
      section: this.$root.$data.NewSection(),
    }
  },
  watch: {
    sectionId: function(newId) {
      this.section = this.$root.$data.getSectionById(newId);
      this.newName = this.section.name;
    },
  },
  methods: {
    Close() {
      this.$emit("NextModal", "displaySections");
    },
    ChangeName() {
      //Update sections
      this.section.name = this.newName;

      //Update DOM
      let element = document.getElementById(this.section.id);
      element.setAttribute("name", this.newName);

      this.Close();
    },
  }
}
</script>
