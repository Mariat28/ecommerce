import CardComponent from "./CardComponent";

const GlossContainer = () =>{
    return(
        <div className="mt-2">
            <div className="px-2 text-sm uppercase text-gray-400">
                <span className="hover:underline hover:cursor-pointer">lips | lip glosses</span>
            </div>
            <div className="flex justify-center w-full" >
                <div className="min-h-full mt-2 py-2 px-0 flex flex-wrap gap-2 justify-center container mx-auto w-full">
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                </div>
            </div>
        </div>
    )
}
export default GlossContainer;