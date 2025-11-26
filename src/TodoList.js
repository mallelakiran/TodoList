import React, { useState } from 'react'
function TodoList() {
    const [activity, setActivity] = useState();
    const [listData, setListData] = useState([]);

    function addActivity() {
        //setListData([...listData, activity])
        //console.log(listData)
        setListData((listData => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('')
            return updatedList;

        }))
    }
    function removeActivity(index) {
        const updatedList = listData.filter((item, id) => id !== index);
        setListData(updatedList);
    }
    function removeAll(){
        setListData([])
    }
    return (
        <>
            <div className="container">
                <div className='header'>TodoList</div>
                <input type='text' placeholder=' Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'>Here is your List :{")"}</p>
                {listData.map((data, index) => (
                    <>
                        <p key={index}>
                            <div className='listData'>{data}</div>

                            <div className='btn'>
                                <button onClick={() => removeActivity(index)}>remove(-)</button>
                            </div>
                        </p>
                    </>
                ))}
                {listData.length>=1 && <button className ='remove-btn' onClick={removeAll}>remove All</button>}
                

            </div>
        </>

    )
}
export default TodoList;