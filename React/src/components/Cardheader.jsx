import React from 'react'

const Cardheader = ({clickOnLoginOption}) => {
  return (
    <div>
<div class="cards">
    <div class="card blue">
        <a onClick = {clickOnLoginOption} class="tip" target='_blank'>Student Hub</a>
    </div>
    <div class="card red">
        <a class="tip" target='_blank'>Instructor Hub</a>
    </div>
</div>
    </div>
      )
    }
    
    export default Cardheader
    