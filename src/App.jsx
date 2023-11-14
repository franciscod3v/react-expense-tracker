import Balance from './components/Balance'
import Header from './components/Header'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance></Balance>
      <TransactionForm></TransactionForm>
      <TransactionList />
    </GlobalProvider>
  )
}

export default App
