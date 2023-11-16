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
      amount: +amount
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Enter a description"
          onChange={(e) => setdescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number" 
          step={0.01} 
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mg-2 w-full"
        >Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm