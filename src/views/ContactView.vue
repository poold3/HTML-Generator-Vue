<template>
  <div>
      <div class="row">
          <div class="block block-text">
          <p class="blockTitle">&#60;h1&#62;Contact&#60;&#47;h1&#62;</p>
          <p class="blockText">We welcome your suggestions!</p>
          <p class="blockText">href=&#34;mailto: <a href="mailto: LoremIpsum@gmail.com">LoremIpsum@gmail.com</a>&#34;</p>
      </div>
      </div>
  </div>
</template>

<style scoped>
.row {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.block {
    display: block;
    height: 450px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    color: #048ABF;
}

@media only screen and (min-width: 901px) {
    .row {
        justify-content: space-around;
        flex-direction: row;
    }
    .block {
        width: 45%;
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
}

.block-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

</style>