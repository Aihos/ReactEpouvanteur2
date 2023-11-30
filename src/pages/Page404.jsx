
import {useNavigate} from "react-router"

function Page404() {
   
    return (
        <main className=" bg-slate-800 grid  content-center justify-center items-center   min-h-screen">
            <div className="pb-5 flex flex-col justify-center items-center">
                <h1 className="my-4 text-8xl text-white ">404</h1>
                <p className="text-white my-2 mb-[3rem]">Vous semblez perdu, retournez plutôt sur une page qui existe.</p>
              
            </div>
        </main >
    )
}

export default Page404;