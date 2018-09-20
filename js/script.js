$(document).ready(function(){
  let counter = 0;
  let cubeFirst;
  let cubeSecond;
  let sum;
  let points = 0;

  function randomCube() {
    let rand = 1 + Math.random() * 6;
    rand = Math.floor(rand);
    return rand;
  }

  function resultGame(state){
    $('.game-result p').html(state)
    $('#start').val("Сыграть еще");
    sum = 0;
    counter = 0;
    points = 0;
  };

  function playMore(currentPoints){
    $('#start').val("Бросить кубики");
    $('.game-result p').html("Бросай еще раз, очков за первый бросок: " + currentPoints)
  }

  $('#start').on('click', function(){
    counter++;
    cubeFirst = randomCube();
    cubeSecond = randomCube();
    sum = cubeFirst + cubeSecond;
    if (counter == 1) {
      points = sum;
    }
    $('.cube1 p').html("На первом кубике: " + cubeFirst);
    $('.cube2 p').html("На втором кубике: " + cubeSecond);
    $('.sum p').html("В сумме: " + sum);
    if ((sum == 7 || sum == 11) && counter == 1) {
      resultGame("Вы выиграли, так как сумма равна " + sum + " !")
    } else if ((sum == 2 || sum == 3 || sum == 12) && counter == 1) {
      resultGame("Вы проиграли, так как сумма равна " + sum + " :(");
    } else if (counter == 1){
      playMore(points);
    }
    if (sum == points && counter > 1) {
      resultGame("Вы выиграли, так как сумма броска равна очкам за первый бросок!")
    } else if (sum == 7 && counter > 1) {
      resultGame("Вы проиграли, так как сумма равна " + sum + " :(")
    } else if (counter > 1){
      playMore(points);
    }
  });
})
