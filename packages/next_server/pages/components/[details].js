import React from 'react';
import { useRouter } from 'next/router';

function Details(props) {
    const router = useRouter();

    return (
        <div>
            this is the test dynamic router {router.query.details}
        </div>
    );
}

export default Details;