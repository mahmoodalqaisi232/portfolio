import React from "react";
import './content.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AttentionSeeker, Slide } from "react-awesome-reveal";

function Content(){
    return(
        <>
 <div className="container-fluid  my-5">
    <div className="d-flex text-white justify-content-around fs-1">
        <Slide direction="left">
     <div className="box"><span>Projects</span></div>
     </Slide>
     <AttentionSeeker>
     <div className="box"><span>Technologies</span></div>
     </AttentionSeeker>
     <Slide direction="right">
     <div className="box"><span>About</span></div>
     </Slide>
    </div>
</div>



        </>
    )
}

export default Content