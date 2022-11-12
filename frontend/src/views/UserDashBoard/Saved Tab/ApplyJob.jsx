import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import AppliedSummaryBlock from '../../CompanyDashBoard/Applied Tab/AppliedSummaryBlock'
import "./saved.css"
import { Grid, IconButton } from "@mui/material";
import ApplyJobSummary from './ApplyJobSummary'
import ApplyJobDetailed from './ApplyJobDetailed'
import ApplyConfirmation from './ApplyConfirmation'
import { useLocation } from 'react-router-dom';



function ApplyJob() {
  const location = useLocation()
    const{job_post}=location.state
    console.log(job_post)
  return (
    <div className='applyjob-main'>
        <UserNavbarIn/>
        <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item>
                <div className='jobdescription-main'>
                    <ApplyJobSummary job_post={job_post}/>
                    <ApplyJobDetailed job_post={job_post}/>

                </div>
                
            </Grid>
        </Grid>

        {/* <ApplyConfirmation/> */}



    </div>
  )
}

export default ApplyJob
