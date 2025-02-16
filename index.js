// === State ===
//What do we want in our State
//-> What will a user be able to change?
//-> What might be different for different users?
let bank = [];
const evens = [];
const odds = [];

function addNumberToBank(number) {
  bank.push(number);
  render();
}

function Sort1() {
  if (bank.length > 0) {
    const number = bank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }

    render();
  }
}

function SortAll() {
  if (bank.length > 0) {
    for (i = 0; i <= bank.length; i = i + 1) {
      console.log(bank[i]);
      if (bank[i] % 2 === 0) {
        evens.push(bank[i]);
      } else {
        odds.push(bank[i]);
      }
    }
    bank = [];
    render();
  }
}

// === Component ===
// Every component should line up with some idea of state
function Bank() {
  const $bank = document.createElement("p");
  const $num = bank.join(", ");

  $bank.innerText = $num;

  return $bank;
}

function Odds() {
  const $odds = document.createElement("p");
  const $num = odds.join(", ");

  $odds.innerText = $num;

  return $odds;
}

function Evens() {
  const $evens = document.createElement("p");
  const $num = evens.join(", ");

  $evens.innerText = $num;

  return $evens;
}

function NumberForm() {
  const $numberForm = document.createElement("form");
  $numberForm.innerHTML = `
    <label>
     Add a number to the bank
     <input name="userNumber" type="number"/>
   </label>
   <button>Add number</button>
   `;

  $numberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData($numberForm);
    const userInput = formData.get("userNumber");
    addNumberToBank(userInput);
  });

  return $numberForm;
}

function Sort1Form() {
  const $sort1Form = document.createElement("button");
  $sort1Form.innerText = "Sort 1";
  $sort1Form.disabled = bank.length === 0;
  $sort1Form.addEventListener("click", (event) => {
    Sort1();
  });

  return $sort1Form;
}

function SortAllForm() {
  const $sortAllForm = document.createElement("button");
  $sortAllForm.innerText = "Sort All";
  $sortAllForm.disabled = bank.length === 0;
  $sortAllForm.addEventListener("click", (event) => {
    SortAll();
  });

  return $sortAllForm;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
     <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <Sort_1></Sort_1>
    <SortAll></SortAll>
    <h2>Bank</h2>
    <Bank></Bank>
    <h2>Odds</h2>
    <Odds></Odds>
    <h2>Evens</h2>
    <Evens></Evens>
    `;
  document.querySelector("NumberForm").replaceWith(NumberForm());
  document.querySelector("Sort_1").replaceWith(Sort1Form());
  document.querySelector("SortAll").replaceWith(SortAllForm());
  document.querySelector("Bank").replaceWith(Bank());
  document.querySelector("Odds").replaceWith(Odds());
  document.querySelector("Evens").replaceWith(Evens());
}

render();
