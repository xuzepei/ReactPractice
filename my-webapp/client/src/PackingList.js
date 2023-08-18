function Item({ name, isPacked }) {
    return <li className="item">{isPacked? name + " ✔" : name}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride 的行李清单</h1>
            <ul className="list_with_dot">
                <Item
                    isPacked={true}
                    name="宇航服"
                />
                <Item
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>
        </section>
    );
}