<template>
  <div>
    <h3 id="currentDirectory" :data-section-id="dataSectionId">{{currentDirectory}}</h3>
    <img id="exitIcon" src="../../public/Images/exit-icon.png" @click="Close">
      <div id="sectionDisplay">
      <div class="section" v-for="section in sectionList" :key="section.id" :name="section.name" :data-section-id="section.id">
        <p class="descriptionText disable-select grabCursor">{{section.name}}</p>
        <button class="toolBarHoverButton disable-select">Stylize</button>
        <button class="toolBarHoverButton disable-select" @click="DisplaySections(section.children, section)">Enter</button>
        <br>
        <img v-if="parentSection !== null" class="sectionTrashIcon" src="../../public/Images/trash.png">
        <img v-if="parentSection !== null" class="sectionEditIcon" src="../../public/Images/edit.png">
      </div>
    </div>
    <button v-if="parentSection !== null" id="addSectionButton" class="toolBarHoverButton hoverButton centerButton" @click="OpenAddSection()">New Section</button>
    <button v-if="parentSection !== null" id="parentButton" class="toolBarHoverButton hoverButton centerButton" v-on="parentSection.parent !== null ? {click: () => DisplaySections(parentSection.parent.children, parentSection.parent)} : {click: () => DisplaySections()}">Back to {{parentDirectoryName}}</button>
  </div>
</template>

<script>
export default {
  name: 'displaySectionsModal',
  data() {
    return {
      currentDirectory: '',
      dataSectionId: '',
      sectionList: [],
      parentSection: null,
      parentDirectoryName: '',
      tempData: '',
    }
  },
  created() {
    this.DisplaySections();
  },
  methods: {
    Close() {
      this.$emit("NextModal", "");
    },
    OpenAddSection() {
      console.log("Adding section to " + this.parentSection.name);
      this.$emit("ParentSectionId", this.parentSection.id);
      this.$emit("NextModal", "addSection");
    },
    DisplaySections(sectionList = this.$root.$data.GetSections(), parentSection = null) {
      this.sectionList = sectionList;
      this.parentSection = parentSection;

      let newText = "Current Directory: ";
      if (this.parentSection !== null) {
          newText += this.parentSection.name;
          this.dataSectionId = this.parentSection.id;
      }
      else {
          newText += "Sections";
          this.dataSectionId = "";
      }
      this.currentDirectory = newText;
      console.log(this.currentDirectory);
      if (this.parentSection !== null && this.parentSection.parent !== null) {
        this.parentDirectoryName = this.parentSection.parent.name;
      }
      else {
        this.parentDirectoryName = "Sections";
      }
      console.log(this.parentDirectoryName);

          //!**title.addEventListener("mousedown", OnDragStartSection);
          //!**title.addEventListener("mouseup", OnDragEndSection);
          
          //!** styleButton.addEventListener("click", function(e) {
          //!**     OpenAddRules(sectionsList[i]);
          //!** });
          //!**styleButton.addEventListener("mouseenter", MouseEnterButton);
          //!**styleButton.addEventListener("mouseleave", MouseLeaveButton);
          
          //!**childrenButton.addEventListener("mouseenter", MouseEnterButton);
          //!**childrenButton.addEventListener("mouseleave", MouseLeaveButton);
          
          //!**trash.addEventListener("click", StartDeleteSection);
              
          //!**edit.addEventListener("click", OpenEditSectionName);
    },
  },
}
</script>

<style scoped>
#sectionDisplay {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.section {
    max-width: 200px;
    height: 150px;
    padding: 5px;
    margin: 20px;
    border-radius: 5px;
    background-color: #048ABF;
    color: #F2F2F2;
}

.toolBarHoverButton {
    background-color: #037F8C;
    border-radius: 5px;
    color: #F2F2F2;
    width: 80%;
    max-width: 300px;
    height: 30px;
    margin: 5px;
    padding: 2px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition-duration: 0.05s;
}

.hoverButton:hover {
    transform: scale(1.03);
}

.centerButton {
    margin: 0 auto;
    margin-bottom: 5px;
}

.disable-select {
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.descriptionText {
    font-weight: bold;
    font-size: 15px;
}

.grabCursor {
    cursor: grab;
}

.sectionTrashIcon {
    cursor: pointer;
    float: right;
}

.sectionEditIcon {
    cursor: pointer;
    float: left;
}

</style>