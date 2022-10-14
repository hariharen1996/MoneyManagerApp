import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {item, deleteId} = this.props
    const {title, amount, type, id} = item

    const amountDelete = () => {
      deleteId(id)
      //   console.log(id)
    }

    return (
      <>
        <li className="tr-lists">
          <p className="tr-text">{title}</p>
          <p className="tr-text">Rs {amount}</p>
          <p className="tr-text">{type}</p>
          <button
            type="button"
            className="del-btn"
            // eslint-disable-next-line react/no-unknown-property
            testId="delete"
            onClick={amountDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              className="del-img"
              alt="delete"
            />
          </button>
        </li>
      </>
    )
  }
}

export default TransactionItem
