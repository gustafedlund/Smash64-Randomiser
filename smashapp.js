

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
    scramble: function()
    {
      //this.leftboxImg = this.character[0].img;
    },
  },
})
