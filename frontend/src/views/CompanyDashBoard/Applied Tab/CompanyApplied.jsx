import React from "react";
import CompanyNavbarIn from "../../../components/CompanyNavbarIn";
import DetailedCompanyApplied from "./DetailedCompanyApply";
import "./companyapplied.css";
import AppliedSidePane from "./AppliedSidePane";
import { Grid } from "@mui/material";
import DummyFile from "./dummyFile";
import { useLocation } from "react-router-dom";

function CompanyApplied() {
  const location = useLocation();
  const { job_post_id } = location.state;
  const { user_id } = location.state;
  const { job_position } = location.state;
  return (
    <div>
      <CompanyNavbarIn />
      {/* <DummyFile/> */}
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <AppliedSidePane />
        </Grid>
        <Grid item>
          <DetailedCompanyApplied
            job_post_id={job_post_id}
            user_id={user_id}
            job_position={job_position}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CompanyApplied;
