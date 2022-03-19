<template>
<div>
    <addTitleModal class="modal-content" @NextModal="LoadNewModal" v-show="currentModal === 'addTitle'"/>
    <displaySectionsModal class="modal-content" @NextModal="LoadNewModal" @ParentSectionId="SetTempSectionId" @TempSection="SetTempSectionId" v-show="currentModal === 'displaySections'"/>
    <addSectionModal class="modal-content" @NextModal="LoadNewModal" v-show="currentModal === 'addSection'" :parentSectionId="tempSectionId"/>
    <editSectionNameModal class="modal-content" @NextModal="LoadNewModal" v-show="currentModal === 'editSectionName'" :sectionId="tempSectionId"/>
    <!--
    <addRulesModal/>
    <addTextModal/>
    <addImageModal/> -->
</div>
</template>

<script>
import addTitleModal from "./addTitleModal.vue"
import addSectionModal from "./addSectionModal.vue"
import editSectionNameModal from "./editSectionNameModal.vue"
// import addRulesModal from "./addRulesModal.vue"
import displaySectionsModal from "./displaySectionsModal.vue"
// import addTextModal from "./addTextModal.vue"
// import addImageModal from "./addImageModal.vue"
export default {
  name: 'ModalComponent',
  props: {
      currentModal: String,
  },
  data () {
      return {
          tempSectionId: '',
      }
  },
  components : {
    addTitleModal,
    addSectionModal,
    editSectionNameModal,
    // addRulesModal,
    displaySectionsModal,
    // addTextModal,
    // addImageModal,
  },
  methods: {
      LoadNewModal(value) {
          this.$emit("NextModal", value);
      },
      SetTempSectionId(sectionId) {
          this.tempSectionId = sectionId;
      },
  }
}
</script>

<style scoped>
@media only screen and (min-width: 901px) {
    .modal-content {
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
        padding: 10px;
        width: 70%;
        height: auto;
        overflow: auto;
    }
}

@media only screen and (max-width: 900px) {
    .modal-content {
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
        padding: 10px;
        width: 85%;
        height: auto;
    }
}
</style>