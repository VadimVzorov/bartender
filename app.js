/*

IP:
  questions:
    How strong would you like your drink?
    Do you want it to be salty?
    Would you like to add something bitter?
    May be somehting sweet?
    Some fruits?
      Answers like yes/no
OP:
  recepie:
    cocktail based on random collection of ingridients


create buttons with options
user chooses the options
onclick

*/

//state

//constructor functions for drinks
function CreateDrink(ingr, q){
  this.ingr = ingr; //array of ingridients
  this.q = q;
}


CreateDrink.prototype = {
  chooseIngr: function(ingr){
    var counter = state.ingridients[ingr].length - 1;
    var index = Math.floor(Math.random() * (counter - 0 + 1)) + 0;
    return state.answers.push(state.ingridients[ingr][index]);
  },
  createQ: function (element, q){ //creates buttons
    for (var name in q){$(element).append(
      '<button type="button" name="' + q[name] + '" class="q-button ' + q[name] + '" id="q-button" value="' + q[name] + '">'+ q[name] + '</button>'
    )}

  },
  pushRes: function (results, callback){
    console.log(results);
    state.answers.push(results);
    callback(results);
  }
}

var state = {
  ingridients: {
    strong:['a', 'b', 'c'],
    salty:['a', 'b', 'c'],
    bitter:['a', 'b', 'c'],
    sweet:['a', 'b', 'c'],
    fruity:['a', 'b', 'c']
  },
  answers: [],
  questions: {
    strong:'strong',
    salty:'salty',
    bitter:'bitter',
    sweet:'sweet',
    fruity:'fruity'
  }
}

//render



//listen

$(document).ready(function(){
  CreateDrink.prototype.createQ('#questions', state.questions);
  $('#questions').on('click', '#q-button', function(){
    var val = $(this).val();
    CreateDrink.prototype.chooseIngr(val);
    $(this).addClass('active');
  })
  $('#go').on('click', function(){
    console.log(state.answers);
  })
})
