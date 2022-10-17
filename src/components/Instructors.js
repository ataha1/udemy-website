import { SvgIcon } from '@mui/material';
import React , {useState} from 'react';
import InstructorsStyles from './InstructorsStyles.module.css'
import { IoStar,IoPlayCircle, IoPeople } from 'react-icons/io5';
import {  FaCertificate} from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import reqStyles from './reqStyles.module.css'


function Instructors({ course }) {
 //  console.log(course);
   // console.log(courses.items);
  //  console.log(course.visible_instructors);
 
   

  return (
    <div className={InstructorsStyles.Instructors}>
        <h2 className={InstructorsStyles.heading}>Instructors</h2>
        <div className={InstructorsStyles.InstructorsContainer}>
            {course.visible_instructors.map((item)=>{
                 const [showMore, setShowMore] = useState(false);

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
                <div className={InstructorsStyles.container} key={item.id}>
                 <div className={InstructorsStyles.Name}>
                    {item.title}
                 </div>
                 <div className={InstructorsStyles.Job}>
                     {item.job_title}
                 </div>
                 <div className={InstructorsStyles.rateAndImage}>
                     <img alt={item.name} className={InstructorsStyles.image} src={item.image_100x100} />
                     <ul className={InstructorsStyles.list}>
                         <li className={InstructorsStyles.listItem}>
                            <div className={InstructorsStyles.Item}>
                             <IoStar className={InstructorsStyles.Icon} size={16}/>
                             <div className={InstructorsStyles.content}>
                                {item.Instructor_Rating} Instructor Rating
                             </div>
                             </div>
                         </li>
                         <li className={InstructorsStyles.listItem}>
                         <div className={InstructorsStyles.Item}>
                            <FaCertificate className={InstructorsStyles.Icon} size={16}/>
                             <div className={InstructorsStyles.content}>
                                {item.Reviews} Reviews
                             </div>
                        </div>
                         </li>
                         <li className={InstructorsStyles.listItem}>
                         <div className={InstructorsStyles.Item}>
                            <IoPeople className={InstructorsStyles.Icon} size={16}/>
                             <div className={InstructorsStyles.content}>
                                {item.Students} Students
                             </div>
                        </div>
                         </li>
                         <li className={InstructorsStyles.listItem}>
                         <div className={InstructorsStyles.Item}>
                                <IoPlayCircle  className={InstructorsStyles.Icon} size={16}/>
                             <div className={InstructorsStyles.content}>
                                {item.Courses} Courses
                             </div>
                        </div>
                         </li>    
                     </ul>
                 </div>
                 <div className={reqStyles.des}>
                 <div className={descStyle(showMore)}>
                    {showMore ? item.description : item.description.slice(0,500) }
                 </div>
                 <div className={reqStyles.btn}>
                    <button  className={btnStyle(showMore)} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"} </button>
                    <span className={reqStyles.Icon}>{showMore  ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}</span>
                </div>
                </div>
                </div>)
            })
           
        }
        </div>
    </div>
  )
}

export default Instructors