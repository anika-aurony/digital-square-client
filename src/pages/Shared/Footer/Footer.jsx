import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-gray-600 to-gray-900 text-white ps-6 md:px-10 pb-10  md:pt-8 md:flex md:justify-between">
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current flex items-center">

                    </svg>
                    <img src={logo} alt="Digital Square " className="md:w-2/3  " />

                </aside>
                <aside>

                    <p>
                        <span className="font-bold mb-6">Digital Square Limited.</span>
                        <br />

                        Address:
                        <br />
                        Impetus Center, 7th Floor (North Side),
                        <br />
                        242/B Tejgaon-Gulshan Link Road, <br /> Tejgaon I/A,Dhaka-1208.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://www.linkedin.com/company/digital-square-ltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
             2.761 2.239 5 5 5h14c2.761 0 
             5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
             19h-3v-10h3v10zm-1.5-11.268c-.966 
             0-1.75-.784-1.75-1.75s.784-1.75 
             1.75-1.75 1.75.784 
             1.75 1.75-.784 1.75-1.75 
             1.75zm13.5 11.268h-3v-5.604c0-1.336-.027-3.056-1.861-3.056-1.861 
             0-2.146 1.454-2.146 2.957v5.703h-3v-10h2.881v1.367h.041c.402-.761 
             1.385-1.562 2.848-1.562 3.046 0 
             3.611 2.005 3.611 4.615v5.58z"/>
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/@DigitalSquareLtd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/DigitalSquareLtd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;