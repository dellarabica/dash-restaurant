function CustomerList({lastname, firstname, email, address, phone}){
    return (

            <tr>
                <td className="cell">{lastname}</td>
                    <td className="cell">
                        <span className="truncate">
                            {firstname}
                        </span>
                    </td>
                    <td className="cell">
                        <span>{email}</span>
                    </td>
                    <td className="cell">
                        <span>{address}</span>
                    </td>
                    <td className="cell">
                        <span>{phone}</span>
                    </td>
                    <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                                Voir
                        </a>
                    </td>
            </tr>
    )
}

export default CustomerList;
