import React, { useState, useEffect } from 'react'

import "./App.css";

import CoursePage from './components/CoursePage';
import { NavBar } from './components/NavBar';
import Header from './components/Header';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  // const { header, description, courses, reviews, contents } = Database();
  const [course, setCourse] = useState(null);
  const [review, setReview] = useState(null);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParam] = useSearchParams();


  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3000/courses ")
      .then((res) => res.json())
      .then((data) => {

        setCourse(data.summary[0]);
        setReview(data.review);
        setContent(data.data);
        setIsLoading(false)

      }).catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  }, []);

  const header = course ? course.header : "";
  const description = course ? course.description : "";
  const courses = course ? course.items : [];
  const reviews = review ? review : [];
  const contents = content ? content : [];

  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<Header
          courses={courses}
          title={header}
          description={description}
          isLoading={isLoading}
          errorMessage={errorMessage}
          searchQuery={searchParam.get("searchQuery")}
        />} />
        <Route path='/course/:courseURL' element={<CoursePage
          courses={courses}
          reviews={reviews}
          contents={contents}
        />} />

      </Routes>
      <Footer />


    </div>
  );
}

export default App;
