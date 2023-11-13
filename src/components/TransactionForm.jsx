function TransactionForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter a description" />
        <input type="number" step={0.05} placeholder="0.00"/>
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm