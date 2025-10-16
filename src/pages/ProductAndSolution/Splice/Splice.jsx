
import img1 from "../../../assets/product_img/splicer/Image Tumtec 83s Fully Automatic Splicer Machine 1.jpg"
import img2 from "../../../assets/product_img/splicer/Image Tumtec 83s Fully Automatic Splicer Machine.jpg"
import img3 from "../../../assets/product_img/splicer/Image Tumtec V3 Fully Automatic  Splicer Machine.jpg"
import img4 from "../../../assets/product_img/splicer/Image Tumtec V3 Fully Automatic  Splicer Machine1.jpg"
const Splice = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm border-b-2">
                <div className="w-2/3 ">
                    <figure className="w-2/3 mx-auto border-2">
                        <img className=""
                            src={img1}
                            alt="Album" />
                    </figure>
                    <figure className="w-2/3 mx-auto border-2 my-1">
                        <img className=""
                            src={img2}
                            alt="Album" />
                    </figure>
                </div>

                <div className="card-body w-full">
                    <h2 className="card-title">Tumtec 83s Fully Automatic Splicer Machine</h2>
                    <p>The GPON OLT transceiver is small form factor pluggable module for serial optical data communications such as ITU-T G.984.
                        It is with the SFP 20-pin connector to allow hot plug capability. This module is designed for single mode fiber and operates
                        at a nominal wavelength of 1490 nm. The transmitter section uses a 1490nm DFB laser and is a class 1 laser compliant according
                        to International Safety Standard IEC-60825.</p>
                    <h2 className="text-lg">Features</h2>
                    <ol>
                        <li>Single fiber bi-directional data links asymmetric TX 2.488Gbps/RX 1.244Gbps application</li>
                        <li>1490nm DFB-LD Transmitter and 1310nm burst-mode APD-TIA Receiver</li>
                        <li>Distance up to 20km</li>
                        <li>Single 3.3V Power supply and TTL Logic Interface</li>
                        <li>Digital burst RSSI function to monitor the input optical power level</li>
                        <li>Single SC/UPC Connector Interface</li>
                        <li>Hot Pluggable</li>
                        <li>Compliant with MSA SFP Specification SFF-8472</li>
                        <li>Compliant with ITU-T G.984</li>
                        <li>Low EMI and Excellent ESD protection</li>
                    </ol>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Call For Price</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-sm border-b-2 mt-2">
                <div className="w-2/3 ">
                    <figure className="w-2/3 mx-auto border-2">
                        <img className=""
                            src={img3}
                            alt="Album" />
                    </figure>
                    <figure className="w-2/3 mx-auto border-2 my-1">
                        <img className=""
                            src={img4}
                            alt="Album" />
                    </figure>
                </div>

                <div className="card-body w-full">
                    <h2 className="card-title">Tumtec V3 Fully Automatic  Splicer Machine</h2>
                    <p>The GPON OLT transceiver is small form factor pluggable module for serial optical data communications such as ITU-T G.984.
                        It is with the SFP 20-pin connector to allow hot plug capability. This module is designed for single mode fiber and operates
                        at a nominal wavelength of 1490 nm. The transmitter section uses a 1490nm DFB laser and is a class 1 laser compliant according
                        to International Safety Standard IEC-60825.</p>
                    <h2 className="text-lg">Features</h2>
                    <ol>
                        <li>Single fiber bi-directional data links asymmetric TX 2.488Gbps/RX 1.244Gbps application</li>
                        <li>1490nm DFB-LD Transmitter and 1310nm burst-mode APD-TIA Receiver</li>
                        <li>Distance up to 20km</li>
                        <li>Single 3.3V Power supply and TTL Logic Interface</li>
                        <li>Digital burst RSSI function to monitor the input optical power level</li>
                        <li>Single SC/UPC Connector Interface</li>
                        <li>Hot Pluggable</li>
                        <li>Compliant with MSA SFP Specification SFF-8472</li>
                        <li>Compliant with ITU-T G.984</li>
                        <li>Low EMI and Excellent ESD protection</li>
                    </ol>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Call For Price</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splice;