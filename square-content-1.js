export default function SquareContent1({ tagline = "Tagline", title = "Account Settings", username = "YourUsername@gmail.com" }) {
    return <section className="py-8">
        <div className="px-6 sm:max-w-2xl md:max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-800"></div>
                <div className="relative z-20 flex flex-wrap">
                    <div className="w-full md:w-2/5">
                        <div className="px-6 md:px-10 pt-8 pb-12 max-w-lg">
                            <div className="text-white font-semibold">{tagline}</div>
                            <div className="pt-32"></div>
                            <h2>
                                <div className="text-white text-3xl sm:text-4xl md:text-6xl opacity-50 font-semibold leading-tight">
                                    Flexible</div>
                                <div className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
                                    <p>building</p>
                                    <p>blocks</p>
                                </div>
                            </h2>
                            <div className="pt-8"></div>
                            <div className="text-white text-base md:text-xl">
                                <p>Here is a collection of website building blocks and components. Tell the stories
                                    of
                                    your brand or products in a variety of format. Crafted in HTML5 &amp;
                                    TailwindCSS,
                                    the templates are reusable &amp; customisable for any frontend stack.</p>
                            </div>
                            <div className="pt-20"></div>
                            <a className="text-white border-2 border-white py-2 px-4 rounded-full" href="#">
                                Learn more about this feature
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 pb-3/4 relative">
                        <div className="absolute w-full h-full bg-gray-900 -right-6 -bottom-6 sm:-right-10 sm:-bottom-10 md:-right-24 md:-bottom-24"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

