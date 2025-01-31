
export const Footer = () => {
    return (
        <div className="pt-10 bg-red-400 text-black">
            <div className="ml-10 text-4xl font-bold ">
                <h1>o9.dev</h1>
            </div>

            <div className="flex flex-col my-10 ml-10 md:flex-row md:gap-32">
                <div>
                    <h2 className="text-2xl font-medium">Contact</h2>
                    <div className="flex flex-col gap-2 text-lg mt-5">
                        <p>Alamgari Bazar, Srinagar, J&K</p>
                        <p>190011</p>
                        <p>info@o9dev.com</p>
                        <div className="my-5">
                            <p>+91 7889789033</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-medium">Quick Links</h2>
                    <div className="flex flex-col gap-2 text-lg mt-5">
                        <h4 className="text-blue-800 cursor-pointer">Terms & Conditions</h4>
                        <h4 className="text-blue-800 cursor-pointer">Privacy Policy</h4>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white text-center py-2">
                <p className="tracking-[7px]">&copy; 2025 by o9.dev</p>
            </div>
            <div className="h-[20px] bg-red-400"></div>
        </div>
    )
}