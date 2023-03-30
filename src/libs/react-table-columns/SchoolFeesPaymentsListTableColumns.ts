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
        accessor: 'schoolFee.session.term',
    },
    {
        Header: 'School Fees Amount',
        accessor: 'schoolFee.amount',
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
