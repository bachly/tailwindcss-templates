export default function GridAccountSettingsMenu({ title = "Account Settings", username = "YourUsername@gmail.com" }) {
    return <section className="py-8">
        <div className="px-6 sm:max-w-2xl md:max-w-6xl mx-auto">
            <div className="">
                <h2 className="text-3xl font-bold">{title}</h2>
                <div className="pt-1"></div>
                <p className="text-gray-600">{username}</p>
                <div className="pt-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <MenuItem title="Account and Plan" description="General settings for your organisation and your payment plan" bgColor="bg-gray-600" />
                    <MenuItem title="Users and Teams" description="Control who can access the system and what they can do" bgColor="bg-green-500" />
                    <MenuItem title="Add-ons and Integrations" description="Integrate your system with third-party plugins and solutions" bgColor="bg-blue-500" />
                    <MenuItem title="Notifications" description="Setup and receive notifications via web, mobile and emails" bgColor="bg-amber-500" />
                    <MenuItem title="Custom Configurations" description="Create, manage and update custom configurations for your system." bgColor="bg-purple-500" />
                    <MenuItem title="System Settings" description="Change system global settings such as timezone, appearance, etc."bgColor="bg-teal-500"  />
                    <MenuItem title="Imports &amp; Exports" description="Import and export data to migrate or backup somewhere else." bgColor="bg-pink-500" />
                    <MenuItem title="Danger Zone" description="Close account or remove information permanently"bgColor="bg-red-600"  />
                </div>
            </div>
        </div>
    </section>
}

function MenuItem({ title = "Menu title", description = "This is the menu description default text", href = "#", bgColor = "bg-blue-500" }) {
    return <a href={href} className="bg-white border border-gray-300 shadow-sm py-6 px-4 rounded-xl hover:shadow-md transition duration-200">
        <div className={`${bgColor} text-white rounded-full w-10 h-10`}>
            <div className="w-full h-full flex items-center justify-center text-xl">
                {title[0]}
            </div>
        </div>
        <div className="pt-4"></div>
        <h3 className=" text-lg font-semibold">{title}</h3>
        <div className="pt-2"></div>
        <p className=" text-base">{description}</p>
    </a>
}