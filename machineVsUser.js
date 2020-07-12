/*
    By:  Jose Munguia
    josemunguia.com
    jose02703@gmail.com
    Please reach for any error in the code or any cool 
    feature that can be added
*/

var data = [
  {
    "name": "New Jersey",
    "code": "nj"
  },
  {
    "name": "Rhode Island",
    "code": "ri"
  },
  {
    "name": "Massachussets",
    "code": "ma"
  },
  {
    "name": "Connecticut",
    "code": "ct"
  },

  {
    "name": "New York",
    "code": "ny"
  },
  {
    "name": "Maryland",
    "code": "md"
  },
  {
    "name": "Delaware",
    "code": "de"
  },
  {
    "name": "Florida",
    "code": "fl"
  },
  {
    "name": "Ohio",
    "code": "oh"
  },
  {
    "name": "Pennsylvania",
    "code": "pa"
  },
  {
    "name": "Illinois",
    "code": "il"
  },
  {
    "name": "California",
    "code": "ca"
  },
  {
    "name": "Hawaii",
    "code": "hi"
  },
  {
    "name": "Virginia",
    "code": "va"
  },
  {
    "name": "Michigan",
    "code": "mi"
  },
  {
    "name": "Indiana",
    "code": "in"
  },
  {
    "name": "North Carolina",
    "code": "nc"
  },
  {
    "name": "Georgia",
    "code": "ga"
  },
  {
    "name": "Tennessee",
    "code": "tn"
  },
  {
    "name": "New Hampshire",
    "code": "nh"
  },
  {
    "name": "South Carolina",
    "code": "sc"
  },
  {
    "name": "Louisiana",
    "code": "la"
  },
  {
    "name": "Kentucky",
    "code": "ky"
  },
  {
    "name": "Wisconsin",
    "code": "wi"
  },
  {
    "name": "Washington",
    "code": "wa"
  },
  {
    "name": "Alabana",
    "code": "al"
  },
  {
    "name": "Missouri",
    "code": "mo"
  },
  {
    "name": "Texas",
    "code": "tx"
  },
  {
    "name": "West Virginia",
    "code": "wv"
  },
  {
    "name": "Vermont",
    "code": "vt"
  },
  {
    "name": "Minnesota",
    "code": "mn"
  },
  {
    "name": "Mississippi",
    "code": "ms"
  },
  {
    "name": "Iowa",
    "code": "ia"
  },
  {
    "name": "Arizona",
    "code": "ar"
  },
  {
    "name": "Oklahoma",
    "code": "ok"
  },
  {
    "name": "Arizona",
    "code": "az"
  },
  {
    "name": "Colorado",
    "code": "co"
  },
  {
    "name": "Maine",
    "code": "me"
  },
  {
    "name": "Oregon",
    "code": "or"
  },
  {
    "name": "Kansas",
    "code": "ks"
  },
  {
    "name": "Utah",
    "code": "ut"
  },
  {
    "name": "Nebraska",
    "code": "ne"
  },
  {
    "name": "Nevada",
    "code": "nv"
  },
  {
    "name": "Idaho",
    "code": "id"
  },
  {
    "name": "New Mexico",
    "code": "nm"
  },
  {
    "name": "Mississippi",
    "code": "sd"
  },
  {
    "name": "South Dakota",
    "code": "nd"
  },
  {
    "name": "Montana",
    "code": "mt"
  },
  {
    "name": "Wyoming",
    "code": "wy"
  },
  {
    "name": "Arkansas",
    "code": "ak"
  }
];

  $.each(data, function () {
    this.code = this.code.toUpperCase();
  
  });
 
  Highcharts.mapChart('container', {
      chart: {
      map: 'countries/us/us-all',
      borderWidth: 1
    },
    title: {
      text: ''
    },
    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },
    mapNavigation: {
      enabled: true
    },
    series: [{
      allowPointSelect:true,
      animation: true,
      data: data,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: false,
        color: '#FFFFFF',
      },
      states:{
          hover:{
            color: '#a4edba',
            borderColor: 'black'
          },
          select: {
            color: 'grey'
          }
      },
      events: {
       click:function(event){
         handleUserSelection(event.point.name); 
        },
      },
      name: 'Selected State',
      tooltip: {
        //pointFormat: '{point.code}: {point.name}'
        pointFormat: '?'
      }
    }]
  });

var userTrials = 0;
newState();
var guessState;

function setGuessesMessageToEmptyString() {
    document.getElementById("message").innerHTML=" ";
    document.getElementById("horizontalStripe").style.background="grey";
}

function successMessage() {
    document.getElementById("message").innerHTML=" "; 
}

function failMessage() {
    document.getElementById("failMessage").innerHTML=" ";
}

function newState() {
    guessState= stateToBeGuess(); 
    document.getElementById("stateToGuess").innerHTML= guessState; 
}

function handleUserSelection(stateSelected) {
    var userTrials = 2;
    if (userTrials <= userTrials) {
          if (stateSelected == guessState) {
              document.getElementById("horizontalStripe").style.background="green";
              document.getElementById("message").innerHTML="YOU GUESSED IT!";
              setTimeout(setGuessesMessageToEmptyString, 2000);
              setTimeout(newState, 1000);
        
          } 
          else {
                document.getElementById("horizontalStripe").style.background="RED";
                document.getElementById("message").innerHTML="TRY AGAIN!";
                setTimeout( setGuessesMessageToEmptyString, 2000);
                userTrials+=1;
          }
    }
    
    var maxNumberOfTrials = 3;
    if (userTrials === maxNumberOfTrials) {
        setTimeout(newState, 1500);
        userTrials = 0; 
      }
}

function stateToBeGuess() {
    var maxNum = 50; 
    var randomState = Math.floor(Math.random() * Math.floor(maxNum)); 
    var stateToBeGuessed = data[randomState].name;  

    return stateToBeGuessed; 
}

document.getElementById("reset").addEventListener("click", function() { 
    newState();
})




