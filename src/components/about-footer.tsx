import Link from "next/link";
import { Chrome, Computer } from "lucide-react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AboutFooter = () => {
    return (
        <Card className="text-center w-5/6 shadow-md mt-5 p-5 bg-white">
            <CardHeader className="mb-8">
                <CardTitle className="font-bold mb-4 text-3xl">Experience Quek!</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                    Immerse yourself in the world of ducks and communicate with them!
                </CardDescription>
            </CardHeader>
            <CardFooter className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <Link href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                    <Chrome className="w-5 h-5 mr-2" />
                    <div className="text-left rtl:text-right">
                        <div className="-mt-1 font-sans text-sm font-semibold">Download extension</div>
                    </div>
                </Link>
                <Link href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                    <Computer className="w-5 h-5 mr-2" />
                    <div className="text-left rtl:text-right">
                        <div className="-mt-1 font-sans text-sm font-semibold">Try on Web</div>
                    </div>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default AboutFooter;