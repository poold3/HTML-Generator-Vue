<template>
<div :class="{expandedToolBarContent: expanded}">
  <ModalComponent class="modal" @NextModal="LoadNewModal" v-show="modalToShow !== ''" :currentModal="modalToShow" />
  <div id="toolbar" :class="{expandedToolBar: expanded}">
    <p id="toolbarTitle" class="titleText">Tool Bar</p>
    <img id="expandToolbarIcon" src="Images/down-arrow-white.png" :style="expandIconStyle" @click="ExpandToolbar">
    <div id="toolItems" :style="expandToolItemsStyle">
        <div class="tool-item">
            <button id="sectionItem" class="toolBarHoverButton hoverButton centerButton tool-name" onclick="">Sections</button>
            <div id="sectionItem-Description" class="toolDescription">
                <p class="descriptionText">Organize the site into sections. Add style, transitions, and content to individual sections.</p>
            </div>
        </div>
        <div class="tool-item">
            <button id="sectionItem" class="toolBarHoverButton hoverButton centerButton tool-name" onclick="">Classes & Rules</button>
            <div id="sectionItem-Description" class="toolDescription">
                <p class="descriptionText">A class is a group of style rules. One class can be applied to multiple sections. Each section can have multiple classes.</p>
            </div>
        </div>
        <div class="tool-item">
            <button id="sectionItem" class="toolBarHoverButton hoverButton centerButton tool-name" onclick="">Download</button>
            <div id="sectionItem-Description" class="toolDescription">
                <p class="descriptionText">Download your site files.</p>
            </div>
        </div>
    </div>
  </div>
  <div id="siteDemo">
    <div id="section1" class="" name="body">

    </div>
  </div>
</div>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue"
export default {
  name: 'CreateView',
  components : {
    ModalComponent,
  },
  data() {
    return {
      modalToShow: '',
      expanded: false,
      expandIconStyle: {
          transform: '',
      },
      expandToolItemsStyle: {
          display: '',
      },
    }
  },
  created() {
    if (this.$root.$data.title === "") {
        this.modalToShow = "addTitle";
    }
  },
  destroyed() {
    this.modalToShow = "";
  },
  methods: {
      LoadNewModal (value) {
          this.modalToShow = value;
      },
      ExpandToolbar () {
            if (this.expanded === false) {
                this.expandIconStyle.transform = "rotateX(180deg)";
                this.expandToolItemsStyle.display = "flex";
                this.expanded = true;
            }
            else {
                this.expandIconStyle.transform = "";
                this.expandToolItemsStyle.display = "";
                this.expanded = false;
            }
      },
  }
}

</script>

<style scoped>

.content {
    position: relative;
    height: 83vh;
    text-align: center;
    color: #048ABF;
    display: grid;
}

@media only screen and (min-width: 901px) {
    .content {
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto;
        grid-column-gap: 0px;
        grid-row-gap: 15px;
        grid-template-areas: 
        "toolbar siteDemo";
    }
}

@media only screen and (max-width: 900px) {

    .content {
        grid-template-columns: 1fr;
        grid-template-rows: 100px auto;
        grid-column-gap: 0px;
        grid-row-gap: 15px;
        grid-template-areas: 
        "toolbar"
        "siteDemo";
        transition-duration: 0.5s;
    }
}

#toolbar {
    display: block;
    grid-area: toolbar;
    color: #F2F2F2;
    background-color: #048ABF;
    width: 100%;
    max-height: 83vh;
    transition-duration: 0.5s;
    overflow: auto;
}

#siteDemo {
    display: block;
    grid-area: siteDemo;
    width: 100%;
    max-height: 83vh;
    border-style: solid;
    border-width: 2px;
    border-color: #048ABF;
    color: black;
}

.modal {
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 25px;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.input-text-new {
    width: 80%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}

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

.submitButton {
    background-color: #037F8C;
    border-radius: 5px;
    color: #F2F2F2;
    width: auto;
    height: 60px;
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
}

.submitButton:hover {
    transform: scale(1.03);
}

.titleText {
    font-weight: bold;
    font-size: 20px;
}

.paragraphText {
    font-weight: bold;
    font-size: 15px;
}

.toolDescription {
    display: none;
    width: 80%;
    max-height: 300px;
    position: relative;
    top: 10px;
    background-color: #F2F2F2;
    color: #048ABF;
    border-radius: 5px;
    padding: 5px;
    z-index: 1;
    margin: 0 auto;
    margin-bottom: 10px;
}

.descriptionText {
    font-weight: bold;
    font-size: 15px;
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

.tool-name {
    cursor: pointer;
}

.tool-name:hover + .toolDescription {
    display: block;
}

#exitIcon {
    position: absolute;
    width: 30px;
    cursor: pointer;
    transition-duration: 0.1s;
}

#exitIcon:hover {
    /* transform: rotateZ(45deg); */
    transform: scale(1.1);
}

.inputFields {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 0px;
    grid-template-areas: 
    "inputOptions inputValues";
}

.inputOptions {
    grid-area: inputOptions;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: auto;
}

.inputValues {
    grid-area: inputValues;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: auto;
}

@media only screen and (min-width: 901px) {

    #toolItems {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 10px;
    }

    .tool-item {
        width: 100%;
        position: relative;
        margin-bottom: 10px;
    }

    #expandToolbar {
        display: none;
    }

    #expandToolbarIcon {
        display: none;
    }

}

@media only screen and (max-width: 900px) {

    .expandedToolBarContent {
        grid-template-rows: auto;
        grid-template-areas:
        "siteDemo";
    }

    #toolItems {
        display: none;
        justify-content: left;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 10px;
    }

    .expandedToolBar {
        height: 70vh;
        position: absolute;
        z-index: 1;
    }

    .tool-item {
        width: 90%;
        margin: 10px;
        position: relative;
    }

    #expandToolbarIcon {
        display: block;
        cursor: pointer;
        transition-duration: 0.3s;
        margin: 0 auto;
    }

}

.disable-select {
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

</style>