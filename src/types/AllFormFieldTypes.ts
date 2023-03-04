export interface ILoginFormFieldTypes {
    Username: string;
    Password: string;
}

export interface IAddNewStudentFormFieldTypes {
    'Student Name': string;
    'Academic Class': string;
}

type AllFormFieldTypes = ILoginFormFieldTypes & IAddNewStudentFormFieldTypes;

export default AllFormFieldTypes;
