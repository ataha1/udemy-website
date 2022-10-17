import React from 'react'
import styles from "./CourseReviewsStyle.module.css";
import Rating from "@mui/material/Rating";
import ProgressBar from './ProgressBar';
import Review from "./Review"
import { IoSearchSharp, IoChevronDownSharp } from 'react-icons/io5'

function CourseReviews({ reviews }) {
    // const myArray.filter(x => x.id === '45');
    const average_rate = Math.round(reviews.averageRating * 10) / 10;
    const total_rate_count = () => {
        let count = 0;
        for (let i = 0; i < 5; i++) {
            count += reviews.ratingDistribution[i].count;
        }
        return count;
    };
    const count_1 = Math.round((reviews.ratingDistribution[0].count / total_rate_count() * 100));
    const count_2 = Math.round((reviews.ratingDistribution[1].count / total_rate_count() * 100));
    const count_3 = Math.round((reviews.ratingDistribution[2].count / total_rate_count() * 100));
    const count_4 = Math.round((reviews.ratingDistribution[3].count / total_rate_count() * 100));
    const count_5 = Math.round((reviews.ratingDistribution[4].count / total_rate_count() * 100));

    console.log('count1', total_rate_count());
    const reviewsList = () => {
        return reviews.results.map((review) => <Review key={review.id} review={review} />);
    };

    return (
        <div className={styles.course_reviews}>
            <h2 className={`${styles.text_heading_xl} ${styles.reviews_title}`}> Student feedback</h2>
            <div className={styles.review_summary}>
                <div className={styles.rating}>
                    <div className={`${styles.text_heading_xxxl} ${styles.average_rate}`}>{average_rate}</div>
                    <div className={styles.average_stars}>
                        <Rating
                            name="half-rating-read"
                            defaultValue={average_rate}
                            precision={0.5}
                            readOnly
                        />
                    </div>
                    <p className={`${styles.text_heading_xl} ${styles.average_rating_text}`}>Course Rating</p>

                </div>

                <div className={styles.review_description}>
                    <ProgressBar percentage={count_5} rate='5' />
                    <ProgressBar percentage={count_4} rate='4' />
                    <ProgressBar percentage={count_3} rate='3' />
                    <ProgressBar percentage={count_2} rate='2' />
                    <ProgressBar percentage={count_1} rate='1' />
                </div>
            </div>
            <div className={styles.reviews}>
                <h2 className={styles.text_heading_xl}>Reviews</h2>
                <div className={styles.reviews_search}>
                    <div className={styles.reviews_search_filter}>
                        <div className={styles.form_group}>
                            <form className={styles.text_input_form}>
                                <input name="search-text"
                                    id="Search--text"
                                    type="search"
                                    value=""
                                    onChange="" placeholder="Search reviews"
                                    className={`${styles.text_input} ${styles.text_md}`} />
                                <button type="submit" className={`${styles.btn} ${styles.text_heading_md} ${styles.btn_icon}`}>
                                    <IoSearchSharp size={22} />
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className={styles.ratings_filter}>
                        <div className={styles.form_group}>
                            <div className={styles.select_container}>
                                <select required="" aria-invalid="false" id="u125-form-group--41" className={`${styles.select} ${styles.text_md}`}>
                                    <option value="">All ratings</option>
                                    <option value="5">Five stars</option>
                                    <option value="4">Four stars</option>
                                    <option value="3">Three stars</option>
                                    <option value="2">Two stars</option>
                                    <option value="1">One star</option>
                                </select>
                                <div className={styles.select_icon}>
                                    <IoChevronDownSharp size={22} className={styles.select_down_icon} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.review_list}>
                {reviewsList()}
            </div>

        </div>
    )
}

export default CourseReviews
