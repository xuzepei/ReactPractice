
export default function MyNewButton({ count, onClick}) {

    return (
      <button onClick={onClick}>Clicked {count} times</button>
    );
  }