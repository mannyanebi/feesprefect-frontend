const headerColumns = [
    {
        Header: 'Student Name',
        accessor: 'student.name',
    },
    {
        Header: 'Class',
        accessor: 'schoolFee.academicClass.name',
    },
    {
        Header: 'Session',
        accessor: 'schoolFee.session.name',
    },
    {
        Header: 'Term',
        accessor: 'schoolFee.term',
    },
    {
        Header: 'Amount Paid',
        accessor: 'amountPaid',
    },
    {
        Header: 'Date',
        accessor: 'paymentDate',
    },
    {
        Header: 'Is Payment Complete',
        accessor: 'isPaymentComplete',
    },
];

export default headerColumns;
