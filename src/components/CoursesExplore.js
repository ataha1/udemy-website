import React from 'react'
import CoursesExploreStyle from './CoursesExploreStyle.module.css'
import Course from "./Course";
import LoadingSpinner from './LoadingSpinner';
//import {filter} from './NavBar'

function CoursesExplore({ courses, title, description, isLoading,errorMessage,searchQuery }) {
    
    //   let dataSearch = courses.filter(item =>
    //       {
    //           return Object.keys(item).some(key =>
    //               item[key].toString().toLoweCase().includes(searchQuery.toString().toLoweCase()))
    //      })


  
     const courseList = () => {
        
         return (courses.map((course) => {
            if (
              searchQuery &&
              !course.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
              return null;
            else
            return (
                <Course key={course.id} course={course} />
            );
          })
          );
     };
 

    return (
        <div className={CoursesExploreStyle.coursesExplore}>
            <header className={CoursesExploreStyle.courseExploreHeader}>
                <h2 className={CoursesExploreStyle.title}>{title}</h2>
                <p className={CoursesExploreStyle.description}>{description}</p>
                <button className={`${CoursesExploreStyle.textHeadingSM} ${CoursesExploreStyle.exploreBtn} ${CoursesExploreStyle.bttn}`}> Explore Python</button>
            </header>
            <div className={CoursesExploreStyle.coursesList}>
                
                {isLoading ? <LoadingSpinner/> : courseList()}
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
        </div>
    )
}

export default CoursesExplore
