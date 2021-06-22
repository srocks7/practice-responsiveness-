import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import axios from 'axios';
import firebase from 'firebase'

import { storage,fire } from "../components/Fire";
export default function Support() {


//     const [file, setFile] = useState(null);
//   const [url, setURL] = useState("");

//   function handleChange(e) {
//     setFile(e.target.files[0]);
//   }

//   function handleUpload(e) {
//     e.preventDefault();
//     const uploadTask = storage.ref(`/image/${file.name}`).put(file);
//     uploadTask.on("state_changed", console.log, console.error, () => {
//       storage
//         .ref("images")
//         .child(file.name)
//         .getDownloadURL()
//         .then((url) => {
//           setFile(null);
//           setURL(url);
//         });
//     });
//   }
const [url, setURL] = useState("");

const [data, setData] = useState([
    {
        id: 1,
        categoryName: "Apple",
        categoryDescription: "Baran",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/portfolio-feedback.appspot.com/o/image%2FSolarPanel.png?alt=media&token=1461091a-0dd4-42bd-88f3-53d892e6f1bd",
      
    },
   
  ]);
const [files, setFiles] = useState([])

function onFileChange (e)  {
 for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
   // add an "id" property to each File object
      setFiles(prevState => [...prevState, newFile]);
    }
  }

  function onUploadSubmission (e) {
    e.preventDefault(); // prevent page refreshing
   const promises = [];
   files.forEach(file => {
    const uploadTask = 
     firebase.storage().ref().child(`/image/${file.name}`).put(file);
       promises.push(uploadTask);
       uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
           const progress = 
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              if (snapshot.state === firebase.storage.TaskState.RUNNING) {
               console.log(`Progress: ${progress}%`);
              }
            },
            error => console.log(error.code),
            async () => {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
               // do something with the url
               .then((url) => {
                        //   setFile(null);
                          setURL(url);

                        });
             }
            );
          });
      Promise.all(promises)
       .then(() => alert('All files uploaded'))
       .catch(err => console.log(err.code));
}


//   const [data, setData] = useState([ 
//   ]);
//   const api = axios.create({
//     baseURL: `https://reqres.in/api`
//   })
//   useEffect(() => { 
//     axios.get('https://jsonplaceholder.typicode.com/todos/')
//     .then(res => {               
//         setData(res.data.data)
//      })
//      .catch(error=>{
//          console.log("Error")
//      })
         
//   }, [])
  console.log(url);

    return (
        
        <div className='container'>
            <h1>Support</h1>
            <div className='row'>
                <div className='col'>
                <MaterialTable
                    title="Category"
                    columns={[
                        { title: "Id", field: "id" },
                        {
                          title: "Picture",
                          field: "imageURL",
                          editComponent: (rowData) => 
                          <form>
                          <label>Select Files         
                            <input type="file" multiple onChange={onFileChange}  />
                            
                          </label>
                          <button onClick={onUploadSubmission}>Upload</button>
                         </form>,
                         
                          render: (rowData) => (
                            <img
                              style={{ height: 36, borderRadius: "50%" }}
                              src={rowData.imageURL}
                            />
                          ),
                        },
          
                        { title: "Category Name", field: "categoryName" },
                        { title: "Category Description", field: "categoryDescription" },
                      ]}
                 
    
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
  
    />
      {/* <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" /> */}


{/* <form>
 <label>Select Files         
   <input type="file" multiple onChange={onFileChange} />
 </label>
 <button onClick={onUploadSubmission}>Upload</button>
</form> */}
                </div>
            
            </div>
            
        </div>
    )
}
