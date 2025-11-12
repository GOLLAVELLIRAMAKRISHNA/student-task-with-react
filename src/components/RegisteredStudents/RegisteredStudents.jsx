import React, { useContext } from 'react'
import { ContextStore } from '../../context/ContextStore'

const RegisteredStudents = () => {

    const { registrations } = useContext(ContextStore)

    return (
        <section className='container'>
            <h2>Registered Students</h2>
            <ul className='list'>
                {registrations == null ?
                    <></> :
                    registrations.map((registration, key) => (
                        <li key={key}>
                            <p>Dear <span style={{fontWeight:"600"}}>{registration.name}</span> your successfully registered the <span style={{fontWeight:"600"}}>{registration.course}</span> course.</p>
                            <div className="icons">
                            <i style={{color:"green"}} className="fa-solid fa-check"></i>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default RegisteredStudents