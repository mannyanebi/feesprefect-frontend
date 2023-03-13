import api from 'api';
import Toast from 'components/atoms/a-toast';
import StudentDetailsCard from 'components/organisms/o-student-details-card';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewStudent() {
    const { studentUUID } = useParams();
    const [studentData, setStudentData] = useState<any>();

    const fetchAndSetStudentData = useCallback(async () => {
        try {
            const response = await api.get(`students/${studentUUID}`);
            if (response.status === 200) {
                setStudentData(response.data);
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                errorMessage = error.response.data.message;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    }, []);

    useEffect(() => {
        fetchAndSetStudentData();
    }, [fetchAndSetStudentData]);
    return <StudentDetailsCard studentData={studentData} />;
}

export default ViewStudent;
