import React from "react";
import CourseCard from "./CourseCard";

const AllCard = () => {
  const courses = [
    {
      image:
        "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg",
      category: "Web Design",
      rating: "4.9",
      title: "Web Design & Development",
      classesCount: 25,
      studentsCount: 185,
      price: "560.00",
      instructorName: "J. Morgan",
      instructorAvatar:
        "https://img.freepik.com/free-vector/hand-drawn-charles-dickens-illustration_23-2150940218.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg",
      category: "UI/UX Design",
      rating: "5.0",
      title: "Wireframing & Prototyping",
      classesCount: 8,
      studentsCount: 400,
      price: "160.00",
      instructorName: "Jordan Re",
      instructorAvatar:
        "https://img.freepik.com/premium-vector/stylish-vector-writer-character-with-pen-vector-illustration_1325322-23234.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-250.jpg",
      category: "Data Science",
      rating: "4.9",
      title: "Python For Data Science",
      classesCount: 18,
      studentsCount: 160,
      price: "432.00",
      instructorName: "Alex Taylor",
      instructorAvatar:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-poetry-illustration_23-2149296603.jpg",
    },
  ];
  return (
    <div className="courseCardSection">
      <div className="container">
        <div className="topContent">
          <h2 className="heading">All Courses</h2>
          <p className="subHeading">
            Explore our wide range of courses and enhance your skills with
            expert-led training.
          </p>
        </div>
        <div className="courseCards">
          {courses.map((props, i) => {
            return (
              <CourseCard
                key={i}
                image={props.image}
                category={props.category}
                rating={props.rating}
                title={props.title}
                classesCount={props.classesCount}
                studentsCount={props.studentsCount}
                courseFee={props.price}
                instructor={props.instructorName}
                instructorAvtar={props.instructorAvatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCard;
