function PaymentList({name}){
    return (

            <tr>
                <td className="cell">{name}</td>
                    <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                                Voir
                        </a>
                    </td>
            </tr>
    )
}

export default PaymentList;
