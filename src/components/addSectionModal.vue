<template>
  <div>
    <h3>Add a Section!</h3>
    <img id="exitIcon" src="Images/exit-icon.png" @click="Close">
    <form name="addSectionForm">
        <input id="sectionName" class="input-text-new" v-model="sectionName" type="text" placeholder="Section Name" required>
        <br>
        <button id="submitSection" class="submitButton" @click.prevent="AddSection">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addSectionModal',
  props: {
    parentSectionId: String,
  },
  data() {
    return {
      sectionName: '',
    }
  },
  methods: {
      Close() {
        this.sectionName = "";
        this.$emit("NextModal", "displaySections");
      },
      AddSection() {
        if (this.sectionName !== "") {
          //Add section to sections in data
          this.$root.$data.IncrementSectionId();
          let sectionId = "section" + this.$root.$data.sectionIdNumber;
          let parentSection = this.$root.$data.getSectionById(this.parentSectionId);
          let newSection = this.$root.$data.NewSection(this.sectionName, sectionId, parentSection);
          parentSection.children.push(newSection);

          //Add new section to DOM
          let parentDiv = document.getElementById(this.parentSectionId);
          let newDiv = document.createElement("div");
          newDiv.id = sectionId;
          newDiv.setAttribute("name", this.sectionName);
          parentDiv.appendChild(newDiv);
          this.Close();
        }
      },
  }
}
</script>