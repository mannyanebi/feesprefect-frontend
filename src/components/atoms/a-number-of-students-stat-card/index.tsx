import React from 'react';
import StudentStatSvg from 'images/svg/students-stats.svg';

function NumberOfStudentsStat({ numberOfStudents }: { numberOfStudents: number }) {
    return (
        <div className="h-[12rem] w-[12rem] bg-white shadow-md p-4 flex flex-col items-center justify-center rounded-md space-y-4">
            <img src={StudentStatSvg} className="w-[3rem]" alt="student statistics" />
            <span className="font-bold text-[1.5rem]">{numberOfStudents}</span>
            <span className="text-gray-600 text-center text-sm">Total number active of Students</span>
        </div>
    );
}

export default NumberOfStudentsStat;
