/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

export default function questao() {

    const [ questao, setQuestao ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1002').then(res => res.json()).then(setQuestao)
    }, [])

    function renderizarRespostas() {
        if(questao) {
            return questao.respostas.map(resposta => {
                return <li>{resposta}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Questao</h1>
            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}