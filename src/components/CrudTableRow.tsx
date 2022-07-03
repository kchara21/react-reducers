import React from "react";

const CrudTableRow = ({el,setDataToEdit,deleteData}:any) => {
  let {name,university,id} = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{university}</td>
      <td>
        <button onClick={()=>setDataToEdit(el)}>Edit</button>
        <button onClick={()=>deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
