import faceLogo from '../../assets/images/facebook.png';
const FooterContainer = () => {
    const styles ={
        height: 'calc(100vh - 800px)',
    };
    return(
        <div className=" bg-black w-full mt-2" style={styles}>
            <div className="text-white uppercase font-semibold w-full flex justify-center text-2xl py-2">connect with us</div>
            <div className="flex justify-center w-full border-2 border-red-500">
                <div className="w-1/2">
                    <div className="flex flex-col text-white">
                        <div className="uppercase">@sassybeautie_</div>
                        <div className="flex gap-2 h-4 w-4 text-white bg-white ">
                            <img src={faceLogo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterContainer;