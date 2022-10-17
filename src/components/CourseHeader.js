import React from 'react'
import styles from "./CourseHeaderStyle.module.css";
import { IoChevronForwardSharp, IoPlayCircleOutline, IoAlertCircle, IoGlobeOutline, IoLogoClosedCaptioning } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import Rating from "@mui/material/Rating";



function CourseHeader({ course }) {
    const rating = Math.round(course.rating * 10) / 10;

    return (
        <div>
            <div className={styles.header_container}>
                <div className={styles.inner_container}>
                    <div className={styles.header_nav}>
                        <div className={styles.breadcrumb}>
                            <Link to='/courses/development/' className={styles.text_heading_sm}>
                                Development
                            </Link>
                            <IoChevronForwardSharp size={10} className={styles.breadcrumb_icon} />
                            <Link to='/courses/development/programming-languages/' className={styles.text_heading_sm}>
                                Programming Languages
                            </Link>
                            <IoChevronForwardSharp size={10} className={styles.breadcrumb_icon} />
                            <Link to='/topic/python/' className={styles.text_heading_sm}>
                                Python
                            </Link>
                        </div>
                    </div>
                    <div className={styles.course_preview}>
                        <div className={styles.preview_wrapper}>
                            <div className={styles.preview_actions}>
                                <button type="button" className={`${styles.text_heading_md} ${styles.preview_btn}`}>
                                    <span className={styles.preview_img}>
                                        <img src={course.image_240x135} className={styles.course_img}>

                                        </img>
                                    </span>
                                    <span className={styles.play_overlay}>
                                        <IoPlayCircleOutline size={22} className={styles.play_icon} />
                                    </span>
                                    <span className={`${styles.text_heading_md} ${styles.preview_text}`}>Preview this course</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.course_intro} ${styles.text_sm}`}>
                        <h1 className={`${styles.text_heading_xl} ${styles.intro_title}`}>{course.title}</h1>
                        <div className={`${styles.text_md} ${styles.intro_headline}`}>{course.headline}</div>
                        <div className={styles.intro_rating}>
                            <a href="#reviews" className={styles.intro_rating_link}>
                                <span className={styles.intro_rating_stars}>
                                    <span className={`${styles.text_heading_sm} ${styles.rate_no}`}>{rating}</span>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </span>
                                <span>{`(${course.num_reviews} ratings)`}</span>
                            </a>
                            <div className={styles.enrollment} >{`${course.num_reviews} students`}</div>
                        </div>
                        <div className={styles.course_instructors}>
                            <span className={styles.text_sm}>Created by </span>
                            <a href="/" className={`${styles.instr_btn} ${styles.text_sm}`}>{course.visible_instructors.map((instructor) => instructor.display_name).join(", ")}</a>
                        </div>
                        <div className={styles.extra_info}>
                            <div className={styles.info_element}>
                                <IoAlertCircle size={10} class={styles.info_icon} />

                                <span>{`Last updated ${course.last_update_date.substr(5, 6)}/${course.last_update_date.substr(0, 3)}`}</span>
                            </div>
                            <div className={styles.info_element}>
                                <IoGlobeOutline size={10} class={styles.info_icon} />

                                <span>{course.locale.simple_english_title}</span>
                            </div>
                            <div className={styles.info_element}>
                                <IoLogoClosedCaptioning size={10} class={styles.info_icon} />

                                <span>{course.caption_languages.join(", ")}</span>

                            </div>
                        </div>
                    </div>


                </div>




            </div>
            <div className={styles.nav_bottom}>
                <div className={styles.shortcut_nav}>
                    <div className={styles.nav_container}>

                        <button type="button" className={`${styles.text_heading_sm} ${styles.nav_btn}`}>Overview</button>
                        <button type="button" className={`${styles.text_heading_sm} ${styles.nav_btn}`}>Curriculum</button>
                        <button type="button" className={`${styles.text_heading_sm} ${styles.nav_btn}`}>Instructor</button>
                        <button type="button" className={`${styles.text_heading_sm} ${styles.nav_btn}`}>Reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHeader
