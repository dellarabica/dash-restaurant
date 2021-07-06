function OrdersList({code, status, date}){
    return (

            <tr>
                <td className="cell">#{code}</td>
                <td class="cell"><span class="badge bg-warning">{status}</span></td>
                    <td className="cell">
                        <span>{date}</span>
                    </td>
                    <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                                Voir
                        </a>
                    </td>
            </tr>
    )
}

export default OrdersList;
