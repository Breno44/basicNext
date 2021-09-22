/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"

export default function index() {

    const router = useRouter()

    const id = router.query.id

    return (
        <div>rota / {id} / user</div>
    )
}