import { useState } from "react"
import { useGlobalState } from '../../context/GlobalState'

function TransactionForm() {

  const { addTransaction } = useGlobalState()
  const [description, setdescription] = useState()
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter a description"
          onChange={(e) => setdescription(e.target.value)}
        />
        <input type="number" step={0.05} placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm