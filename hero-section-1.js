export default function HeroSection1() {
    return <>
        <section className="py-12">
            <div className="max-w-7xl mx-auto relative">
                <div className="pt-32 sm:pt-24 xl:pt-32"></div>
                <div className="relative z-10 max-w-2xl px-12 2xl:px-0">
                    <div className="uppercase font-semibold text-sm">Subtitle</div>
                    <h1 className="mt-4 font-bold text-4xl md:text-6xl">This is the big title of our hero section that draws attention</h1>
                    <p className="mt-8 max-w-xs">
                        Here is a collection of hand-crafted TailwindCSS templates that can be reused in many contexts and applications.
                    </p>
                </div>
                <div className="absolute w-full lg:w-3/4 top-0 right-0">
                    <div className="relative">
                        <img className="absolute top-0 right-0" src="https://source.unsplash.com/alS7ewQ41M8/1200x800" alt="This is an alt text" loading="lazy" />

                    </div>
                </div>
                <div className="pt-32 sm:pt-28 xl:pt-48"></div>
                <div className="absolute -bottom-3 right-0">
                    <button className="bg-black text-white py-3 px-5 mr-2">P</button>
                    <button className="bg-black text-white py-3 px-5 mr-2">R</button>
                </div>
            </div>
        </section>
    </>
}