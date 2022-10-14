/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, income, expense} = this.props
    return (
      <>
        <div className="balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
          <div>
            <p className="balance-text">Your Balance</p>
            <p className="balance-count" testId="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
        <div className="income-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
          <div>
            <p className="income-text">Your Income</p>
            <p className="income-count" testId="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="expense-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
          <div>
            <p className="expense-text">Your Expenses</p>
            <p className="expense-count" testId="expensesAmount">
              Rs {expense}
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
