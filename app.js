
let heroData = [
  {name:"The Foot" , number:"7035554444" , affiliation:"Marvel" },
  {name:"The Amazing Bigtoe" , number:"2354593056" , affiliation:"D.C" },
  {name: "The Unbreakable Pelvis" , number:"8439573859" , affiliation:"Marvel"},
  {name: "Mr.Steve" , number:"4563568445" , affiliation:"D.C", image: "https://github.com/hannahhoward/angular-starter-wdi/blob/master/img/batman.jpg?raw=true"  }
]


angular.module("heroApp", [])


angular
  .module("heroApp", [])
  .controller("HeroController", [
    HeroControllerFunction
  ])

  function HeroControllerFunction (){
      this.hero = heroData
  }
