import React, { useState, useEffect } from "react";

interface formData {
  name: string;
  university: string;
  id:number | null;
}

// const initialForm = {
//     name:"",
//     university:"",
//     id:null,
// }

const CrudForm = ({createData,updateData,setDataToEdit,dataToEdit}:any): JSX.Element => {
  const [form, setForm] = useState<formData>({ name: "", university: "", id:null});

  useEffect(()=>{
    if(dataToEdit){
      setForm(dataToEdit);
    }else{
      setForm({ name: "", university: "", id:null});
    }
  },[dataToEdit]);

  const handleChange = (
    e: { target: HTMLSelectElement } | { target: HTMLInputElement }
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!form.name || !form.university){
      alert('Datos incompletos');
      return;
    }

    if(form.id === null){
      createData(form)
    }else{
      updateData(form);
    }

    handleReset(e);

  };

  const handleReset = (e: any) => {
    setForm({name:"",university:"",id:null});
    setDataToEdit(null);
  };



  return (
    <div>
      <h3>{dataToEdit ?"Edit" :"Add"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={handleChange}
          value={form.university}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
