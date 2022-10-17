import React from 'react'
import styles from "./CoursePageStyle.module.css";
import { Link, useNavigate, useParams } from 'react-router-dom'
import CourseReviews from './CourseReviews';
import CourseHeader from './CourseHeader';
import SideBar from './SideBar';
import WhatToLearn from './WhatToLearn';
import AccordtionBar from './AccordtionBar';

function CoursePage({ courses, reviews, contents }) {
    const navigate = useNavigate();
    const { courseURL } = useParams();

    const course = courses.find(course => course.url === `/course/${courseURL}/`);

    const courseId = parseInt(course.id);

    console.log(courseId);
    const courseReview = reviews.find(review => parseInt(review.id) === courseId);
    const courseContent = contents.find(content => parseInt(content.id) === courseId);

    console.log(courseReview);
    console.log(courseContent);

    return (
        <div>
            <div className={styles.main_content}>
                <div className={styles.landing_page}>
                    <SideBar courseContent={courseContent} course={course} />

                    <CourseHeader course={course} />
                    <div className={styles.landing_page_body}>
                        <div className={styles.landing_page_content}>

                            <div className={styles.component_margin}>
                                <WhatToLearn course={course} />
                            </div>
                            <div className={styles.component_margin}>
                                <AccordtionBar coursecontent={courseContent} course={course} />
                            </div>

                            <div className={styles.component_margin}>
                                <CourseReviews reviews={courseReview} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage
