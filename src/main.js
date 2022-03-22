import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let styleElement = document.createElement('style');
document.head.appendChild(styleElement);


let data = {
  title: "",
  sections: [],
  sectionIdNumber: 0,
  styleSheet: styleElement.sheet,
  getRuleList() {
    return this.styleSheet;
  },
  NewSection(name = "", id = "", parent = null, children = []) {
    let newSection = new Object();
    newSection.name = name;
    newSection.id = id;
    newSection.parent = parent;
    newSection.children = children;
    return newSection;
  },
  GetSections() {
    return this.sections;
  },
  IncrementSectionId() {
    this.sectionIdNumber += 1;
  },
  getSectionByIdRecursive(section, id) {
    if (id === section.id) {
      return section;
    }
    let children = section.children;
    for (let i = 0; i < children.length; ++i) {
        let tempSection = this.getSectionByIdRecursive(children[i], id);
        if (tempSection !== "" && id === tempSection.id) {
            return tempSection;
        }
    }
    return "";
  },
  getSectionById(id) {
    for (let i = 0; i < this.sections.length; ++i) {
        if (id === this.sections[i].id) {
            return this.sections[i];
        }
        let children = this.sections[i].children;
        for (let i = 0; i < children.length; ++i) {
            let section = this.getSectionByIdRecursive(children[i], id);
            if (section !== "" && id === section.id) {
                return section;
            }
        }
        
    }
    return "";
  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
