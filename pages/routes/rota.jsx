import Link from "next/link"

export default function index() {
    return (
        <div>
            <h1>Rota #01</h1>
            <ul>
                <Link href="/routes/params?id=08&nome=Breno">
                    <li>Params</li>
                </Link>
            </ul>
        </div>
    )
}