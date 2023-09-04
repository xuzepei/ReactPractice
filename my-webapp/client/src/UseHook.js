
import "./css/usehook.css"
import { useState, useEffect } from 'react'


export default function UseHook() {

    const [count, setCount] = useState(0)

    //react18将useEffect的默认运行改为了两次，可以删掉 index.tsx或者 index.js文件里的 StrictMode
    useEffect(() => { console.log('Count has changed to: ' + count) }, [count])

    function handleClickedIncreaseBtn() {
        console.log("handleClickedIncrementBtn")

        console.log("before setting: " + count)
        setCount(count + 1)
        console.log("after setting: " + count)
    }

    function handleClickedDecreaseBtn() {
        console.log("handleClickedDecrementBtn")

        setCount((prevalue)=>{
            return prevalue - 1;
        })
    }

    function handleClickedResetBtn() {
        console.log("handleClickedResetBtn")

        setCount(0)
    }

    return (<div>
        <h1>{count}</h1>
        <button onClick={handleClickedIncreaseBtn}>Increase</button>
        <button onClick={handleClickedDecreaseBtn}>Decrease</button>
        <button onClick={handleClickedResetBtn}>Reset</button>
        
    </div>);
}