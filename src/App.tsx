import { atom, useAtom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'
import ChildComponent from './ChildComponent'

const idAtom = atom(2)
export const userAtom = atomsWithQuery( get => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
  },
}))

const UserData = () => {
  const [{data}] = useAtom(userAtom[1])

  return <div>{JSON.stringify(data)}</div>
}

function App() {
  const [id, setId] = useAtom(idAtom)


  return (
    <>
      <UserData />
      <ChildComponent />
      {'id: ' + id}
      <input onChange={e => setId(Number(e.target.value))}/>
    </>
  )
}

export default App
