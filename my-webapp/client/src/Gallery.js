
function Avatar({person, size=100}) {
    return (
        <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}


function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }

function getStringByArray(array) {
    let str = ""
    array.map((item)=>{
        str += item 
        str += ", "
    })

    return str.slice(0, -2)
}

function Profile({person}) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
            <Avatar person={person} size={person.imageSize}/>
        <ul>
          <li>
            <b>Profession: </b> 
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b> 
            ({getStringByArray(person.awards)})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {

    const person1 = {
        name: "Maria Skłodowska-Curie",
        imageId: 'szV5sdG',
        imageSize: 70,
      profession: "physicist and chemist",
      awards:["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
      discovered: "polonium (element)"
    }
    
    const person2 = {
        name: "Katsuko Saruhashi",
        imageId: 'YfeOqp2',
        imageSize: 70,
      profession: "geochemist",
      awards:["Miyake Prize for geochemistry", "Tanaka Prize"],
      discovered: "a method for measuring carbon dioxide in seawater"
    }

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={person1}/>
      <Profile person={person2}/>
    </div>
  );
}
