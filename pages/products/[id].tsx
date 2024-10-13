import React from "react";
import { useRouter } from 'next/router';
// interface PropsIndividual {
//     id:string;
// }
const Indvidual:React.FC = ()=>{
    const router = useRouter();
    const id = router.query.id
    console.log(id)
    return(
        <div>
            IndvidualPage+{id}
        </div>
    )
}
export default Indvidual;