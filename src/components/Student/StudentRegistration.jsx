import React, { useContext, useState } from 'react'
import { ContextStore } from '../../context/ContextStore'

const StudentRegistration = () => {

    const { courseTypes, courseOfferings, setRegistrations, registrations } = useContext(ContextStore)

    const [student, setStudent] = useState({
        name: "",
        mobile: "",
        mail: "",
        course: {}
    })
    const [filterType, setFilterType] = useState("");

    const onSubmitAction = (e) => {
        e.preventDefault()
        if (student.course) {
            if (!student.name || !student.mail || !student.mobile) {
                alert("Please fill your Details, It is requried.")
                return 1;
            } else {
                setRegistrations([...registrations, student])
                setStudent({
                    name: "",
                    mobile: "",
                    mail: "",
                    course: {}
                })
            }
        }
    }

    const onChangeAction = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const filteredOfferings = filterType
        ? courseOfferings.filter(offering => offering.type.startsWith(filterType))
        : courseOfferings;

    return (
        <>
            <section className='container form-container'>
                <form className='form' onSubmit={e => onSubmitAction(e)}>
                    <h2>Register Student</h2>

                    <input
                        type="text"
                        placeholder=" Enter Student Name"
                        value={student.name}
                        name='name'
                        onChange={(e) => onChangeAction(e)}
                    />

                    <input
                        type="email"
                        name='mail'
                        placeholder=" Enter Student Email"
                        value={student.mail}
                        onChange={(e) => onChangeAction(e)}
                    />

                    <input
                        type="number"
                        name='mobile'
                        placeholder=" Enter Mobile Number"
                        value={student.mobile}
                        onChange={(e) => onChangeAction(e)}
                    />

                    <select name='course' onChange={(e) => onChangeAction(e)}>
                        <option value="">Select Offering</option>
                        {courseOfferings.map((offering, idx) => (
                            <option key={idx} value={offering.course}>{offering.course}</option>
                        ))}
                    </select>
                    <button type='submit'>Register</button>
                </form>
                <div className='filter'>
                    <h2>Filter Offerings</h2>
                    <select onChange={(e) => setFilterType(e.target.value)}>
                        <option value="">All Types</option>
                        {courseTypes.map((type, key) => (
                            <option key={key} value={type}>{type}</option>
                        ))}
                    </select>
                    <ul className='list'>
                        {filteredOfferings.map((offering, idx) => (
                            <li key={idx}>{offering.course}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='container'>
                <h2>Registered Students</h2>
                <ul className='list'>
                    {registrations == null ?
                        <></> :
                        registrations.map((registration, key) => {
                            return (
                                (
                                    <li key={key}>
                                        <p>Dear <span style={{ fontWeight: "600" }}>{registration.name}</span> your successfully registered the <span style={{ fontWeight: "600" }}>{registration.course}</span> course.</p>
                                        <div className="icons">
                                            <i style={{ color: "green" }} className="fa-solid fa-check"></i>
                                        </div>
                                    </li>
                                )
                            )
                        })
                    }
                </ul>
            </section></>
    )
}

export default StudentRegistration