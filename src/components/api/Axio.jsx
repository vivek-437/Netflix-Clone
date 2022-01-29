import axios from "axios";
// axios help developer to deal with external url
// work same as postman 
const instance="https://api.themoviedb.org/3";

export default instance;


    // const fetchData = async () => {
    //     const req = await axios.get(Axios + prop.Url);
    //     // console.log(req.data.results[0].name);
    //     // setMovie=(req.data);
    //     setMovie(await req.data.results);
    // }
    // data

    // useEffect(() => {
    //     fetchData();
    //     return()=>{};
    // }, []);
    // console.log(Movie)
    // OR
    // useEffect(async()=>{
    //     try{
    //         const req = await axios.get(Axios + prop.Url);
    //         // setMovie(req.data.results);
    //     }catch(e){
    //         console.error(e);
    //     }
    // },[prop.Url])
    // OR