import React from 'react';
import Preloader from '../common/preloader';

function withSuspense(Component) {
   return (props) => {
        return <React.Suspense fallback={Preloader}>
            <Component { ...props} />
        </React.Suspense>
    }
}
export default withSuspense