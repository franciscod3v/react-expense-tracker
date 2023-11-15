import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const { transactions } = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
                    .filter(amount => amount > 0)
                    .reduce((acc, item) => (acc += item), 0)
    
    console.log('Ingresos', income)

  return (
    <>
        <div>
            <h4>Income</h4>
            <p>{2000}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p>{1500}</p>
        </div>
    </>
  )
}

export default IncomeExpenses