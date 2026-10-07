const Footer = () => {
    return (
        <div>
            {/* section footer start */}
                <section id="footer" className="flex flex-col justify-start  bg-gray-800 mt-10">
                    <div className="flex flex-col gap-2 p-5 text-xl md:text-2xl font-bold">
                        <h1>Cine<span className="text-click">Scope</span> </h1>
                        <h3 className="text-sm md:text-lg font-light">Free for you to read the newest movies or tv</h3>
                    </div>

                    <div id="creator" className="text-sm font-light p-5 italic">
                        <h1>Made by @JFourzzzz.</h1>
                    </div>
                </section>
            {/* section footer end */}
        </div>
    )
}

export default Footer;