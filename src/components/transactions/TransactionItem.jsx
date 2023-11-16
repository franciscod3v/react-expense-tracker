import { useGlobalState } from "../../context/GlobalState"

export const TransactionItem = ({ transaction }) => {

    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 wfull flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>{transaction.amount}</span>
                <button onClick={(e) => {
                    deleteTransaction(transaction.id)
                    console.log(e)
                }}>X</button>
            </div>
        </li>
    )
}
