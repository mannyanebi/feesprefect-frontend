// import React, { useMemo } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { checkAuthToken } from 'utils/auth-cookies';

// function WithDashboard(WrappedComponent: any) {
//     // const navigate = useNavigate();
//     const hasAuthorization = checkAuthToken();

//     const WithDashboardHOCComponent = useMemo(() => {
//         // if (hasAuthorization) {
//         return function WithDashboardComponent({ ...props }) {
//             return <WrappedComponent {...props} />;
//         };
//         // }
//         // navigate('/login');
//         // return null;
//     }, [WrappedComponent, hasAuthorization]);

//     return WithDashboardHOCComponent;
// }

// export default WithDashboard;

import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { checkAuthToken } from 'utils/auth-cookies';

function WithDashboard(WrappedComponent: any) {
    // const navigate = useNavigate();
    const hasAuthorization = checkAuthToken();
    if (hasAuthorization) {
        // eslint-disable-next-line react/no-unstable-nested-components
        return function WithDashboardComponent({ ...props }) {
            return <WrappedComponent {...props} />;
        };
    }
    window.location.replace(`${window.location.origin}/login`);
}

export default WithDashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { checkAuthToken } from 'utils/auth-cookies';

// function WithDashboard(WrappedComponent: any) {
//     const hasAuthorization = checkAuthToken();
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const navigate = useNavigate();
//     console.log(hasAuthorization);
//     // eslint-disable-next-line react/no-unstable-nested-components
//     return function WithDashboardComponent({ ...props }) {
//         return <WrappedComponent {...props} />;
//     };
// }

// export default WithDashboard;
