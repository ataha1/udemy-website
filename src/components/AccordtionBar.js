import React , {useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import accordationStyles from './accordationStyles.module.css';
import { IoPlayCircle} from 'react-icons/io5';
import ReqandDes from './ReqandDes';
import Instructors from './Instructors';
import reqStyles from './reqStyles.module.css'


function AccordtionBar({coursecontent,course}) {


      const [clicked, setClicked] = useState(false);

      const Hm = (time) => {
        time = Number(time);
        let h = Math.floor(time / 3600);
        let m = Math.ceil((time % 3600) / 60);
       
        let hD = h > 0 ? h + "hr" : "";
        let mD = m > 0 ? m + "min" : "";
       
        return hD + mD;
      }

      const descStyle = e=>{
        if(e === true)
        return reqStyles.desMore
        else
        return reqStyles.desLess
      }
    
      const toggle = index => {
        if (clicked === index) {
          //if clicked question is already active, then close it
          return setClicked(null);
        }
    
        setClicked(index);
      }

      const preview = e=>{
        if(e === true)
        return 'Preview'
        else
        return null
      }
      const titleColor = e=>{
        if(e === true)
        return accordationStyles.title3
        else
        return accordationStyles.title2
      }
  
    
  return (

      <div className={accordationStyles.AccordionSection}>
   
        <div  className={accordationStyles.Container1}>
       
            <h2 className={accordationStyles.Content}>Course content</h2>
            <div className={accordationStyles.header}>
              <span> {coursecontent.curriculum_context.data.sections.length} sections • {coursecontent.curriculum_context.data.num_of_published_lectures} lectures • {coursecontent.curriculum_context.data.estimated_content_length_text.slice(0,2)}h {coursecontent.curriculum_context.data.estimated_content_length_text.slice(3,5)}m total length
              </span>
              <span className={accordationStyles.expand} >Expand all sections</span>
            </div> 
          <div  className={accordationStyles.Container}>
          {coursecontent.curriculum_context.data.sections.map((item, index) => {
            return (
              <div key={index} >
                <div className={accordationStyles.Wrap} onClick={() => toggle(index)} key={index}>
                 
                  <span>{clicked === index ? <ExpandLessIcon fontSize="medium" /> : <ExpandMoreIcon fontSize="medium" />}</span>
                  <span className={accordationStyles.title}>{item.title}</span>
                  <span className={accordationStyles.lectureCount}>{item.lecture_count} lectures • {Hm(item.content_length)}  </span>
                </div>
                {clicked === index ? (
                  <div className={accordationStyles.Dropdown}>
                   
                      {item.items.map((item2)=>{
                        return(
                          <ul className={accordationStyles.list} key={item2.id} >
                            <li className={accordationStyles.listItem}>
                              <span className={accordationStyles.Icon}>
                                <IoPlayCircle size={18}/>
                                </span>
                               <div className={accordationStyles.line}>
                                  <div  className={titleColor(item2.can_be_previewed)}>
                                  <span>{item2.title} </span>
                                  </div>
                          <div className={accordationStyles.rightSection}>

                         
                              <span className={accordationStyles.preview}>{preview(item2.can_be_previewed)}</span>
                              <span className={accordationStyles.time}>{item2.content_summary} </span>
                              </div>  
                            </div>                           
                            </li>
                          </ul>
                           )
                        
                      })}
                  </div>
                ) : null}
              </div>
            );
          })}
          
          
          </div>
          <ReqandDes coursecontent={coursecontent}/>
          <Instructors course={course}/>
        </div>
        

      </div>
  )
}

export default AccordtionBar