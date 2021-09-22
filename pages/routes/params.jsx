/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

export default function index() {

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            Rota params: {id} : {nome}
            <Link href="/routes/rota">
                <button>Voltar</button>
            </Link>
        </div>
    )
}