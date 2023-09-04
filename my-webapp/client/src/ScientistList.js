const people = [
    {
        id: 0, // 在 JSX 中作为 key 使用
        name: '凯瑟琳·约翰逊',
        profession: '数学家',
        accomplishment: '太空飞行相关数值的核算',
        imageId: 'MK3eW3A',
    },
    {
        id: 1, // 在 JSX 中作为 key 使用
        name: '马里奥·莫利纳',
        profession: '化学家',
        accomplishment: '北极臭氧空洞的发现',
        imageId: 'mynHUSa',
    },
    {
        id: 2, // 在 JSX 中作为 key 使用
        name: '穆罕默德·阿卜杜勒·萨拉姆',
        profession: '物理学家',
        accomplishment: '关于基本粒子间弱相互作用和电磁相互作用的统一理论',
        imageId: 'bE7W1ji',
    },
    {
        id: 3, // 在 JSX 中作为 key 使用
        name: '珀西·莱温·朱利亚',
        profession: '化学家',
        accomplishment: '开创性的可的松药物、类固醇和避孕药',
        imageId: 'IOjWm71',
    },
    {
        id: 4, // 在 JSX 中作为 key 使用
        name: '苏布拉马尼扬·钱德拉塞卡',
        profession: '天体物理学家',
        accomplishment: '白矮星质量计算',
        imageId: 'lrWQx8l',
    },
];

function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

export default function ScientistList() {

    const chemists = people.filter(person =>
        person.profession === '化学家'
    );

    const others = people.filter(person =>
        person.profession != '化学家'
    );

    const items = chemists.map(person => {
        return <li key={person.id}>
            <img className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                因{person.accomplishment}而闻名世界
            </p>
        </li>;
    });

    const items_others = others.map(person => {
        return <li key={person.id}>
            <img className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                因{person.accomplishment}而闻名世界
            </p>
        </li>;
    });

    return (
        <article>
          <h1>科学家</h1>
          <h2>化学家</h2>
          <ul>{items}</ul>
          <h2>其他人</h2>
          <ul>{items_others}</ul>
        </article>
      );
}