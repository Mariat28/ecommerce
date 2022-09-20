import { useState } from "react";
const DetailsComponent = (props) =>{
    const [rowClicked, setRowClicked] = useState(false);
    const rowClickHandler = () =>{
        setRowClicked((prevRowClicked) => !prevRowClicked);
    }
    return(
        <div className={`border-t border-gray-300  p-3 cursor-pointer ${props.title === 'details' ? 'border-b' : ''}`}>
            <div className='uppercase text-gray-500 flex justify-between text-sm font-semibold ' onClick={rowClickHandler}>
                {props.title}
                { !rowClicked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>}
                {rowClicked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>}

            </div>
            { rowClicked && 
                <div className='text-xs tracking-normal text-justify flex justify-evenly mt-1 p-2'>
                 {props.details}
                </div>              
            }
        </div>
    )
}
export default DetailsComponent;