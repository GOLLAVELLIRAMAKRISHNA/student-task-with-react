import React, { useContext, useState } from 'react'
import { ContextStore } from '../../context/ContextStore';

const CourseOffering = () => {

    const { courses, courseOfferings, courseTypes, setCourseOfferings } = useContext(ContextStore)

    const [btn, setBtn] = useState(-1)
    const [selectedCourseType, setSelectedCourseType] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    const createOffering = () => {
        if (selectedCourseType && selectedCourse) {
            const newOffering = { type: selectedCourseType, course: selectedCourse };
            const exists = courseOfferings.some(
                (o) => o.type === selectedCourseType && o.course === selectedCourse
            );
            if (!exists) {
                setCourseOfferings([...courseOfferings, newOffering]);
                setSelectedCourseType('');
                setSelectedCourse('');
            }
        }
    };

    const deleteOfferingCourse = (index) => {
        if (window.confirm("Are you sure want to delete this offering course")) {
            setCourseOfferings(prev => prev.filter((_,i) => i !== index));
        }
    }

    const updateCourseOffering = (offering, index) => {
        setSelectedCourseType(offering.type)
        setSelectedCourse(offering.course)
        setBtn(index)
    }

    const saveUpdateCourseOffering = () => {
        setCourseOfferings(prev =>
            prev.map((course, index) =>
                index === btn ? { type: selectedCourseType, course: selectedCourse } : course
            )
        );
        setSelectedCourseType("")
        setSelectedCourse("")
        setBtn(-1)
    }

    return (
        <section className='container'>
            <h2>Create Course Offerings</h2>
            <div className='input-container flex-wrap'>
                <div className='class'>
                    <select value={selectedCourseType} onChange={(e) => setSelectedCourseType(e.target.value)}>
                        <option value="">Select Course Type</option>
                        {courseTypes.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                        ))}
                    </select>
                    <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} style={{ marginLeft: '0.5rem' }}>
                        <option value="">Select Course</option>
                        {courses.map((course, i) => (
                            <option key={i} value={course}>{course}</option>
                        ))}
                    </select>
                </div>
                {
                    btn >= 0 ? <button style={{ backgroundColor: 'rgb(225, 214, 0)' }} onClick={saveUpdateCourseOffering}>Update Course Type</button> : <button onClick={createOffering}>Add Course Type</button>
                }
            </div>
            <ul className='list'>
                {courseOfferings.map((offering, index) => (
                    <li key={index} style={{ marginBottom: 10 }}>
                        <span>{offering.type} - {offering.course}</span>
                        <div className='icons'>
                            <i className="fa-solid fa-pen-to-square" onClick={() => updateCourseOffering(offering, index)}></i>
                            <i className="fa-solid fa-trash" onClick={() => deleteOfferingCourse(index)}></i>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CourseOffering