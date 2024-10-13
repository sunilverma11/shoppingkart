import Layout from "@/components/layout";

const Products:React.FC = ()=>{
    return (        
        <Layout>
            <div>
                <p className="products">One</p>
                <p className="products">two</p>
                <p className="products">three</p>
                <p className="products">four</p>
                <p className="products">five</p>
            </div>
        </Layout>
      );
}
export default Products;

export const getServerSideProps = async ()=>{
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  console.log(data)
  return {
    props : {name:data.name}
  }
}