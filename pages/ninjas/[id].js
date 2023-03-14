export const getStaticPaths = async () => {
    const res  = await  fatch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

     return {
       paths,
       fallback: false
    }
}

const Details = () => {
  return (
    <div >
    <div className="container">
    <h1 className="mb-4">Details page</h1>
    
    </div>
 </div>
  )
}

export default Details