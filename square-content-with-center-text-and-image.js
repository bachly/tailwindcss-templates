export default function SquareContentWithSimpleTextAndImage() {
    return <section className="py-8">
        <div className="px-0 sm:px-20 md:px-4 2xl:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative rounded-none sm:rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-100"></div>
                    <div className="relative z-20">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="pt-10"></div>
                            <h3 className="font-semibold text-lg px-10 text-center">With center text &amp; image</h3>
                            <div className="pt-4"></div>
                            <div className="text-center text-4xl lg:text-5xl leading-none px-10 font-semibold">
                                <p>Travel today.</p>
                                <p>And be free.</p>
                            </div>
                            <div className="pt-6"></div>
                            <div className="text-center">
                                <a href="#" className="inline-block bg-gray-700 hover:bg-black text-white py-2 px-4 rounded-full">Buy now</a>
                            </div>
                            <div className="flex-grow pt-6"></div>
                            <div className="w-3/4">
                                <img src="https://here.li/image-illustrations/plane.png" width="1200" height="600" alt="" loading="lazy" />
                            </div>
                            <div className="pt-6"></div>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-none sm:rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-100"></div>
                    <div className="relative z-20">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="pt-10"></div>
                            <h3 className="font-semibold text-lg px-10 text-center">With center text &amp; image
                            </h3>
                            <div className="pt-4"></div>
                            <div className="text-center text-4xl lg:text-5xl leading-none px-10 font-semibold">
                                <p>Told your stories?</p>
                                <p>Tell again.</p>
                            </div>
                            <div className="pt-4"></div>
                            <div className="text-center leading-normal text-base lg:text-lg px-10 max-w-3/4 mx-auto">
                                <p>With a variety of building blocks and components, you can freshen up your stories
                                    in
                                    different ways.</p>
                            </div>
                            <div className="pt-6"></div>
                            <div className="text-center">
                                <a href="#" className="text-black font-semibold hover:underline text-base lg:text-lg">Buy
                                    now</a>
                            </div>
                            <div className="flex-grow pt-12"></div>
                            <div className="w-3/4">
                                <img src="https://here.li/image-illustrations/mountain.png" width="1200" height="600" alt="" loading="lazy" />
                            </div>
                            <div className="pt-6"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}