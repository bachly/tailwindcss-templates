export default function SquareContent3() {
    return <section className="py-8">
        <div className="px-0 sm:px-6 xl:px-0 lg:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 z-0 w-full h-full bg-gray-100 bg-image bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/li0iC0rjvvg/1200x1200')" }}></div>
                    <div className="absolute top-0 left-0 z-10 w-full h-full opacity-30"></div>
                    <div className="relative z-20 flex flex-col h-full">
                        <div className="pt-10"></div>
                        <h3 className=" font-semibold text-lg px-10">
                            <p>With big text</p>
                        </h3>
                        <div className="pt-4"></div>
                        <div className="font-semibold text-lg px-10">
                            <p>Here is a collection of website building blocks and components. Tell the stories of
                                your
                                brand or products in a variety of format. Crafted in HTML5 &amp; TailwindCSS, the
                                templates are reusable &amp; customisable for any frontend stack.</p>
                        </div>
                        <div className="pt-12"></div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className=" text-center text-5xl lg:text-7xl leading-none px-10 font-semibold">
                                <p>More<br />blocks.</p>
                                <p>More<br />power.</p>
                            </div>
                        </div>
                        <div className="pt-12"></div>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 z-0 w-full h-full bg-gray-100 bg-image bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/li0iC0rjvvg/1200x1200')" }}></div>
                    <div className="relative z-20">
                        <div className="pt-10"></div>
                        <h3 className=" font-semibold text-lg px-10">
                            <p>With image</p>
                        </h3>
                        <div className="pt-4"></div>
                        <div className="font-semibold text-lg px-10">
                            <p>Here is a collection of website building blocks and components. Tell the stories of
                                your
                                brand or products in a variety of format. Crafted in HTML5 &amp; TailwindCSS, the
                                templates are reusable &amp; customisable for any frontend stack.</p>
                        </div>
                        <div className="pt-12"></div>
                        <div className="px-10 pb-10 max-w-4/5 mx-auto">
                            <img src="https://here.li/image-illustrations/sunglasses.png" width="1200" height="600" alt="" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}