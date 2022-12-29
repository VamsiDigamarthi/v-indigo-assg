import { HiLightBulb } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";

import { BsClockHistory } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsRecordBtn } from "react-icons/bs";

import "./index.css";

const WhyChoose = () => (
  <>
    <div className="why-card-main">
      <h1>Why Choose Us?</h1>
      <div className="why-card-sec">
        <div className="why-inner-element">
          <HiLightBulb className="why-icons" />
          <h3 className="why-heading">Expert Faculty</h3>
          <p>
            Our Faculty are subject matter expertise with practical experience
            They believe in #StudentFirst principle
          </p>
        </div>
        <div className="why-inner-element">
          <HiOutlineUserGroup className="why-icons" />
          <h3 className="why-heading text-center">Complete Success Package</h3>
          <p>
            Leading Exam Prep Destination with Video classes, Live sessions,
            Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
            Webinars.
          </p>
        </div>
        <div className="why-inner-element">
          <BsRecordBtn className="why-icons" />
          <h3 className="why-heading">Placements</h3>
          <p>
            Resume building workshops, mock interviews and placement drives will
            help you impress the top employers and get the dream job.
          </p>
        </div>
      </div>
    </div>

    <div className="why-down">
      <div className="another-iconss">
        <div className="all-icon-grids">
          <h3>Levels</h3>
          <div className="another-icons">
            <MdMenuBook />
            <p>Three (13 papers)</p>
          </div>
        </div>
        <div className="all-icon-grids">
          <h3>Duration</h3>
          <div className="another-icons">
            <BsClockHistory />
            <p>6-30 months</p>
          </div>
        </div>
      </div>
      <div className="another-iconss">
        <div className="all-icon-grids">
          <h3>Exams</h3>
          <div className="another-icons">
            <AiOutlineLaptop />
            <p>Quarterly (online)</p>
          </div>
        </div>
        <div className="all-icon-grids">
          <h3>Exemptions</h3>
          <div className="another-icons">
            <BsFillCalendarCheckFill />
            <p>Upto 9 papres</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WhyChoose;
