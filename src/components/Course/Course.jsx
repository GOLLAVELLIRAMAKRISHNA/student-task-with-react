import React, { useContext, useState } from 'react'
import { ContextStore } from '../../context/ContextStore'

const Course = () => {

    const { courses, setCourses } = useContext(ContextStore)
    const [newCourse, setNewCourse] = useState("")
    const [btn, setBtn] = useState(-1)


    const addCourse = () => {
        if (newCourse && !courses.includes(newCourse)) {
            setCourses([...courses, newCourse])
            setNewCourse("")
        }
    }

    const deleteCourse = (courseType) => {
        if (window.confirm("Are you sure want to delete this course")) {
            setCourses(prev => prev.filter(coursesType => coursesType !== courseType));
        }
    };

    const updateCourse = (courseType, key) => {
        setNewCourse(courseType)
        setBtn(key)
    }

    const saveUpdateCourse = () => {
        setCourses(prev =>
            prev.map((course, index) =>
                index === btn ? newCourse : course
            )
        );
        setNewCourse("")
        setBtn(-1)
    }

    return (
        <section className='container'>
            <h2>Manage Courses</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="New Course"
                    value={newCourse}
                    onChange={(e) => setNewCourse(e.target.value)}
                />
                {
                    btn >= 0 ? <button style={{ backgroundColor: 'rgb(225, 214, 0)' }} onClick={saveUpdateCourse}>Update Course Type</button> : <button onClick={addCourse}>Add Course Type</button>
                }
            </div>
            <ul className='list'>
                {courses.map((course, key) => (
                    <li key={key}>
                        <p>{course}</p>
                        <div className='icons'>
                            <i className="fa-solid fa-pen-to-square" onClick={() => updateCourse(course, key)}></i>
                            <i className="fa-solid fa-trash" onClick={() => deleteCourse(course)}></i>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Course