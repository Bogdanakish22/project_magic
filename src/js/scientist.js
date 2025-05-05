const scientists = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968 },
  { name: "Hanna", surname: "Hammarst", born: 1829, dead: 1909 },
];

const facts = [
  {
    id: 1,
    text: "Які вчені народилися в 19 ст.",
    validate: (s) => s.born >= 1801 && s.born <= 1900,
  },
  {
    id: 2,
    text: "Знайти рік народження Albert Einstein",
    validate: (s) => s.name === "Albert" && s.surname === "Einstein",
  },
  { id: 3, text: "Відсортувати вчених за алфавітом", validate: () => false },
  {
    id: 4,
    text: 'Знайти вчених, прізвища яких починаються на літеру "C"',
    validate: (s) => s.surname.startsWith("C"),
  },
  {
    id: 5,
    text: "Відсортувати вчених за кількістю прожитих років",
    validate: () => false,
  },
  {
    id: 6,
    text: 'Видалити всіх вчених, ім\'я яких починається на "A"',
    validate: (s) => s.name.startsWith("A"),
  },
  {
    id: 7,
    text: "Знайти вченого, який народився найпізніше",
    validate: (s) => s.born === Math.max(...scientists.map((x) => x.born)),
  },
  {
    id: 8,
    text: "Знайти вченого, який прожив найдовше і найменше",
    validate: (s) => {
      const ages = scientists.map((x) => x.dead - x.born);
      const maxAge = Math.max(...ages);
      const minAge = Math.min(...ages);
      const age = s.dead - s.born;
      return age === maxAge || age === minAge;
    },
  },
  {
    id: 9,
    text: "Знайти вчених, в яких співпадають перші літери імені і прізвища",
    validate: (s) => s.name[0] === s.surname[0],
  },
  { id: 10, text: "Сума років життя всіх вчених", validate: () => false },
  { id: 11, text: "Видалити вчених 15-17 ст.", validate: (s) => s.born < 1701 },
  {
    id: 12,
    text: "Чи всі вчені працювали в 19 столітті",
    validate: () => false,
  },
];

const container = document.getElementById("scientists");
const factContainer = document.getElementById("facts");

let selectedScientist = null;
let selectedFact = null;

function clearSelection() {
  document
    .querySelectorAll(".card")
    .forEach((el) => el.classList.remove("selected", "wrong"));
  document
    .querySelectorAll(".fact")
    .forEach((el) => el.classList.remove("selected"));
}

function render() {
  container.innerHTML = "";
  factContainer.innerHTML = "";

  scientists.forEach((s) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `${s.name} ${s.surname}`;
    div.onclick = () => {
      clearSelection();
      div.classList.add("selected");
      selectedScientist = { data: s, el: div };
      checkMatch();
    };
    container.appendChild(div);
  });

  facts.forEach((f) => {
    const div = document.createElement("div");
    div.className = "fact";
    div.textContent = f.text;
    div.onclick = () => {
      clearSelection();
      div.classList.add("selected");
      selectedFact = { data: f, el: div };
      checkMatch();
    };
    factContainer.appendChild(div);
  });
}

function checkMatch() {
  if (selectedScientist && selectedFact) {
    const isCorrect = selectedFact.data.validate(selectedScientist.data);

    if (isCorrect) {
      selectedScientist.el.classList.remove("selected");
      selectedScientist.el.classList.add("correct");
      setTimeout(() => {
        selectedScientist.el.remove();
      }, 500);
    } else {
      selectedScientist.el.classList.add("wrong");
      setTimeout(() => {
        selectedScientist.el.classList.remove("wrong", "selected");
      }, 500);
    }

    selectedScientist = null;
    selectedFact = null;
  }
}

render();
