import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}


const index = ({ ninjas }) => {
    return (
        <div >
            <div className="container">
                <h1 className="mb-4">All Ninjas</h1>
                <div className="looplist">
                {ninjas.map(ninja => (
                    <Link href={'ninjas/' + ninja.id} className="mb-4 ninjaanchor" key={ninja.id}>
                        <h3>{ninja.name}</h3>
                    </Link>

                ))}

                
                </div>
               
            </div>
        </div>
    )
}

export default index