// import Link from "next/link";
// import { Chrome } from "lucide-react";
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"

// const Download = () => {
//     return (
//         <main className="flex flex-col items-center justify-center bg-zinc-100" style={{ minHeight: "89vh" }}>
//             <div className="container flex flex-col items-center justify-center gap-x-5 px-10 py-16">
//                 <h2 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
//                     Enhance Your Experience with <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Quek</mark> Extension
//                 </h2>
//                 <p className="mb-8 text-lg text-gray-600">
//                     Download the Quek browser extension to unlock powerful features and streamline your communication experience.
//                 </p>
//                 <Link href="#" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center justify-center px-6 py-3">
//                     <Chrome className="w-6 h-6 mr-3" />
//                     <span className="font-semibold text-lg">Download Extension</span>
//                 </Link>
//                 <Card className="shadow-lg rounded-lg text-center mt-10 w-full">
//                     <CardHeader>
//                         <CardTitle className="font-bold tracking-tight">Extension Details</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <p className="mb-2">
//                             <strong>Compatibility:</strong> Chrome
//                         </p>
//                         <p className="mb-2">
//                             <strong>Version:</strong> 1.0.0
//                         </p>
//                         <p>
//                             <strong>Release Date:</strong> December 15, 2023
//                         </p>
//                     </CardContent>
//                 </Card>
//             </div>
//         </main>
//     );
// }

// export default Download;

import Link from "next/link";
import { Chrome } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExtensionDetails = () => {
    return (
        <main className="flex flex-col items-center justify-center bg-zinc-100" style={{ minHeight: "89vh" }}>
            <div className="container flex flex-col items-center justify-center gap-x-5 px-10 py-16">
                <h2 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
                    Enhance Your Experience with <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Quek</mark> Extension
                </h2>
                <p className="mb-8 text-lg text-gray-600 tracking-tight">
                    Download the Quek browser extension to unlock powerful features and streamline your communication experience.
                </p>
                <Link href="#" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center justify-center px-6 py-3">
                    <Chrome className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-lg">Download Extension</span>
                </Link>
                <Card className="shadow-lg rounded-lg text-center mt-10 w-full">
                    <CardHeader>
                        <CardTitle className="font-bold tracking-tight">Extension Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">
                            <strong>Compatibility:</strong> Chrome
                        </p>
                        <p className="mb-2">
                            <strong>Version:</strong> 1.0.0
                        </p>
                        <p>
                            <strong>Release Date:</strong> December 15, 2023
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default ExtensionDetails;
