// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import Link from "next/link";
// import { Github, Linkedin } from "lucide-react";
// import { DeveloperType } from "@/types/developer";

// interface DeveloperDetailsProps {
//     developer: DeveloperType;
// }

// const DeveloperDetails: React.FC<DeveloperDetailsProps> = ({ developer }) => {
//     return (
//         <Card className="shadow-md">
//             <CardHeader>
//                 <CardTitle className="flex justify-center items-center">
//                     <Avatar>
//                         <AvatarImage src={developer.image || "https://github.com/shadcn.png"} />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                 </CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//                 <h5 className="mb-1 text-lg text-gray-900 font-bold">{developer.name}</h5>
//                 <span className="text-sm text-gray-500">{developer.role}</span>
//             </CardContent>
//             <CardFooter>
//                 <div className="flex mt-4 md:mt-6">
//                     <Link href={developer.github} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"><Github className="w-4 h-4 mr-2" />GitHub</Link>
//                     <Link href={developer.linkedin} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ms-3"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</Link>
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// };

// export default DeveloperDetails;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { DeveloperType } from "@/types/developer";

interface DeveloperDetailsProps {
    developer: DeveloperType;
}

const DeveloperDetails: React.FC<DeveloperDetailsProps> = ({ developer }) => {
    return (
        <Card className="rounded-md overflow-hidden shadow-lg">
            <CardHeader>
                <CardTitle className="flex justify-center items-center">
                    <Avatar className="z-0">
                        <AvatarImage src={developer.image || "https://github.com/shadcn.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-4">
                <h5 className="mb-2 text-lg font-bold text-gray-800">{developer.name}</h5>
                <span className="text-sm text-gray-600 font-bold">{developer.role}</span>
            </CardContent>
            <CardFooter className="p-4">
                <div className="flex justify-center">
                    <Link href={developer.github} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </Link>
                    <Link href={developer.linkedin} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 ms-3">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                    </Link>
                </div>
            </CardFooter>
        </Card >
    );
};

export default DeveloperDetails;
