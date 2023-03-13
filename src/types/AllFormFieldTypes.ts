export interface ILoginFormFieldTypes {
    Username: string;
    Password: string;
}

export interface IAddNewStudentFormFieldTypes {
    'Student Name': string;
    'Academic Class': string;
}

export interface IAddNewClassFormFieldTypes {
    'Academic Class Name': string;
}

type AllFormFieldTypes = ILoginFormFieldTypes & IAddNewStudentFormFieldTypes & IAddNewClassFormFieldTypes;

export default AllFormFieldTypes;
