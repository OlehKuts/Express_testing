import { v4 as uuidv4 } from "uuid";

export const questions = [
  {
    id: 0,
    question: "Яка властивість робить сітку елементів?",
    correct: "grid",
    options: ["flex", "table", "block", "grid"],
  },
  {
    id: 1,
    question: "Яке значення position притискає елемент при скролі?",
    correct: "sticky",
    options: ["absolute", "sticky", "relative", "static"],
  },
  {
    id: 2,
    question: "Який селектор обирає елемент за його id?",
    correct: "#",
    options: [".", "#", "::", "*"],
  },
  {
    id: 3,
    question: "В якій одиниці вимірюється ширина в'юпорту?",
    correct: "vw",
    options: ["vh", "px", "em", "vw"],
  },
  {
    id: 4,
    question: "Яка властивість змінює колір тексту?",
    correct: "color",
    options: ["color", "background", "font-weight", "text-style"],
  },
];

export const greeting = "Пропоную Вам пройти швидке тестування з основ CSS!";
export const gratitude = "Дякую, що пройшли це тестування!";
export const finalPhrase = "Успіхів Вам у веб-розробці!";
