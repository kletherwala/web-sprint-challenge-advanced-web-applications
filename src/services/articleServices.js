import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (state, setState)=> {
    axiosWithAuth().get('http://localhost:5000/api/articles')
        .then(resp=>{

            setState(resp.data);
        })
    .catch(err=>{
        console.log(err)
    })
}

export default articleService;