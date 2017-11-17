import React, { Component } from "react";

const ListErrors = ({ errors }) => {
<<<<<<< HEAD
    if (errors) {
        return (
            <ul className="error-messages">
                {Object.keys(errors).map(key=>{
                    return (
                        <li key={key} style={{listStyle: "none"}}>
                        {key} {errors[key]}
                        </li>

                    );
                })}
            </ul>
            );
            }else{
                return null;
           
    }
};
export default ListErrors
=======
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map(key => {
          return (
            <li key={key} style={{ listStyle: "none" }}>
              {key} {errors[key]}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default ListErrors;
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
