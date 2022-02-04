import React from 'react';
import Header from '../../layout/Header'
import RecommendedTV from '../../layout/RecommendedTV'
import TopTV from '../../layout/TopTV'
import NetflixOrginalTV from '../../layout/NetflixOrginalTV'
import { requests } from '../../utils';
import { Helmet } from 'react-helmet-async';
export default function Index() {
    return (
        <>
            <Helmet>
                <title>Diziler - Netflix</title>
            </Helmet>
            <Header title={'TV Shows'} request={requests.fetchNetflixOrginalsTV} comp={'tv'} />
            <NetflixOrginalTV />
            <RecommendedTV />
            <TopTV />
        </>
    );
}
