import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">3-8 ELA Assessment Data</li>
            <li className="list-group-item">3-8 Math Assessment Data</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">Number of Students that are Women: {props.school.NUM_FEMALE}</li>
            <li className="list-group-item"></li>
            <li className="list-group-item">Number of Students that are English Language Learners: {props.school.NUM_ELL}</li>
            <li className="list-group-item"></li>
            <li className="list-group-item">Number of Students that are White: {props.school.NUM_WHITE}</li>
            <li className="list-group-item"></li>
            <li className="list-group-item">Number of Students that are Hispanic: {props.school.NUM_HISP}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
