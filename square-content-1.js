export default function SquareContent1() {
    return <section className="py-8">
        <div className="md:max-w-xl lg:max-w-7xl mx-auto">
            <div className="relative overflow-hidden bg-gray-100">
                <div className="absolute top-0 left-0 z-10 w-full h-full"></div>
                <div className="relative z-20 flex flex-wrap">
                    <div className="w-full lg:w-2/5">
                        <div className="px-6 md:px-10 max-w-lg">
                            <div className="pt-8"></div>
                            <div className="font-semibold">Tagline</div>
                            <div className="pt-12 md:pt-24 lg:pt-28"></div>
                            <h2>
                                <div className="text-3xl md:text-4xl lg:text-6xl opacity-50 font-semibold leading-tight">
                                    Take</div>
                                <div className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                                    <p>with you</p>
                                    <p>anywhere</p>
                                </div>
                            </h2>
                            <div className="pt-8"></div>
                            <div className="text-base md:text-lg lg:text-xl">
                                <p>Here is a growing collection of versatile UI building blocks and components. Crafted in minimal JSX &amp;
                                TailwindCSS, the templates are reusable &amp; customisable for any frontend stack.
                                   Simply view, copy and paste the source code.
                                </p>
                            </div>
                            <div className="pt-16"></div>
                            <a className="border-2 border py-2 px-4 rounded-full" href="javascript:void(0)">
                                Learn more about this feature
                            </a>
                            <div className="pt-8 lg:pt-16"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <div className="w-full h-full flex items-center justify-center px-6 md:px-10">
                            <div className="w-3/4 py-6">
                                <img src="https://here.li/image-illustrations/backpack.png" loading="lazy" width="1000" height="1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

