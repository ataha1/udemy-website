import React from 'react'
import styles from './WhatToLearnStyles.module.css'
function WhatToLearn({course}) {
 const courseobjectives= course.objectives_summary;
 let res=[]

 for (let i=0;i< courseobjectives.length;i++){
    res[i]= <li className={styles.LearnList}>  {courseobjectives[i]} </li>;
 }

  return (
    <div className={styles.objectives}>
    <h2>What you'll learn</h2>
    <ul className={styles.FullList} >
    {res} 
    </ul>
    </div>
  )
}

export default WhatToLearn
