import React from 'react'
import styles from "./CourseReviewsStyle.module.css";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import Rating from "@mui/material/Rating";
import { IoThumbsUpSharp, IoThumbsDownSharp } from 'react-icons/io5'




function Review({ review }) {
    return (

        <div className={styles.review_container}>
            <div className={styles.author_avatar}>
                <InitialsAvatar name={review.user.display_name} className={`${styles.avatar} ${styles.text_heading_md}`} />
            </div>
            <div className={styles.review_content}>
                <div className={styles.review_name_container}>
                    <div className={`${styles.text_heading_md} ${styles.review_name}`}>{review.user.public_display_name}</div>
                </div>
                <div className={styles.review_rating}>
                    <Rating
                        className={styles.review_rating_stars}
                        name="half-rating-read"
                        defaultValue={review.rating}
                        precision={0.5}
                        readOnly
                    />
                    <span className={`${styles.text_sm} ${styles.review_date}`}>{review.created_formatted_with_time_since}</span>
                </div>
                <div className={`${styles.text_sm} ${styles.review_comment}`} dangerouslySetInnerHTML={{ __html: review.content_html }} >
                    {/* {review.content_html} */}
                </div>
                <div className={styles.review_feedback}>
                    <div>
                        <p className={styles.feedback_title} >Was this review helpful?</p>
                        <div className={styles.feedback_actions}>
                            <button type="button" value="yes" className={`${styles.text_heading_sm} ${styles.feedback_action_btn}`}>
                                <IoThumbsUpSharp size={22} />
                            </button>
                            <button type="button" value="no" className={`${styles.text_heading_sm} ${styles.feedback_action_btn}`}>
                                <IoThumbsDownSharp size={22} />
                            </button>
                            <button type="button" className={`${styles.text_sm} ${styles.feedback_report}`}>
                                <span>Report</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Review
