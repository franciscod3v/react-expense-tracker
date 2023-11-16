import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='bg-zinc-800 p-10 rounded-lg flex'>
          <div className=''>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div>
            <TransactionList />
          </div>
        </div>
      </div>

    </GlobalProvider>
  )
}

export default App
