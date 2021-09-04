import { request } from './request'

export const IDs = await request()


// async function fetchData() {
//   try {
//     const response = await fetch(
//       REACT_APP_API_URL + '/api/categories?page=1&pageSize=10',
//       {
//         headers: {
//           accept: 'text/plain'
//         },
//         method: 'GET'
//       }
//     )
//     const json = await response.json()
//     setData(json.data)
//     initionCells(json.data)
//   } catch (error) {
//     console.log(error)
//   }
// }
