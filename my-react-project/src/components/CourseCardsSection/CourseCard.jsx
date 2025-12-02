import React from "react";
import "./CourseCard.css";
import { BookOpen, Users, Star } from "lucide-react";

const CourseCard = (elem) => {
  return (
    <div className="courseCardHolder">
      <div className="courseCard">
        <div className="courseCardImage">
          <img src={elem.image} alt={elem.title} />
        </div>

        <div className="courseCardContent">
          <div className="courseCardCategoryHolder">
            <div className="courseCardCategory">
              <span className="courseCardCategoryDot" />
              {elem.category}
            </div>

            <div className="courseCardRating">
              <Star size={14} className="starIcon" />
              <span>{elem.rating}</span>
            </div>
          </div>

          <h2 className="courseCardTitle">{elem.title}</h2>

          <div className="courseInfo">
            <div className="courseInfoItem">
              <BookOpen size={18} />
              <span>{elem.classesCount} Classes</span>
            </div>

            <div className="courseInfoItem">
              <Users size={18} />
              <span>{elem.studentsCount} Students</span>
            </div>
          </div>

          <div className="courseCardDivider" />

          <div className="courseCardFooter">
            <div className="courseCardPrice">${elem.courseFee}</div>

            <div className="courseCardInstructor">
              <div className="instructorAvatar">
                <img src={elem.instructorAvtar} alt={elem.instructor} />
                <span className="onlineDot" />
              </div>
              <span className="instructorName">{elem.instructor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
