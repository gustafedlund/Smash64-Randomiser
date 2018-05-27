

var app = new Vue
({
  el: '#app',
  data:
  {
    leftboxImg: "url('./img/SSBCaptain.png')",
    rightboxImg: "url('./img/SSBDonkey.png')",
    //Zzz data
    character: [
      Captain =
      {
        name: "Captain Falcon",
        img: "url('./img/SSBCaptain.png')",
      },
      Donkey =
      {
        name: "Donkey Kong",
        img: "url('./img/SSBDonkey.png')",

      },
      Fox =
      {
        name: "Fox",
        img: "url('./img/SSBFox.png')",
      },
      Kirby =
      {
        name: "Kirby",
        img: "url('./img/SSBKirby.png')",
      },
      Link =
      {
        name: "Link",
        img: "url('./img/SSBLink.png')",
      },
      Luigi =
      {
        name: "Luigi",
        img: "url('./img/SSBLuigi.png')",
      },
      Mario =
      {
        name: "Mario",
        img: "url('./img/SSBMario.png')",
      },
      Ness =
      {
        name: "Ness",
        img: "url('./img/SSBNess.png')",
      },
      Pikachu =
      {
        name: "Pikachu",
        img: "url('./img/SSBPikachu.png')",
      },
      Jigglypuff =
      {
        name: "Jigglypuff",
        img: "url('./img/SSBPurin.png')",
      },
      Samus =
      {
        name: "Samus",
        img: "url('./img/SSBSamus.png')",
      },
      Yoshi =
      {
        name: "Yoshi",
        img: "url('./img/SSBYoshi.png')",
      },
    ],

  },
  methods:
  {
    scramble: async function()
    {
      let loops = 0;
      let ms = 75;
      var shuffleArray = function(array)
      {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--)
        {
          j = Math.floor(Math.random() * (i + 1));
          x = array[i];
          array[i] = array[j];
          array[j] = x;
        }
      }
      let pause = function(ms) //A lil pause fx() via async/await (ms = pause time)
      {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      shuffleArray(app.character);
      do //Do this loop while loops are less than...
        for (var i = 0; i < this.character.length; i++, loops++)
        {
          await pause(ms);
          this.leftboxImg = this.character[i].img;
          ms *= 1.025;
        }
      while (loops < 30);
    },
  },
})
