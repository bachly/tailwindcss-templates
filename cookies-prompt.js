export default function Demo3() {
    return <div id="__wrapper" className="py-12">
        <div className="bg-white max-w-sm mx-auto border border-gray-300">
            <div className="px-4 py-2">
                This website uses cookies. By continuing to browse you accept the use of cookies.
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-gray-200 py-2 px-2">
                <button className="py-1 w-full rounded-sm font-bold hover:bg-primary-500 bg-primary-600 text-white">Accept</button>
                <button className="py-1 w-full rounded-sm hover:bg-gray-200">Cancel</button>
            </div>
        </div>
    </div>
}
