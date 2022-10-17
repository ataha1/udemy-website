import React from 'react'
import styles from './SideBar.module.css'
// import { slide as Menu } from 'react-burger-menu';
import { IoPlayCircle } from "react-icons/io5";
import { FaClock, FaPlayCircle, FaRegPlayCircle, FaRegFile, FaAngleLeft, FaAngleRight, FaFileDownload, FaInfinity, FaMobileAlt, FaTrophy } from "react-icons/fa";
function SideBar({ courseContent, course }) {

    let EstimatedTime = courseContent.curriculum_context.data.estimated_content_length_in_seconds;
    if (EstimatedTime % 3600 == 1800) EstimatedTime = Math.floor(EstimatedTime / 3600) + 0.5
    else EstimatedTime = Math.floor(EstimatedTime / 3600)

    let CodingExercise = 0
    let ArticleCnt = 0

    function SideBar_CodingExercise() {
        for (let i = 0; i < courseContent.curriculum_context.data.sections.length; i++) {
            for (let j = 0; j < courseContent.curriculum_context.data.sections[i].items.length; j++) {
                if (courseContent.curriculum_context.data.sections[i].items[j].is_coding_exercise) {
                    CodingExercise = CodingExercise + 1;
                }
            }
        }
        if (CodingExercise > 0) return <li><FaAngleLeft /><FaAngleRight />&nbsp;&nbsp;&nbsp; {CodingExercise} coding exercise  </li>
    }

    function SideBar_ArticleCnt() {
        for (let i = 0; i < courseContent.curriculum_context.data.sections.length; i++) {
            for (let j = 0; j < courseContent.curriculum_context.data.sections[i].items.length; j++) {
                let smth = (courseContent.curriculum_context.data.sections[i].items[j].icon_class)
                if (smth === "udi udi-file-o") {
                    ArticleCnt = ArticleCnt + 1;
                }
            }
        }
        return <li><FaRegFile />&nbsp;&nbsp;&nbsp;{ArticleCnt} articles </li>
    }

    let percent = Math.round((course.price.list_price.amount - course.price.discount_price.amount) * 100 / course.price.list_price.amount)
    return (
        <div className={styles.sidebar}>
            <div className={styles.PlayIcon}> <IoPlayCircle size={70} /></div>
            <div className={styles.PlayIcon2}> <IoPlayCircle size={70} /></div>
            <div className={styles.ClickIcon}><b>Preview this course</b> </div>

            <img
                src={course.image_480x270}
                alt={course.title}
                className={styles.SideBarImg}
            />

            <div className={styles.BodyStyle}>
                <div className={styles.SideBarPrice}>
                    <span className={styles.PreDiscount}>{course.price.list_price.price_string} </span>
                    <span className={styles.AfterDiscount}>{course.price.discount_price.price_string} </span>
                    <span className={styles.DiscountRatio}>{percent}% off</span>
                </div>
                <div className={styles.DaysRemaining}> <FaClock /><b> 5 Days</b> left at this price!</div>
                <button className={styles.CartButton}>Add to Cart</button>
                <button className={styles.PayButton}>Buy Now</button>
                <div className={styles.MoneyBack}>30-Day Money-Back Guarantee</div>
                <h3> This course includes:</h3>
                <ul className={styles.SummaryList}>
                    <li><FaRegPlayCircle />&nbsp;&nbsp;&nbsp;{EstimatedTime} hours on-demand video </li>
                    {SideBar_ArticleCnt()}
                    {SideBar_CodingExercise()}
                    <li><FaInfinity />&nbsp;&nbsp;&nbsp;Full lifetime access</li>
                    <li><FaMobileAlt />&nbsp;&nbsp;&nbsp;Access on mobile and TV</li>
                    <li><FaTrophy />&nbsp;&nbsp;&nbsp;Certificate of completion</li>
                </ul>
                <ul className={styles.ActionList}>
                    <li>Share</li>
                    <li>Gift this Course</li>
                    <li>Apply Coupon</li>
                </ul>
            </div>
            <div className={styles.SideBarFooter}>
                <h2> Training 5 or more people?</h2>
                <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <button className={styles.PayButton}>Try Udemy Business</button>
            </div>

        </div>

    )
}

export default SideBar
