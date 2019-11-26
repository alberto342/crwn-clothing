import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact patch={`${match.path}`} component={CollectionsOverview}/>
            <Route exact patch={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
};

export default ShopPage;