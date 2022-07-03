import React from "react";

const Message = ({ msg, bgColor }: any) => {
   
  let styles:any = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
 
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{__html:msg}}/>
       {/* Para recibir etiquetas HTML */}
    </div>
  );
};

export default Message;
