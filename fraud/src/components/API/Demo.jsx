// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Demo() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
        
//         const response = await axios.get('http://127.0.0.1:8000/api/api-code/');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from Django API:</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Demo;



import { useState, useEffect } from 'react';
import axios from 'axios';

function Demo() {
  const [apiCode, setApiCode] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/api-code/');
        console.log(response)
        setApiCode(response.data.api_code);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h1>Prayatna API Code I: {apiCode}</h1>
      </center>
    </div>
  );
}

export default Demo;