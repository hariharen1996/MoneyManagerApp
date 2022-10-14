import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    data: [],
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: event.target.value})
  }

  onType = event => {
    this.setState({type: event.target.value})
  }

  addData = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const checkId = transactionTypeOptions.find(item => item.optionId === type)

    const newAmounts = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: checkId.displayText,
    }

    if (title !== '' && amount !== '') {
      this.setState(prevState => ({
        data: [...prevState.data, newAmounts],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  getExpense = () => {
    const {data} = this.state
    let expenseAmount = 0
    data.forEach(item => {
      if (item.type === transactionTypeOptions[1].displayText) {
        expenseAmount += item.amount
      }
    })
    return expenseAmount
  }

  getIncome = () => {
    const {data} = this.state
    let incomeAmount = 0
    data.forEach(item => {
      if (item.type === transactionTypeOptions[0].displayText) {
        incomeAmount += item.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {data} = this.state
    let totalIncome = 0
    let totalExpenses = 0
    let totalBalance = 0
    data.forEach(item => {
      if (item.type === transactionTypeOptions[1].displayText) {
        totalExpenses += item.amount
      } else {
        totalIncome += item.amount
      }
    })
    totalBalance = totalIncome - totalExpenses
    return totalBalance
  }

  deleteId = id => {
    const {data} = this.state
    const deleteData = data.filter(item => item.id !== id)
    this.setState({data: deleteData})
  }

  render() {
    const {title, amount, type, data} = this.state

    const balance = this.getBalance()
    const income = this.getIncome()
    const expense = this.getExpense()

    return (
      <div className="bg-container">
        <div className="card-heading">
          <h1 className="heading">Hi, Richard</h1>
          <p className="card-text">
            Welcome back to your <span className="card-sp">Money Manager</span>{' '}
          </p>
        </div>
        <div className="money-card">
          <MoneyDetails balance={balance} income={income} expense={expense} />
        </div>

        <div className="container">
          <form className="form" onSubmit={this.addData}>
            <h1 className="heading">Add Transaction</h1>

            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              id="title"
              onChange={this.onTitle}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={amount}
              id="amount"
              onChange={this.onAmount}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <select value={type} onChange={this.onType} className="input">
              {transactionTypeOptions.map(item => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
          <div className="tr-history">
            <h1 className="tr-head">History</h1>
            <div className="tr-container">
              <ul className="tr-table">
                <li className="tr-heading">
                  <p className="tr-text">Title</p>
                  <p className="tr-text">Amount</p>
                  <p className="tr-text">Type</p>
                </li>
                {data.map(item => (
                  <TransactionItem
                    key={item.id}
                    item={item}
                    deleteId={this.deleteId}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
