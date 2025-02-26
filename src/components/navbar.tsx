function Navbar() {
    return (
        <div
            className="flex justify-between items-center"
            style={{
                mixBlendMode: "multiply",
            }}
        >
            <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-16 w-40 m-5"
            />
            <div className="flex space-x-4 ml-20 font-sans font-normal">
                <a
                    href="/resources"
                    className="hover:underline text-lg tracking-normal font-normal"
                >
                    Resources
                </a>
                <a
                    href="/contact"
                    className="hover:underline text-lg tracking-normal pl-20 pr-24 font-normal"
                >
                    Contact us
                </a>
            </div>
        </div>
    );
}

export default Navbar;
