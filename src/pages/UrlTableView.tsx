import React from 'react';
import { useGetAllURLSQuery } from 'src/app/URLService';
import AddNewURL from 'src/components/AddNewURL/AddNewURL';
import UrlList from 'src/components/UrlList/UrlList';

const UrlTableView = () => {
    const { data = [], isFetching, isError } = useGetAllURLSQuery();

    return (
        <div >
            <div>
                <AddNewURL />
            </div>
            <UrlList URLS={data} />
            {isError && <h2>Something go wrong</h2>}
        </div>
    );
};

export default UrlTableView;
