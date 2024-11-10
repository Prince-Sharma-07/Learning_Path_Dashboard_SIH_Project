import React, { useState } from 'react'

const Cardheader = ({clickOnLoginOption}) => {
  return (
    <div>
<div class="cards">
    <div class="card blue">
        <p onClick = {clickOnLoginOption} class="tip">Student Hub</p>
    </div>
    <div class="card red">
        <p class="tip">Instructor Hub</p>
    </div>
</div>
    </div>
      )
    }
    
    export default Cardheader
    