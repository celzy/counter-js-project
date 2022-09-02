var drawCounter = function () {
    document.getElementById('counter').innerHTML = store.counter
}

var bindEvents = function () {
  document.getElementById('increase').addEventListener('click', function () {
    increase()
    drawCounter()
  })

  document.getElementById('decrease').addEventListener('click', function () {
    decrease()
    drawCounter()
  })
}

var store = {
    counter: 0
}

var increase = function () {
    store.counter++
    console.log(store)
}

var decrease = function () {
  store.counter--
}

var init = function (){
    bindEvents();
    drawCounter();
}

init();