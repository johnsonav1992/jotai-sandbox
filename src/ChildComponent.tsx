import { useAtom } from "jotai"
import { userAtom } from "./App"

const ChildComponent = () => {
    const [{data}] = useAtom(userAtom[1])

    return (
        <div>{data?.id}</div>
    )
}

export default ChildComponent