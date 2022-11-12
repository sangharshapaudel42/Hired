import React, { useState, useEffect } from "react";
import { ImClipboard } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { grid } from "@mui/system";
import callAPI from "../../../utils/callAPI";
import TargetFieldComponent from "./TargetFieldComponent";

function CardAssesment(props) {
  const [already_solved, setAlreadySolved] = useState(false);
  var link_path = ""

  const message = async () => {
    let response_obj = await callAPI({ endpoint: `/userAssesment/compelete_assesment/${props.id}` });
    setAlreadySolved(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  return (
    <div>
      {already_solved ?  
      <Link
        to="/Assesment/AssesmentQuestions"
        state={{ target_field_id: props.id, target_field_name: props.name }}
        className="assesment-link"
      >
        <TargetFieldComponent data={props} already_solved={already_solved}/>
      </Link> : 
      <TargetFieldComponent data={props} already_solved={already_solved}/>}
      
    </div>
  );
}

export default CardAssesment;
