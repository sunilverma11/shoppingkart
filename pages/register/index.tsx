import Layout from "@/components/layout";
import { useState } from "react";

interface Props {
    title:string;
    description:string;
    status:string;
}
const Register:React.FC = (prop)=>{
    const [data, setData] = useState<Props>({
        title:"",
        description:"",
        status:""
    })
    const handleSubmit =()=>{
        console.log(data)
    }
    console.log(prop)
    return(
        <Layout>
        <div style={{padding:"10px",color:"black"}}>
            <div>           
                <div><label>Title </label></div>
                <div><input name="title" value={data.title}  onChange={el=>setData({...data,[el.target.name]:el.target.value})} placeholder="title" type="text" /></div>
            </div>
            <div>
                <div><label>Description </label></div>
                <div><input name="description" value={data.description} onChange={el=>setData({...data,[el.target.name]:el.target.value})} placeholder="description" type="text" /></div>
            </div>
            <div>
                <div><label>Status </label></div>
                <div><input name="status" value={data.status} onChange={el=>setData({...data,[el.target.name]:el.target.value})} placeholder="status" type="text" /></div>
            </div>            
            <div><input type="submit" onClick={handleSubmit} value="Submit"/></div>
        </div>
        </Layout>
        
    )
}
export default Register;

export const getServerSideProps = async () => {
    interface Propsd{
        title:string,
        description:string,
        status:string
    }
    const res = await fetch("http://localhost:3000/api/tasks");
    const prop:Propsd[] = await res.json();
    console.log("inserver",prop)
    return {
        props: {prop}
    }
}