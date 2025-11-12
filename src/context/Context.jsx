import { useState } from 'react'
import { ContextStore } from './ContextStore'

const Context = ({ children }) => {

    const initialCourseTypes = ["Individual", "Group", "Special"];
    const initialCourses = ["Java Full Stack", "Python developer", "React Developer"];

    const [registrations, setRegistrations] = useState([]);
    const [courseTypes, setCourseTypes] = useState(initialCourseTypes);
    const [courseOfferings, setCourseOfferings] = useState([]);
    const [courses, setCourses] = useState(initialCourses);

    const contextValues = {
        courseTypes,
        courseOfferings,
        setCourseTypes,
        courses,
        setCourses,
        setCourseOfferings,
        registrations,
        setRegistrations
    }
    return (
        <ContextStore.Provider value={contextValues}>
            {children}
        </ContextStore.Provider>
    )
}

export default Context