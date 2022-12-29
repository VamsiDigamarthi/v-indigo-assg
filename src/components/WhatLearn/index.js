import "./index.css";

const WhatLearn = () => (
  <div className="what-main-main">
    <h1 className="text-center">What will you Learn in ACCA?</h1>
    <div className="what-ul-main">
      <div className="what-ul-card add-width">
        <div className="ul-dark">
          <h4>Knowledge Level</h4>
        </div>
        <ul>
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
        <h6 className="ul-dark">3 papers</h6>
      </div>
      <div className="what-ul-card">
        <div className="ul-dark">
          <h4>Professional Level</h4>
        </div>

        <ul>
          <h6 className="mt-2 mb-2">Compulsory</h6>
          <li>SBL - Strategic Business Leader</li>
          <li>SBL - Strategic Business Reportin</li>
          <h6 className="mt-2 mb-2">Two out of the following</h6>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <h6 className="ul-dark">4 papers</h6>
      </div>
      <div className="what-ul-card">
        <div className="ul-dark">
          <h4>Skill Level</h4>
        </div>
        <ul>
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
        <h6 className="ul-dark">6 papers</h6>
      </div>
    </div>
  </div>
);

export default WhatLearn;
