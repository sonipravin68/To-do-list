import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState();

  const [item, setItem] = useState([]);

  const [toggleBtn, setToggleBtn] = useState(true);

  const [editval , setEditVal] = useState()

  const AddTask = () => {
    if (!inputValue) {
      alert("Please Fill the field");
    }
    else if(inputValue && !toggleBtn){
      setItem(
        item.map((elem)=>{
          if(elem.id === editval){
            return {...elem,  name : inputValue}
          }
          return elem
        })
      
       )
       setToggleBtn(true)

       setInputValue('')

       setEditVal(null)
        
    }
    else {
      const allInputs = {
        id: new Date().getTime().toString(),
        name: inputValue,
      };
      console.log(allInputs);
      setItem([...item, allInputs]);
      setInputValue("");

    }
  };

  const deleteItem = (index) => {
    console.log("id", index);
    // setItem((previousData)=>{
    //   console.log(previousData);
    //   return previousData.filter((elem,index) => {
    //     console.log("index",index);
    //     return index !== id
    //   })
    // })

    const updatedItems = item.filter((Element) => {
      return index !== Element.id;
    });
    setItem(updatedItems);
  };

  const remove = () => {
    setItem([]);
  };


// edit item 

// when user click on the edit button

// 1 : get the id and name of the data which user cliccked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: now update the value of the setinputValue with the new updated value to edit
// 4: to pass the current element ID to new state variabel for reference




  const editItem = (editid) => {
    console.log("editid", editid);
    let editItem = item.find((elem) => {
      return elem.id === editid;
    });
    console.log("editItem", editItem);

    setToggleBtn(false)

    setInputValue(editItem.name)

    setEditVal(editid)

  };
  return (
    <>
      <div className="container">
        <h1>My Todo List App</h1>
        <input
          type="text"
          className="myInput"
          value={inputValue}
          placeholder="Add your today tasks here"
          onChange={(e) => setInputValue(e.target.value)}
        />

        {
          toggleBtn ? (
          <button onClick={AddTask} className="add-btn">
            Add Task
          </button>
        ) : (
          <i
            class="fa-solid fa-pen-to-square"
            onClick={AddTask} 
          ></i>
        )}
        <br />
        {item.map((itemval) => {
          return (
            <div className="output" key={itemval.id}>
              {itemval.name}
              <div className="icons">
                <i
                  class="fa-solid fa-pen-to-square"
                  onClick={() => editItem(itemval.id)}
                ></i>
                <i
                  className=" fa-solid fa-trash"
                  onClick={() => {
                    deleteItem(itemval.id);
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        <br />
        <div className="remove-btn">
          <button className="btn-effect" onClick={remove}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
