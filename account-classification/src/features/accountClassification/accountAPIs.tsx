
import request from "../../app/requestConfig";

const api = {
  fetchUserAccount : (id:any) =>{
    return request({
      'url' : `/users/?id=${id}`,
      'method' : 'GET'
    })
    .then(
      res => res.data[0]
    )
    .catch(
      error => {
        console.log(error)
        return Promise.reject(error.response || error.message)
      }

    )
  }
}

export default api;
