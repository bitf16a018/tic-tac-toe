let count = 1;
let won = false;

const addHoverEffect = () => {
  let a = document.getElementById('rstrt');
  a.classList.add('edge-shadow');
};

const addHoverEffectPlayer1 = () => {
  let a = document.getElementsByClassName('player1');
  for (let i = 0; i < a.length; i++) {
    a[i].classList.add('bottom-edge');
  }
};

const addHoverEffectPlayer2 = () => {
  let a = document.getElementsByClassName('player2');
  for (let i = 0; i < a.length; i++) {
    a[i].classList.add('bottom-edge');
  }
};
const removeHoverEffectPlayer1 = () => {
  let a = document.getElementsByClassName('player1');
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove('bottom-edge');
  }
};

const removeHoverEffectPlayer2 = () => {
  let a = document.getElementsByClassName('player2');
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove('bottom-edge');
  }
};

const removeHoverEffect = () => {
  let a = document.getElementById('rstrt');
  a.classList.remove('edge-shadow');
};

const reset = () => {
  let a = document.getElementsByClassName('size');
  for (let i = 0; i < a.length; i++) {
    removeClass(a[i].id, 'O');
    removeClass(a[i].id, 'X');
    removeClass(a[i].id, 'disabled');
    a[i].innerHTML = '';
    player1Turn();
    addHoverEffectPlayer1();
    removeHoverEffectPlayer2();
  }
  count = 1;
  won = false;
};

const checkGameStatus = (id) => {
  if (count == 10 && !won) {
    alert('draw. please restart the game');
    return;
  }
  if (
    (hasClass('one', 'O') && hasClass('two', 'O') && hasClass('three', 'O')) ||
    (hasClass('four', 'O') && hasClass('five', 'O') && hasClass('six', 'O')) ||
    (hasClass('seven', 'O') &&
      hasClass('eight', 'O') &&
      hasClass('nine', 'O')) ||
    (hasClass('one', 'O') && hasClass('four', 'O') && hasClass('seven', 'O')) ||
    (hasClass('two', 'O') && hasClass('five', 'O') && hasClass('eight', 'O')) ||
    (hasClass('three', 'O') && hasClass('six', 'O') && hasClass('nine', 'O')) ||
    (hasClass('one', 'O') && hasClass('five', 'O') && hasClass('nine', 'O')) ||
    (hasClass('three', 'O') && hasClass('five', 'O') && hasClass('seven', 'O'))
  ) {
    alert('⚫ wins. please restart the game');
    won = true;
  } else if (
    (hasClass('one', 'X') && hasClass('two', 'X') && hasClass('three', 'X')) ||
    (hasClass('four', 'X') && hasClass('five', 'X') && hasClass('six', 'X')) ||
    (hasClass('seven', 'X') &&
      hasClass('eight', 'X') &&
      hasClass('nine', 'X')) ||
    (hasClass('one', 'X') && hasClass('four', 'X') && hasClass('seven', 'X')) ||
    (hasClass('two', 'X') && hasClass('five', 'X') && hasClass('eight', 'X')) ||
    (hasClass('three', 'X') && hasClass('six', 'X') && hasClass('nine', 'X')) ||
    (hasClass('one', 'X') && hasClass('five', 'X') && hasClass('nine', 'X')) ||
    (hasClass('three', 'X') && hasClass('five', 'X') && hasClass('seven', 'X'))
  ) {
    alert('✔ wins. please restart the game');
    won = true;
  } else if (hasClass(id, 'disabled')) {
    alert('already selected. please select any another one.');
    return;
  } else if (count % 2 == 1) {
    document.getElementById(id).innerHTML = '⚫';
    addClass(id, 'O disabled');

    if (
      (hasClass('one', 'O') &&
        hasClass('two', 'O') &&
        hasClass('three', 'O')) ||
      (hasClass('four', 'O') &&
        hasClass('five', 'O') &&
        hasClass('six', 'O')) ||
      (hasClass('seven', 'O') &&
        hasClass('eight', 'O') &&
        hasClass('nine', 'O')) ||
      (hasClass('one', 'O') &&
        hasClass('four', 'O') &&
        hasClass('seven', 'O')) ||
      (hasClass('two', 'O') &&
        hasClass('five', 'O') &&
        hasClass('eight', 'O')) ||
      (hasClass('three', 'O') &&
        hasClass('six', 'O') &&
        hasClass('nine', 'O')) ||
      (hasClass('one', 'O') &&
        hasClass('five', 'O') &&
        hasClass('nine', 'O')) ||
      (hasClass('three', 'O') &&
        hasClass('five', 'O') &&
        hasClass('seven', 'O'))
    ) {
      player1Win();
      document.getElementById('oScore').value =
        parseInt(document.getElementById('oScore').value) + 1;
      won = true;
      alert('⚫ wins');
    } else {
      addHoverEffectPlayer2();
      removeHoverEffectPlayer1();
      player2Turn();
    }
    count++;
  } else {
    document.getElementById(id).innerHTML = '✔';
    addClass(id, 'X disabled');

    if (
      (hasClass('one', 'X') &&
        hasClass('two', 'X') &&
        hasClass('three', 'X')) ||
      (hasClass('four', 'X') &&
        hasClass('five', 'X') &&
        hasClass('six', 'X')) ||
      (hasClass('seven', 'X') &&
        hasClass('eight', 'X') &&
        hasClass('nine', 'X')) ||
      (hasClass('one', 'X') &&
        hasClass('four', 'X') &&
        hasClass('seven', 'X')) ||
      (hasClass('two', 'X') &&
        hasClass('five', 'X') &&
        hasClass('eight', 'X')) ||
      (hasClass('three', 'X') &&
        hasClass('six', 'X') &&
        hasClass('nine', 'X')) ||
      (hasClass('one', 'X') &&
        hasClass('five', 'X') &&
        hasClass('nine', 'X')) ||
      (hasClass('three', 'X') &&
        hasClass('five', 'X') &&
        hasClass('seven', 'X'))
    ) {
      player2Win();
      document.getElementById('xScore').value =
        parseInt(document.getElementById('xScore').value) + 1;
      won = true;
      alert('✔ wins');
    } else {
      addHoverEffectPlayer1();
      removeHoverEffectPlayer2();
      player1Turn();
    }
    count++;
  }
  if (count == 10 && !won) {
    document.getElementById(id).innerHTML = '⚫';
    addClass(id, 'O disabled');
    document.getElementById(id).classList.add('size');
    draw();
    alert('draw.');
  }
};

const hasClass = (id, className) => {
  className = ' ' + className + ' ';
  if (
    (' ' + document.getElementById(id).className + ' ')
      .replace(/[\n\t]/g, ' ')
      .indexOf(className) > -1
  ) {
    return true;
  }
  return false;
};

const addClass = (id, className) => {
  document.getElementById(id).className =
    document.getElementById(id).className + ' ' + className;
};

const removeClass = (id, className) => {
  document.getElementById(id).className = document
    .getElementById(id)
    .className.replace(className, '');
};

const toggleClass = (id, className) => {
  if (hasClass(id, className)) {
    removeClass(id, className);
  } else {
    addClass(id, className);
  }
};
const player1Turn = () => {
  document.getElementById('status').value = '⚫ turn';
};

const player2Turn = () => {
  document.getElementById('status').value = '✔ turn';
};

const player1Win = () => {
  document.getElementById('status').value = '⚫ wins';
};

const player2Win = () => {
  document.getElementById('status').value = '✔ wins';
};

const draw = () => {
  document.getElementById('status').value = '⚫ ✔ draw';
};
