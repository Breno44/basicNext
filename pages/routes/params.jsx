/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"

export default function index() {

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>Rota params: {id} : {nome}</div>
    )
}