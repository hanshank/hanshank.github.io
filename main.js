document.addEventListener("DOMContentLoaded", function(){
  const goodChoice = document.querySelectorAll('.goodChoice');
  const badChoice = document.querySelectorAll('.bad-choice');
  const celebration = document.querySelector('.celebration');
  const boohoo = document.querySelector('.boohoo');


  for (var i = 0; i < badChoice.length; i++) {
      badChoice[i].addEventListener('click', function(event) {
        event.preventDefault(),
        toggleBoohoo()
      });
  }

  for (var i = 0; i < goodChoice.length; i++) {
      goodChoice[i].addEventListener('click', function(event) {
        event.preventDefault(),
        toggleCelebration()
      });
  }

  const toggleBoohoo = () => {
    boohoo.classList.toggle('hide');
  }

  const toggleCelebration = () => {
    celebration.classList.toggle('hide');
  }

});
