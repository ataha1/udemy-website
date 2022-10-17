import React from "react";
import { Link } from 'react-router-dom'

import CourseStyle from "./CourseStyle.module.css";
import Rating from "@mui/material/Rating";
import styles from "./SideBar.module.css"
function Course({ course }) {
  const rating = Math.round(course.rating * 10) / 10;
  //to Get what you will learn 
  const courseobjectives = course.objectives_summary;
  let res = []
  for (let i = 0; i < courseobjectives.length; i++) {
    res[i] = <li className={CourseStyle.LearnList}>  {courseobjectives[i]} </li>;
  }
  //To get whether there is subtitles or not 
  function subtitles() {
    if (course.has_closed_caption) return " . Subtitles"
  }
  //To get last update date 
  let date = course.last_update_date
  function Month() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = parseInt(date.substring(5, 7))
    return (months[month - 1])
  }
  let Year = parseInt(date.substring(0, 5))

  const Instructors = () => {

    return course.visible_instructors.map((instructor) => instructor.display_name).join(", ");
  };

  function bestseller() {
    if (course.bestseller_badge_content)
      return <div className={`${CourseStyle.bestseller} ${CourseStyle.textHeadingXS}`}>Bestseller</div>;
    else
      return "";
  }

  return (

    <div className={CourseStyle.course}>
      <div className={CourseStyle.popup}>
        <h1>{course.title}</h1>
        <div className={CourseStyle.Date}>Updated <b>{Month()} {Year} </b></div>
        <div className={CourseStyle.LearnList}>{course.headline}</div>
        <div className={CourseStyle.AddInfo}>{course.content_info} . {course.instructional_level}{subtitles()}</div>
        <ul className={CourseStyle.FullList} >{res}</ul>
        <button className={styles.CartButton} >Add to Cart</button>
      </div>
      <Link to={`/course/${course.url.slice(8)}`}>
        <img
          src={course.image_480x270}
          alt={course.title}
          className={CourseStyle.courseImg}
        />
        <h3 className={CourseStyle.textHeadingMD}> {course.title}</h3>
        <p className={`${CourseStyle.instructor} ${CourseStyle.textXS}`}>
          {Instructors()}
        </p>
        <div className={CourseStyle.rate}>
          <span className={`${CourseStyle.rateNo}`}>{rating}</span>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className={CourseStyle.price}>
          <h3
            className={`${CourseStyle.textHeadingMD} ${CourseStyle.price}`}
          >{`${course.price.discount_price.price_string}`}</h3>
          <p className={CourseStyle.textSM}><s>{`${course.price.list_price.price_string}`}</s></p>
        </div>
        {bestseller()}
      </Link>

    </div>
  );
}

export default Course;
