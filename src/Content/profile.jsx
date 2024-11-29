import React from 'react';
import studentImage from './student.jpg';

function ProfileHeader() {
  return (
    <div className="circle-photo">
      <img src={studentImage} alt="Student" />
      <h3>Jannat Chaarou</h3>
    </div>
  );
}

function CardBody() {
  return (
    <div className="card-body">
      <p>Student ID: 12345</p>
      <p>Class: 202</p>
      <p>Section: A</p>
    </div>
  );
}

function GeneralInformation() {
  return (
    <div className="general-info">
      <h3>General Information</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>:</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roll Number</td>
            <td>:</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>Academic Year</td>
            <td>:</td>
            <td>2024-2025</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>:</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>:</td>
            <td>Islam</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>:</td>
            <td>O+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function OtherInformation() {
  return (
    <div className="other-info">
      <h3>Other Information</h3>
      <p>Hobbies: Drawing, Basketball</p>
      <p>Activities: Art,Community Service</p>
    </div>
  );
}

function Profil() {
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Student Profile Page Design</h2>
      <p style={{ textAlign: 'center' }}>A responsive student profile page design.</p>

      <div className="profile-container">
        <div className="card">
          <ProfileHeader />
          <CardBody />
        </div>

        <div className="details">
          <GeneralInformation />
          <OtherInformation />
        </div>
      </div>
    </section>
  );
}

export default Profil;
