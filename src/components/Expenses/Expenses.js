import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(props.expenses);

  const filterChangeHandler = (selectedYear) => {
    const filteredExpenses = props.expenses.filter((expense) =>
      filterDate(expense, selectedYear)
    );
    setExpenses(filteredExpenses);
    setFilteredYear(selectedYear);
  };

  const filterDate = (expense, year) => {
    if (expense.date.getFullYear().toString() === year) {
      return expense;
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expenses} />
        {expenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
