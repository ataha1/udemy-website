import React , {useState} from 'react'
import reqStyles from './reqStyles.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function ReqandDes({coursecontent}) {
    const [showMore, setShowMore] = useState(false);
    const data =  coursecontent.details.description
    const descStyle = e=>{
        if(e === true)
        return reqStyles.desMore
        else
        return reqStyles.desLess
      }
      const btnStyle = e=>{
        if(e === true)
        return reqStyles.btnLess
        else
        return reqStyles.btnMore
      }

    return (
        <>
    <div className={reqStyles.Requirements}>

         <h2 className={reqStyles.title}>Requirements</h2>           
        {coursecontent.details.Requirements.map((item,index)=>{
                        return(
                          <ul className={reqStyles.list} key={index}>
                            <li className={reqStyles.listItem}>
                              <span className={reqStyles.item}>
                                {item}
                                </span>                 
                            </li>
                          </ul>
                           )
                        
                      })} 
    </div>
    <div className={reqStyles.des}>
        <h2 className={reqStyles.title}>Description</h2>
       
        <div  className={descStyle(showMore)}>
        {showMore ? data : data.slice(0,1000) }
        </div>
       <div className={reqStyles.btn}>
        <button  className={btnStyle(showMore)} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"} </button>
        <span className={reqStyles.Icon}>{showMore  ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}</span>
       </div>
    </div>
    </>

  )
}

export default ReqandDes