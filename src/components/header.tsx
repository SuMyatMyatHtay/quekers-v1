import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white drop-shadow-lg sticky top-0 z-5">
            <nav className="mx-auto flex items-center justify-between p-3 lg:px-10" aria-label="Global">

                {/* Logo on the Left */}
                <div className="flex items-center">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">QUEK</span>
                        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
                    </Link>
                </div>

                {/* Links in the Middle */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">About</Link>
                    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Translate</Link>
                    <Link href="/download" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Download</Link>
                </div>

                {/* App name on the Right */}
                <div className="lg:flex lg:justify-center">
                    <Link href="/" className="text-sm font-bold leading-6 text-gray-900">QUEK</Link>
                </div>


            </nav>
        </header>
    );
};

export default Header;
