function DishList({name, description, price}){
    return (

            <tr>
                <td className="cell">{name}</td>
                    <td className="cell">
                        <span className="truncate">
                            {description}
                        </span>
                    </td>
                    <td className="cell">
                        <span>{price} €</span>
                    </td>
                    <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                                Voir
                        </a>
                    </td>
            </tr>
    )
}

export default DishList;
