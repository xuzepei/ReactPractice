export default function ShoppingList() {

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    //=>后不能加{}
    const listItems = products.map(product => 
        <li key={product.id}
            style={{
                 color: product.isFruit ? 'red' : 'green',
            }}>{product.title}</li>
    )

    return (
        <ul id="mylist">{listItems}</ul>
    );
}