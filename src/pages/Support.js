import React,{useState} from 'react'
import MaterialTable from 'material-table'
export default function Support() {

//   const [columns, setColumns] = useState([
//     { title: 'Name', field: 'name' },
//     { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
//     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//     {
//       title: 'Birth Place',
//       field: 'birthCity',
//       lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//     },
//     {
//         title: 'Avatar',
//         field: 'avatar',
//         render: rowData => (
//           <img
//             style={{ height: 36, borderRadius: '50%' }}
//             src={rowData.avatar}
//           />
//         ),
//       }
//   ]);

  const [data, setData] = useState([
    { id: 1, category_name: 'Mehmet', category_description: 'Baran',picture:"https://reqres.in/img/faces/1-image.jpg" },
    { id:2,  category_name: 'Zerya Betül', category_description: 'Baran',picture:"https://reqres.in/img/faces/3-image.jpg" },


 

    

  ]);
    return (
        <div className='container'>
            <h1>Support</h1>
            <div className='row'>
                <div className='col'>
                <MaterialTable
                    title="Category"
                    columns={[
                        { title: 'Id', field: 'id' },
                        {
                        title: 'Picture',
                        field: 'picture',
                        editComponent: rowData => (
                            <input type='file'/>
                            
                        ),
                        render: rowData => (
                            <img
                            style={{ height: 36, borderRadius: '50%' }}
                            src={rowData.picture}
                            />
                            
                        ),
                        },
                    
                        { title: 'Category Name', field: 'category_name' },
                        { title: 'Category Description', field: 'category_description' },
                        
                    ]}
    //   data={query =>
    //     new Promise((resolve, reject) => {
    //       let url = 'https://reqres.in/api/users?'
    //       url += 'per_page=' + query.pageSize
    //       url += '&page=' + (query.page + 1)
    //       fetch(url)
    //         .then(response => response.json())
    //         .then(result => {
    //           resolve({
    //             data: result.data,
    //             page: result.page - 1,
    //             totalCount: result.total,
    //           })
    //         })
    //     })
    //   }
                        data={data}
                        
                        editable={{
                                onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                    setData([...data, newData]);

                                    resolve();
                                    }, 1000)
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);
                        
                                    resolve();
                                    }, 1000)
                                }),
                                onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                    const dataDelete = [...data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);
                                    
                                    resolve()
                                    }, 1000)
                                }),
                            }}
    //   columns={columns}
    //   data={data}
    //   editable={{
    //     onRowAdd: newData =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           setData([...data, newData]);
              
    //           resolve();
    //         }, 1000)
    //       }),
    //     onRowUpdate: (newData, oldData) =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           const dataUpdate = [...data];
    //           const index = oldData.tableData.id;
    //           dataUpdate[index] = newData;
    //           setData([...dataUpdate]);

    //           resolve();
    //         }, 1000)
    //       }),
    //     onRowDelete: oldData =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           const dataDelete = [...data];
    //           const index = oldData.tableData.id;
    //           dataDelete.splice(index, 1);
    //           setData([...dataDelete]);
              
    //           resolve()
    //         }, 1000)
    //       }),
    //   }}
    />
                </div>
            
            </div>
            
        </div>
    )
}
