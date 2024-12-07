import React from 'react'
import AddImage from './AddImage';
import { InfoTitle, InfoInput } from './Content';
import { Button } from './Buttons';

function GeneralInfo() {
    return (
        <>
            <InfoTitle className="info-title" title="General Information" />
            <div className="position">
                <div className="name-image">
                    <div className="name-container">
                        <InfoInput id="first-name" placeholder="First Name" type="text" />
                        <InfoInput id="last-name" placeholder="Last Name" type="text" />
                    </div>
                    <AddImage />
                </div>
                <InfoInput placeholder="Professional Title" type="text" />
                <InfoInput placeholder="Description" type="text" />
                <InfoInput placeholder="Phone Number" type="number" />
                <InfoInput placeholder="Email" type="email" />
                <InfoInput placeholder="Address" type="text" />
            </div>
        </>
    )
}

function Education() {
    return (
        <>
        <InfoTitle className="info-title" title="Education" />
        <div className="position">
            <InfoInput placeholder="Degree" type="text" />
            <InfoInput placeholder="University or School Name" type="text" />
            <InfoInput placeholder="Course" type="text" />
            <InfoInput placeholder="From" type="text" />
            <InfoInput placeholder="To" type="text" />
        </div>
        <div className="btn-container">
            <Button class="btn" name="add" />
            <Button class="btn" name="delete" />
        </div>
        </>
    )
}

function WorkExperience() {
    return (
        <>
        <InfoTitle className="info-title" title="Work Experience" />
        <div className="position">
            <InfoInput placeholder="Job Title" type="text" />
            <InfoInput placeholder="Company Name" type="text" />
            <InfoInput placeholder="City" type="text" />
            <InfoInput placeholder="From" type="text" />
            <InfoInput placeholder="To" type="text" />
            <InfoInput placeholder="Description" type="text" />
        </div>
        <div className="btn-container">
            <Button class="btn" name="add" />
            <Button class="btn" name="delete" />
        </div>
        </>
    )
}

export {
    GeneralInfo,
    Education,
    WorkExperience,
}