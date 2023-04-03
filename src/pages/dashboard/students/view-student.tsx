import api from 'api';
import SectionLoader from 'components/atoms/a-section-spinner';
import Toast from 'components/atoms/a-toast';
import StudentDetailsCard from 'components/organisms/o-student-details-card';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewStudent() {
    const { studentUUID } = useParams();
    const [studentData, setStudentData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const fetchAndSetStudentData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get(`students/${studentUUID}`);
            if (response.status === 200) {
                setStudentData(response.data);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
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

    if (loading) {
        return <SectionLoader />;
    }

    return <StudentDetailsCard studentUUID={studentUUID as string} studentData={studentData} />;
}

export default ViewStudent;
