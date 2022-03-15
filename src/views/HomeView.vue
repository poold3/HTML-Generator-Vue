<template>
    <div>
      <div class="row" id="headerRow">
        <div class="row" id="subheaderRow">
            <div class="block block-column-centered">
                <img v-bind:style="transformStyle" src="../../public/favicon/android-chrome-192x192.png" id="logoHeader">
            </div>
            <div class="block block-column-centered">
                <p class="blockTitle">&#60;h1&#62;HTML Generator&#60;&#47;h1&#62;</p>
                <p class="blockText" id="Test">Head to the "Create" page to begin!</p>
                <div class="headerButtons">
                    <router-link @mouseenter.native="RotateHomeViewIcon('scale(1.2) rotateY(-180deg)')" @mouseleave.native="RotateHomeViewIcon('')" to="/create" target="_self"><button class="headerButton" id="createButton" type="button">Create</button></router-link>
                    <router-link @mouseenter.native="RotateHomeViewIcon('scale(1.2) rotateX(-180deg)')" @mouseleave.native="RotateHomeViewIcon('')" to="/login" target="_self"><button class="headerButton" id="loginButton" type="button">Login</button></router-link>
                </div>
                
            </div>
        </div>
        <button type="button" id="scrollDownButton" :class="[{opaque: ScrolledDown}]" @click="ScrollToRow">Scroll</button>
    </div>
      <div class="row" id="rowHTML">
          <div id="htmlDemo" class="block coverImage">
              
          </div>
          <div class="block block-column-centered">
              <p class="blockTitle">&#60;h1&#62;HTML&#60;&#47;h1&#62;</p>
              <p class="blockText">Generate HTML with ease!</p>
          </div>
      </div>
      <div class="row">
          <div id="cssDemo" class="block coverImage">

          </div>
          <div class="block block-column-centered">
              <p class="blockTitle">CSS</p>
              <p class="blockText">&#60;p&#62;Style your website however you want!&#60;&#47;p&#62;</p>
          </div>
      </div>
      <div class="row">
          <div id="jsDemo" class="block coverImage">

          </div>
          <div class="block block-column-centered">
              <p class="blockTitle">&#60;h1&#62;JS&#60;&#47;h1&#62;</p>
              <p class="blockText">Implement custom transitions! Ensure your website stands out from the crowd.</p>
          </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      transformStyle: {
        transform: '',
      },
      ScrolledDown: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.TrackScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.TrackScroll);
  },
  methods: {
    RotateHomeViewIcon(value) {
      this.transformStyle.transform = value;
    },
    ScrollToRow() {
      let row = document.getElementById("rowHTML");
      row.scrollIntoView({behavior: "smooth", block: "start"});
    },
    TrackScroll() {
      let scrollAmount = window.scrollY;
      if (scrollAmount >= 300) {
        this.ScrolledDown = true;
      }
      else {
        this.ScrolledDown = false;
      }
    }
  },
}
</script>

<style scoped>
.row {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.block {
    height: auto;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    color: #048ABF;
}

.coverImage {
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

#headerRow {
    height: 85vh;
}

.headerButtons {
    width: 100%;
    height: auto;
}

.headerButton {
    background-color: #048ABF;
    border-radius: 5px;
    color: #F2F2F2;
    width: 100px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
}

#createButton:hover{
    transform: scale(1.05);
}

#loginButton:hover{
    transform: scale(1.05);
}
@media only screen and (min-width: 1201px) {
    .row {
        justify-content: space-around;
        flex-direction: row;
    }
    #headerRow {
        flex-direction: column;
    }
    #subheaderRow {
        justify-content: center;
        align-items: center;
    }
    .block {
        width: 30%;
    }
    .coverImage {
        height: 450px;
    }
}

@media only screen and (min-width: 901px) and (max-width: 1200px) {
    .row {
        justify-content: space-around;
        flex-direction: row;
    }
    #headerRow {
        flex-direction: column;
    }
    #subheaderRow {
        justify-content: center;
        align-items: center;
    }
    .block {
        width: 45%;
    }
    .coverImage {
        height: 450px;
    }
}

@media only screen and (max-width: 900px) {
    .row {
        justify-content: center;
        flex-direction: column;
    }
    .block {
        width: 90%;
    }
    .coverImage {
        height: 250px;
    }
}

.block-column-centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.block-row-centered {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.blockTitle {
    font-weight: bolder;
    font-size: 40px;
}

.blockText {
    font-weight: bold;
    font-size: 20px;
}

#logoHeader {
    transition-duration: 0.5s;
}

#logoHeader:hover {
    transform: scale(1.2) rotateZ(180deg);
}

#scrollDownButton {
    transition-duration: 0.5s;
    max-width: 100px;
    height: auto;
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #048ABF;
    color: #048ABF;
    border-radius: 5px;
    background-color: white;
    outline: none;
}

#scrollDownButton:hover, #scrollButton:focus {
    transform: scale(1.05);
    outline: none;
}

#htmlDemo {
  background-image: url("../../public/Images/html-demo.png");
}

#cssDemo {
  background-image: url("../../public/Images/css-demo.png");
}

#jsDemo {
  background-image: url("../../public/Images/js-demo.png");
}

.opaque {
  opacity: 0.0;
}

</style>