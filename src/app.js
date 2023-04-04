window.onload = function() {
  //write your code here
  document.querySelector(".card").innerHTML = randNumbers();
  document.querySelector(".card").classList.add(randSuits());
};

const randNumbers = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let number = Math.floor(Math.random() * numbers.length);
  console.log(numbers[number]);
  return numbers[number];
};

const randSuits = () => {
  let suits = ["club", "heart", "spade", "diamonds"];
  let suit = Math.floor(Math.random() * suits.length);
  console.log(suits[suit]);
  return suits[suit];
};
