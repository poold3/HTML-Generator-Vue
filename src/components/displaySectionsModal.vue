<template>
  <div>
    <h3 id="currentDirectory" :data-section-id="dataSectionId">{{currentDirectory}}</h3>
    <img id="exitIcon" src="../../public/Images/exit-icon.png" @click="Close">
      <div id="sectionDisplay" @mousemove="MoveSection">
      <div class="section" v-for="section in sectionList" :key="section.id" :name="section.name" :data-section-id="section.id" v-on="isDragging === true && section.id !== sectionBeingMoved.getAttribute('data-section-id') ? {mouseenter: MouseEnterSection, transitionend: TransitionEndSection} : {}">
        <p class="descriptionText disable-select" :class="{grabCursor: !isDragging, grabbingCursor: isDragging}" @mousedown="OnDragStartSection($event)" @mouseup="OnDragEndSection()">{{section.name}}</p>
        <button class="toolBarHoverButton disable-select" @click="StyleSection(section.id)">Stylize</button>
        <button class="toolBarHoverButton disable-select" @click="DisplaySections(section.children, section)">Enter</button>
        <br>
        <img v-if="parentSection !== null" class="sectionTrashIcon" src="../../public/Images/trash.png" @click="DeleteSection(section.id)">
        <img v-if="parentSection !== null" class="sectionEditIcon" src="../../public/Images/edit.png" @click="EditName(section.id)">
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
      isDragging: false,
      nextPosition: null,
      sectionBeingMoved: null,
      sectionBeingMovedData: null,
      originalMouseXPosition: 0,
      originalMouseYPosition: 0,
      sectionDisplayArea: null,
      allSectionsBeingDisplayed: [],
    }
  },
  created() {
    this.DisplaySections();
  },
  methods: {
    Close() {
      this.$emit("NextModal", "");
    },
    StyleSection(sectionId) {
      this.$emit("TempSection", sectionId);
      this.$emit("NextModal", "addRules");
    },
    OnDragStartSection(e) {
      if (this.sectionList.length > 1) {
        this.isDragging = true;
        this.sectionDisplayArea = document.getElementById("sectionDisplay");
        this.allSectionsBeingDisplayed = this.sectionDisplayArea.children;
        this.sectionBeingMoved = e.currentTarget.parentElement;
        this.sectionBeingMovedData = this.sectionBeingMoved.getBoundingClientRect();
        this.nextPosition = null;
        this.sectionBeingMoved.style.zIndex = "1";
        this.originalMouseXPosition = e.screenX;
        this.originalMouseYPosition = e.screenY;
          for (let i = 0; i < this.allSectionsBeingDisplayed.length; ++i) {
            if (this.allSectionsBeingDisplayed[i].getAttribute("data-section-id") !== this.sectionBeingMoved.getAttribute("data-section-id")) {
                this.allSectionsBeingDisplayed[i].setAttribute("data-in-transition", "false");
                this.allSectionsBeingDisplayed[i].style.transition = "transform 0.3s";
                this.allSectionsBeingDisplayed[i].style.zIndex = "2";
            }
          }
      }
    },
    OnDragEndSection() {
      this.sectionBeingMoved.style.zIndex = "";
      if (this.nextPosition === null) {
          this.sectionBeingMoved.style.transform = "";
          for (let i = 0; i < this.allSectionsBeingDisplayed.length; ++i) {
              if (this.allSectionsBeingDisplayed[i].getAttribute("data-section-id") !== this.sectionBeingMoved.getAttribute("data-section-id")) {
                  this.allSectionsBeingDisplayed[i].style.transition = "";
                  this.allSectionsBeingDisplayed[i].style.zIndex = "";
              }
          }
      }
      else {
          this.UpdateTransformRule(this.sectionBeingMoved, this.sectionBeingMoved.getBoundingClientRect());
          this.ReloadSectionsDisplay();
          //this.isDragging = false;
      }
    },
    MoveSection(e) {
      if (this.isDragging === true) {
        let xMovement = (e.screenX - this.originalMouseXPosition).toString() + "px";
        let yMovement = (e.screenY - this.originalMouseYPosition).toString() + "px";
        let sectionTransform = "translateX(" + xMovement + ") translateY(" + yMovement + ")";
        this.sectionBeingMoved.style.transform = sectionTransform;
      }
      
    },
    UpdateTransformRule(sectionToMove, sectionToMoveData) {
      let xTransition = (this.nextPosition.left - sectionToMoveData.left);
      let yTransition = (this.nextPosition.top - sectionToMoveData.top);
      let currentTransform = sectionToMove.style.transform;
      if (currentTransform !== "") {
          let xPositionStart = currentTransform.indexOf("translateX");
          let xPositionEnd = currentTransform.indexOf("px", xPositionStart);
          let yPositionStart = currentTransform.indexOf("translateY", xPositionEnd);
          let yPositionEnd = currentTransform.indexOf("px", yPositionStart);
          if (xPositionStart !== -1 && xPositionEnd !== -1) {
              let currentXTransition = currentTransform.substring(xPositionStart + 11, xPositionEnd);
              currentXTransition = Number(currentXTransition);
              xTransition += currentXTransition;
          }
          if (yPositionStart !== -1 && yPositionEnd !== -1) {
              let currentYTransition = currentTransform.substring(yPositionStart + 11, yPositionEnd);
              currentYTransition = Number(currentYTransition);
              yTransition += currentYTransition;
          }
      }
      xTransition = (xTransition).toString() + "px";
      yTransition = (yTransition).toString() + "px";
      sectionToMove.style.transform = "translateX(" + xTransition + ") translateY(" + yTransition + ")";
    },
    MouseEnterSection(e) {
      let sectionHover = e.currentTarget;
      if (sectionHover.getAttribute("data-in-transition") === "false") {
          sectionHover.setAttribute("data-in-transition", "true");
          let sectionHoverData = sectionHover.getBoundingClientRect();
          if (this.nextPosition === null) {
              let xTransition = (this.sectionBeingMovedData.left - sectionHoverData.left).toString() + "px";
              let yTransition = (this.sectionBeingMovedData.top - sectionHoverData.top).toString() + "px";
              sectionHover.style.transform = "translateX(" + xTransition + ") translateY(" + yTransition + ")";
          }
          else {
            this.UpdateTransformRule(sectionHover, sectionHoverData);
          }
          this.nextPosition = sectionHoverData;
      }
    },
    TransitionEndSection(e) {
      e.currentTarget.setAttribute("data-in-transition", "false");
    },
    AddNewDiv(parentSection, children) {
      let parentDiv = document.getElementById(parentSection.id);
      for (let i = 0; i < children.length; ++i) {
          let newDiv = document.createElement("div");
          newDiv.id = children[i].id;
          newDiv.setAttribute("name", children[i].name);
          parentDiv.appendChild(newDiv);
          let newChildren = children[i].children;
          if (newChildren.length > 0) {
              this.AddNewDiv(children[i], newChildren);
          }
      }
      return;
    },
    ReloadSectionsDisplay() {

      let originalChildren = this.parentSection.children;
      let sectionsWithPositions = [];
      //Obtain displayed section id with positions
      for (let i = 0; i < this.allSectionsBeingDisplayed.length; ++i) {
          let rect = this.allSectionsBeingDisplayed[i].getBoundingClientRect();
          sectionsWithPositions.push({left: rect.left, top: rect.top, sectionId: this.allSectionsBeingDisplayed[i].getAttribute("data-section-id")});
      }

      let sortedSectionsWithPositions = [];
      while(sectionsWithPositions.length > 0) {
        let leftMinimumPosition = sectionsWithPositions[0].left;
        let topMinimumPosition = sectionsWithPositions[0].top;
        let index = 0;
        for (let i = 0; i < sectionsWithPositions.length; ++i) {
            if (sectionsWithPositions[i].top < topMinimumPosition) {
                topMinimumPosition = sectionsWithPositions[i].top;
                leftMinimumPosition = sectionsWithPositions[i].left;
                index = i;
            }
            else {
              if (Math.abs(sectionsWithPositions[i].top - topMinimumPosition) <= 10 && sectionsWithPositions[i].left < leftMinimumPosition) {
                leftMinimumPosition = sectionsWithPositions[i].left;
                index = i;
              }
            }
            
        }
        sortedSectionsWithPositions.push(sectionsWithPositions[index]);
        sectionsWithPositions.splice(index, 1);
      }

      let newChildrenToAdd = [];
      for (let i = 0; i < sortedSectionsWithPositions.length; ++i) {
          for (let j = 0; j < originalChildren.length; ++j) {
              if (sortedSectionsWithPositions[i].sectionId === originalChildren[j].id) {
                  newChildrenToAdd.push(this.$root.$data.getSectionById(sortedSectionsWithPositions[i].sectionId))
                  break;
              }
          }
      }
      this.parentSection.children = newChildrenToAdd;


      let parentDiv = document.getElementById(this.parentSection.id);
      while (parentDiv.firstChild) {
          parentDiv.removeChild(parentDiv.lastChild);
      }

      let newChildren = this.parentSection.children;
      for (let i = 0; i < newChildren.length; ++i) {
          let newDiv = document.createElement("div");
          newDiv.id = newChildren[i].id;
          newDiv.setAttribute("name", newChildren[i].name);
          parentDiv.appendChild(newDiv);
          let children = newChildren[i].children;
          if (children.length > 0) {
              this.AddNewDiv(newChildren[i], children);
          }
      }
      this.isDragging = false;
      this.sectionList = this.parentSection.children;
      for (let i = 0; i < this.allSectionsBeingDisplayed.length; ++i) {
        this.allSectionsBeingDisplayed[i].style = "";
      }
    },
    DeleteSection(sectionId) {
      let section = this.$root.$data.getSectionById(sectionId);
      //Delete in DOM
      let element = document.getElementById(sectionId);
      element.parentElement.removeChild(element);

      //Delete and update in sections
      let parentChildren = section.parent.children;
      for (let i = 0; i < parentChildren.length; ++i) {
        if(parentChildren[i].id === section.id) {
          parentChildren.splice(i, 1);
          this.sectionList = parentChildren;
          break;
        }
      }

    },
    EditName(sectionId) {
      this.$emit("TempSection", sectionId);
      this.$emit("NextModal", "editSectionName");
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

.grabbingCursor {
  cursor: grabbing;
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