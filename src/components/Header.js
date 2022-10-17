import React from 'react'
import clock from './clock.jpg'
import styles from './appStyles.module.css'
import CoursesHeader from './CoursesHeader';
function Header({ courses, title, description ,isLoading,errorMessage,searchQuery}) {
  return (
    <div className={styles.HeaderAll}>
      <div className={styles.Header}>
        <div className={styles.headcard}>
          <b className={styles.headtitle}>New to Udemy? Lucky you.</b>
          <span className={styles.headtxt}>Courses start at E£169.99. Get your new-student offer before it expires.</span>
        </div>
        <div className={styles.clock_image}><img src={clock} alt="alarm clock" /> </div>
      </div>
      <CoursesHeader courses={courses}
        title={title}
        description={description} 
        isLoading={isLoading}
        errorMessage= {errorMessage}
        searchQuery={searchQuery}/>
    </div>
  );
};

export default Header
