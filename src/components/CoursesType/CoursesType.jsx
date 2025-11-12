import React, { useContext, useState } from 'react'
import { ContextStore } from '../../context/ContextStore'

const CoursesType = () => {

    const { courseTypes, setCourseTypes } = useContext(ContextStore)

    const [newCourseType, setNewCourseType] = useState("")
    const [btn, setBtn] = useState(-1)

    const addCourseType = () => {
        if (newCourseType && !courseTypes.includes(newCourseType)) {
            setCourseTypes([...courseTypes, newCourseType])
            setNewCourseType("")
        }
    }

    const deleteCourseType = (courseType) => {
        if (window.confirm("Are you sure want to delete this " + courseType)) {
            setCourseTypes(prev => prev.filter(coursesType => coursesType !== courseType));
        }
    };

    const updateCourseType = (courseType, key) => {
        setNewCourseType(courseType)
        setBtn(key)
    }

    const saveUpdateCourseType = () => {
        setCourseTypes(prev =>
            prev.map((course, index) =>
                index === btn ? newCourseType : course
            )
        );
        setNewCourseType("")
        setBtn(-1)
    }

    return (
        <section className='container'>
            <h2>Manage Course Type</h2>
            <div className='input-container'>
                <input
                    type="text"
                    placeholder="New Course Type"
                    value={newCourseType}
                    onChange={(e) => setNewCourseType(e.target.value)}
                />
                {
                    btn >= 0 ? <button style={{ backgroundColor: 'rgb(225, 214, 0)' }} onClick={saveUpdateCourseType}>Update Course Type</button> : <button onClick={addCourseType}>Add Course Type</button>
                }
            </div>
            <ul className='list'>
                {courseTypes.map((courseType, key) => (
                    <li key={key}>
                        <p>{courseType}</p>
                        <div className='icons'>
                            <i className="fa-solid fa-pen-to-square" onClick={() => updateCourseType(courseType, key)}></i>
                            <i className="fa-solid fa-trash" onClick={() => deleteCourseType(courseType)}></i>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CoursesType