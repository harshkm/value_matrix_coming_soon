const ComingSoon = (props) => {
    return (
        <div className="gradient-bg ">
            <div className="container">
                <div className="row align-middle" style={{color: "white"}}>
                    <div className="col-6 mt-5">
                        <span className="h5 font-weight-bolder" style={{color: "black"}}>Something</span> <span className="h4" style={{color: "aqua"}}>Awesome!!</span>
                    </div>
                    {/* <div class="vr p-1"></div> */}
                    <div className="col-6 display-1 px-5 " style={{borderLeft: "5px white solid"}}>
                        Coming 
                        <br />
                        Soon
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ComingSoon;