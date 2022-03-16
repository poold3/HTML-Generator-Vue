<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid">
              <router-link class="navbar-brand" to="/"><img id="navbar-logo" v-bind:style="transformStyle" src="../public/favicon/favicon-32x32.png"></router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"><div class="menuIcon"><div class="iconLine"></div><div class="iconLine"></div><div class="iconLine"></div></div></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                          <router-link @mouseenter.native="RotateNavBarIcon('rotateX(180deg)')" @mouseleave.native="RotateNavBarIcon('')" class="nav-link" id="home-nav-link" to="/">Home</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link @mouseenter.native="RotateNavBarIcon('rotateY(180deg)')" @mouseleave.native="RotateNavBarIcon('')" class="nav-link" id="create-nav-link" to="/create">href=&#34;create.html&#34;</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link @mouseenter.native="RotateNavBarIcon('rotateZ(180deg)')" @mouseleave.native="RotateNavBarIcon('')" class="nav-link" id="about-nav-link" to="/contact">Contact</router-link>
                      </li>
                  </ul>
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <router-link @mouseenter.native="RotateNavBarIcon('rotateX(-180deg)')" @mouseleave.native="RotateNavBarIcon('')" class="nav-link" id="login-nav-link" to="/login">href=&#34;login.html&#34;</router-link>
                      </li>
                  </ul>
              </div>
          </div>
          
      </nav>
    </header>
    <router-view id="content" class="content"/>
    <footer>
      <p><a href="https://github.com/poold3/HTML-Generator-Vue" class="footerLink">Source</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NavBarScript',
  data () {
    return {
      transformStyle: {
        transform: '',
      }
    }
  },
  created () {
    this.$root.$data.IncrementSectionId();
    let sectionId = "section" + this.$root.$data.sectionIdNumber;
    let newBodySection = this.$root.$data.NewSection("body", sectionId);
    this.$root.$data.sections.push(newBodySection);
  },
  methods: {
    RotateNavBarIcon(value) {
      this.transformStyle.transform = value;
    },
  },
}

</script>


<style scoped>
#app {
    display: flex;
    flex-direction: column;
    background-color: white;
}

header {
    flex: 0 0 12vh;
}

.content {
    flex: 0 0 83vh;
    text-align: center;
    color: #048ABF;
}

* {
    font-family:Georgia, 'Times New Roman', Times, serif;
}

.navbar {
    background-color: #037F8C;
}

.nav-link {
    color: #F2F2F2;
}

.menuIcon {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.iconLine {
    width: 90%;
    height: 3px;
    background-color: #F2F2F2;
    margin-bottom: 4px;
}

.navbar-brand {
    transition-duration: 0.5s;
}

.navbar-brand:hover {
    transform: rotateZ(180deg);
}

#navbar-logo {
  transition: transform 0.3s;
}

footer {
    width: 100%;
    flex: 0 0 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #037F8C;
    color: #F2F2F2;
}

.footerLink {
    color: #F2F2F2;
}
</style>
