<template>
  <div>
    <h3>Add a Rule!</h3>
    <img id="exitIcon" src="Images/exit-icon.png" @click="Close">
    <div class="container">
      <div class="containerElement left">
        <form>
          <label>Select a Rule:</label>
          <select id="selectRule" class="input-text-new" v-model="ruleId" type="text" placeholder="Choose a Rule" required>
            <option v-for="rule in rules" :key="rule.id" :value="rule.id">{{rule.name}}</option>
          </select>
          <div>
            <p><b>Description: </b>{{currentRule.description}}</p>
            <p><b>Examples: </b>{{currentRule.examples}}</p>
            <p><b>Tutorial: </b><a :href="currentRule.guide" target="_blank">{{currentRule.name}}</a></p>
          </div>
        </form>
      </div>
      <div class="containerElement center">
        <form>
          <label>Set the Rule:</label>
          <input class="input-text-new" v-model="ruleValueToSet" type="text" required>
          <button class="submitButton" @click.prevent="ApplyRule">Apply</button>
        </form>

      </div>
    </div>
    

  </div>
</template>

<script>
import rules from '../css-rules.js'
export default {
  name: 'addRulesModal',
  props: {
    sectionId: String,
  },
  data() {
    return {
      rules: rules,
      ruleId: 0,
      currentRule: {id: null, name: null, value: "", description: "", examples: "", guide: ""},
      ruleValueToSet: '',
    }
  },
  created() {
    this.$root.$data.styleSheet.insertRule("#section1 { }", 0);
    let ruleList = this.$root.$data.getRuleList();
    ruleList.cssRules[0].style["width"] = "100%";
    ruleList.cssRules[0].style["height"] = "100%";

  },
  watch: {
    ruleId: function(newId) {
      this.currentRule = this.rules[newId - 1];
    },
  },
  methods: {
    Close() {
      this.$emit("NextModal", "displaySections");
      this.ruleValueToSet = "";
    },
    ApplyRule() {
      let exists = false;
      let ruleList = this.$root.$data.getRuleList();
      console.log(ruleList.cssRules);
      for (let i = 0; i < ruleList.cssRules.length; ++i) {
          if (ruleList.cssRules[i].selectorText === "#" + this.sectionId) {
              console.log("Does exist");
              console.log(i);
              ruleList.cssRules[i].style[this.currentRule.value] = this.ruleValueToSet;
              exists = true;
              this.ruleValueToSet = "";
              break;
          }
      }
      if (exists === false) {
        console.log("Does not exist");
        this.$root.$data.styleSheet.insertRule("#" + this.sectionId + " { }", 0);
        this.ApplyRule();
      }
    },
  },
  
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .containerElement {
    width: 50%;
    height: 100%;
    padding: 5px;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }
</style>