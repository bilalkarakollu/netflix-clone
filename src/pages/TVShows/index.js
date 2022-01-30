import React from 'react';
import Header from '../../layout/Header'
import RecommendedTV from '../../layout/RecommendedTV'
import TopTV from '../../layout/TopTV'
import NetflixOrginalTV from '../../layout/NetflixOrginalTV'
import { requests } from '../../utils';
export default function Index() {
    return (
        <>
            <Header title={'TV Shows'} request={requests.fetchNetflixOrginalsTV} comp={'tv'} />
            <NetflixOrginalTV />
            <RecommendedTV />
            <TopTV />
        </>
    );
}
