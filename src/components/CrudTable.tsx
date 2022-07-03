import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }: any) => {
  return (
    <div>
      <h3>Table of Data</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={3}>Sin datos</td>
            </tr>
          ) : (
            data.map((el: any) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
