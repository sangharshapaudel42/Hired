import React, {useState, useEffect} from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import ApplyJob from './ApplyJob'
import { Grid } from "@mui/material";
import DashboardLayout from '../../../components/DashhboardLayout';
import Featured_box from '../../../components/featuredBox';
import { Link } from 'react-router-dom';
import callAPI from "../../../utils/callAPI";



function UserSaved() {
  const [saved_job_post, setSavedJobPost] = useState(null);

  const message = async () => {
    let saved_job_post_response_obj = await callAPI({ endpoint: "/jobPost/get_all_saved_job" });
    setSavedJobPost(saved_job_post_response_obj);
  };

  useEffect(() => {
    message();
  }, []);


  if (saved_job_post != null) {
    console.log(saved_job_post.data)
  return (
    <div>
       <DashboardLayout>
        <Grid container direction="column "   className='assesmentmain-main'>
          <Grid item className='assesmentmain-heading'>
            Saved Jobs
          </Grid>
          <Grid className="assesmentmain-subheading">
            List of all the jobs that you have saved.
          </Grid>
          
          {saved_job_post.data.map((val, key) => {return (
            <Grid item>
              <Link to="/ApplyJob" state={{ job_post: saved_job_post.data[key] }} style={{ textDecoration: "none", color: "black" }}>
              <Featured_box 
              company= {val.employer.companyName}
              description= {val.description} 
              jobName= {val.job} 
                location= {val.job_location} 
                timeElapsed={"3 days ago"}
                state={false}/>
              </Link>
            </Grid>
              );})}
          
        </Grid>

        

       </DashboardLayout>
      
    </div>
  )
}
}

export default UserSaved

{/* <ApplyJob />  */}