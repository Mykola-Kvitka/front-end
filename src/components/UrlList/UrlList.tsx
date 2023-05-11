import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { URLViewModel } from 'src/features/Models/Models';
import UrlView from '../UrlView/UrlView';

type URLViewModelProps = {
    URLS: URLViewModel[];
};

const UrlList = ({ URLS }: URLViewModelProps) => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
            maxWidth: 100,
        },
        {
            field: 'originalURL',
            headerName: 'Original URL',
            flex: 1,
        },
        {
            field: 'shortURL',
            headerName: 'Short URL',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Action',
            renderCell: (params: GridRenderCellParams<URLViewModel>) => (
                <UrlView urls={params.row} />
            ),
            width: 100,
        },

    ];


    return (
        <div >
            <DataGrid
                autoHeight
                rows={URLS}
                columns={columns}
                getRowId={(row: URLViewModel) => row.id}
                pageSizeOptions={[10, 25, 50, 100]}
            />
        </div>
    );
};

export default UrlList;
