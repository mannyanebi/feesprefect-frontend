export interface LoginFormFieldTypes {
    Username: string;
    Password: string;
}

export interface AddNewStudentFormFieldTypes {
    'Student Name': string;
    'Academic Class': string;
    'Date of Birth': string;
    'Parent/Guardian Name': string;
    'Parent/Guardian Phone Number': number;
    'Home Address': string;
}

export interface AddNewClassFormFieldTypes {
    'Academic Class Name': string;
}

export interface AddPaymentFormFieldTypes {
    'School Fee': string;
    'Amount Paid': number;
}

export interface PromoteClassStudentsFormTypes {
    'Previous Academic Class': string;
    'New Academic Class': string;
}

type AllFormFieldTypes = LoginFormFieldTypes &
    AddNewStudentFormFieldTypes &
    AddNewClassFormFieldTypes &
    AddPaymentFormFieldTypes &
    PromoteClassStudentsFormTypes;

export default AllFormFieldTypes;
