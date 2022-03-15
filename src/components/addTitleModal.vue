<template>
<div>
  <h3>Let's get started!</h3>
  <p>Give your website a title:</p>
  <p><span id="generateRandomTitle" @click="ImplementRandomTitle">Need Inspiration?</span></p>
  <form action="" name="titleForm">
      <input id="newWebsiteTitle" class="input-text-new" name="title" type="text" placeholder="Website Title" :value="formTitle" required>
      <br>
      <button id="submitTitle" class="submitButton" @click.prevent="Begin">Begin</button>
  </form>
  <p>Aleady started? Log in <router-link to="/login">here</router-link>!</p>
</div>
</template>

<script>
export default {
  name: 'addTitleModal',
  data() {
    return {
      formTitle: '',
      randomTitle: '',
      generatingTitle: false,
      sampleWebTitles: ["I Put My Foot Down", "Impersonating a Flamingo", "A Therapist's Revenge", "Two Fish in a Tank", "How Do I Drive?", "Chicken Tendies", "An Emotional Wedding", "Don't Spill the Beans", "Geology Rocks!", "Your Local Dealer", "Roasting: A Guide", "Stay Away From Me", "Be My Friend", "Larping 101", "Quidditch 101", "We Scare Because We Care", "Look Behind You", "Sir Cumference", "7 Ate 9", "Onde Estou?", "Where's Waldo", "Ryan Started the Fire", "Get Out of Jail Free", "The Boogie Woogie", "Polar Plunge", "Blue Tomatoes", "You Can't Find Me", "Magical Beasts", "Faulty Lines", "Cup Of Joe", "Curiosity Killed The Cat", "Busy Bee", "Keep On Truckin", "Oafish Body", "A Lone Wolf", "Faulty Data", "A Shocking Decision", "Smell a Rat?", "Give a Man a Fish", "Overrated News", "Fuzzy Clothes", "Like Father Like None", "Below The Belt", "Wake Up Call", "Old-Fashioned Psychology", "Supreme Soup", "A Repulsive Virus", "Where's Bigfoot", "Adaptable Potatoes"],
    }
  },
  created() {
    this.MakeNonApiTitle();
    this.GenerateRandomTitle();
  },
  methods: {
    MakeNonApiTitle () {
      let randomIndex = Math.floor(Math.random() * this.sampleWebTitles.length);
      this.formTitle = this.sampleWebTitles[randomIndex];
    },
    GenerateRandomTitle () {
      let vm = this;
      if (this.generatingTitle === true) {
        return;
      }
      let randomBook = Math.floor(Math.random() * 1000);
      // setup URL
      let url = "https://reststop.randomhouse.com/resources/works/?start=" + randomBook + "&max=1&expandLevel=1&search=a";
      // call API
      fetch(url) 
        .then(response => response.text())
        .then(function(data) {
            //console.log(data);
            //We need to pull out the book title between the <titleweb></titleweb> tags
            try {
                let firstPosition = data.search("<titleweb>");
                let secondPosition = data.indexOf("</titleweb>", firstPosition + 10);
                if (firstPosition !== -1 && secondPosition !== -1) {
                    let title = data.substring(firstPosition + 10, secondPosition);
                    vm.randomTitle = title;
                    vm.generatingTitle = false;
                }
                else {
                    throw "Title not found";
                }
            }
            catch(err) {
                console.log(err);
                vm.generatingTitle = false;
            }
        })
        .catch(function(error) {
            console.log(error);
            vm.generatingTitle = false;
        });
      this.generatingTitle = true;
    },
    ImplementRandomTitle() {
      if (this.randomTitle !== "") {
          this.formTitle = this.randomTitle;
          this.randomTitle = "";
          this.GenerateRandomTitle();
      }
      else {
          this.MakeNonApiTitle();
      }
    },
    Begin() {
      this.$root.$data.title = this.formTitle;
      this.$emit("NextModal", "");
    }
  }
}
</script>

<style scoped>
#generateRandomTitle {
    cursor: pointer;
}

.input-text-new {
    width: 80%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
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
</style>