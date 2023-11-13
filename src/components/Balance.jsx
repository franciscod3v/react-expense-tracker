import { useGlobalState } from "../context/GlobalState"

function Balance() {

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {JSON.stringify(useGlobalState())}
      </div>
    </div>
  )
}

export default Balance