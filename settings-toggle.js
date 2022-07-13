import React from 'react'

export default function SettingsToggle() {
    return <div id="__wrapper" className="py-12">
        <div className="bg-white max-w-sm mx-auto rounded-md border border-gray-300">
            <div className="pt-2"></div>

            <div className="px-4">
                <div className="font-bold text-lg">Settings</div>
            </div>

            <div className="pt-6"></div>

            <div className="px-4">
                <div className="font-semibold text-sm">Menu options</div>
            </div>

            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    Show keyboard shortcuts

                    <ToggleOnOff on={true} />
                </div>
            </div>

            <div className="border-t border-dashed border-gray-200"></div>

            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    Show all menu

                    <ToggleOnOff />
                </div>
            </div>

            <div className="border-t border-dashed border-gray-200"></div>

            <div className="pt-8"></div>

            <div className="px-4">
                <div className="font-semibold text-sm">Mode</div>
            </div>

            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        Basic Mode
                        <div className="pt-1"></div>
                        <div className="text-sm font-light">Basic mode is set by default</div>
                    </div>

                    <ToggleOnOff on={true} disabled={true} />
                </div>
            </div>

            <div className="border-t border-dashed border-gray-200"></div>

            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        Advanced Mode
                        <div className="pt-1"></div>
                        <div className="text-sm font-light">Please <a className="font-normal underline hover:text-primary-600" href="">subscribe</a> first</div>
                    </div>

                    <ToggleOnOff disabled={true} />
                </div>
            </div>

        </div>
    </div>
}

function ToggleOnOff({ on = false, disabled = false }) {
    const [isOn, setIsOn] = React.useState(on);

    if (isOn) {
        return <button disabled={disabled}
            onClick={() => setIsOn(!isOn)}
            className={`rounded-full border border-primary-600 w-12 h-6 flex items-center relative bg-primary-600 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed`}>
            <div className="h-6 w-6 rounded-full border border-primary-600 absolute right-0 bg-white" style={{ right: "-1px" }}></div>
        </button>
    }

    return <button disabled={disabled}
        onClick={() => setIsOn(!isOn)}
        className={`rounded-full border border-gray-300 w-12 h-6 flex items-center relative shadow-inner bg-gray-100 disabled:opacity-10 cursor-pointer disabled:cursor-not-allowed`}>
        <div className="h-6 w-6 rounded-full border border-gray-300 absolute left-0 bg-white" style={{ left: "-1px" }}></div>
    </button>
}