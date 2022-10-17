import React from 'react'
import styles from './appStyles.module.css'
import CoursesExplore from './CoursesExplore';

function CoursesHeader({ courses, title, description, isLoading, errorMessage, searchQuery }) {
  return (

    <div className={styles.container}>
      <div className={styles.CourseHeaderTitle}>A broad selection of courses</div>
      <div className={styles.courselisttxt}>Choose from 185,000 online video courses with new additions published every month</div>
      <div>
        <ul className={styles.courses_list}>
          <il className={styles.selected_category}> Python </il>
          <il>  Excel </il>
          <il>  Web Development </il>
          <il>  JavaScript </il>
          <il>  Data Science </il>
          <il>  AWS Certification </il>
          <il>  Drawing </il>
        </ul>
      </div>
      <CoursesExplore courses={courses}
        title={title}
        description={description}
        isLoading={isLoading}
        errorMessage={errorMessage}
        searchQuery={searchQuery} />

    </div>



  );
};

export default CoursesHeader
