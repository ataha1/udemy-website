import React from 'react'
import styles from "./CourseReviewsStyle.module.css";
import Rating from "@mui/material/Rating";

function ProgressBar({ percentage, rate }) {

    const barStyle = {
        width: percentage + '%',
    };

    return (
        <div>
            <button type="button" className={`${styles.text_heading_xs} ${styles.review_summary_btn}`}>
                <span className={styles.bar_all}>
                    <span className={styles.bar_bg}>
                        <span className={styles.bar_percentage} style={barStyle}></span>
                    </span>
                </span>
                <span className={styles.bar_stars}>
                    <Rating
                        name="half-rating-read"
                        defaultValue={rate}
                        precision={0.5}
                        readOnly
                    />
                </span>
                <span className={`${styles.bar_perc} ${styles.text_sm}`}>
                    <span className={styles.prec}>{`${percentage}%`}</span>
                </span>
            </button>

        </div>
    )
}

export default ProgressBar
