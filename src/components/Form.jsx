import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  let [sum, setSum] = useState(0);
  const [oneInput, setOneInput] = useState("");
  const [twoInput, setTwoInput] = useState("");
  const [threeInput, setThreeInput] = useState("");
  const [fourInput, setFourInput] = useState("");
  const [fiveInput, setFiveInput] = useState("");
  const [income, setIncome] = useState("");

  const bascet = [
    {
      placeholder: "Продукты",
      name: "oneInput",
      value: oneInput,
      count: "Расходы на продукты составляют",
      onChange: (e) => setOneInput(e.target.value),
    },
    {
      placeholder: "Одеждa и акссесуары",
      name: "twoInput",
      value: twoInput,
      count: "Расходы на одежду и акссесуары составляют",
      onChange: (e) => setTwoInput(e.target.value),
    },
    {
      placeholder: "Обязательные ежемесячные расходы",
      name: "threeInput",
      value: threeInput,
      count: "Обязательные ежемесячные расходы составляют",
      onChange: (e) => setThreeInput(e.target.value),
    },
    {
      placeholder: "Прочие расходы",
      name: "fourInput",
      value: fourInput,
      count: "Прочие расходы расходы составляют",
      onChange: (e) => setFourInput(e.target.value),
    },
    {
      placeholder: "Транспорт",
      name: "fiveInput",
      value: fiveInput,
      count: "Транспортные расходы составляют",
      onChange: (e) => setFiveInput(e.target.value),
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSum(
      income -
        (sum +
          Number(oneInput) +
          (Number(twoInput) +
            (Number(threeInput) + Number(fourInput) + Number(fiveInput))))
    );
    /* setOneInput("");
    setTwoInput("");
    setThreeInput("");
    setFourInput("");
    setIncome(""); */
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Планирование бюджета</h1>
      <input
        placeholder="Ваш общий доход за месяц"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        name="income"
        type="number"
        disabled={sum === 0 ? false : true}
      ></input>
      <h1>Ваши расходы</h1>
      {bascet.map((text, index) => {
        return (
          <input
            className={styles.input}
            placeholder={text.placeholder}
            key={index}
            value={text.value}
            onChange={text.onChange}
            name={text.name}
            type="number"
            disabled={sum === 0 ? false : true}
          ></input>
        );
      })}
      {sum > 0 ? (
        <a href="/">
          <button className={styles.button} type="button">
            Пересчитать
          </button>
        </a>
      ) : sum < 0 ? (
        <a href="/">
          <button className={styles.button} type="button">
            Пересчитать
          </button>
        </a>
      ) : (
        <button className={styles.button} type="submit">
          Посчитать
        </button>
      )}
      <h1>
        Остаток: {sum < 0 ? (sum = "Расходы не могут превышать доходы") : sum}
      </h1>
      {sum > 0 ? (
        <>
          {bascet.map((text, index) => {
            return (
              <h4 key={index}>
                {text.count}{" "}
                {((Number(text.value) / Number(income)) * 100).toFixed(2)}%
              </h4>
            );
          })}
        </>
      ) : (
        <p></p>
      )}
    </form>
  );
};

export default Form;

//Запретить ввод отрицательных чисел
