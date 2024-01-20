// import 'animate.css'
// import Image from 'next/image';

// const AboutInfo = () => {
//     return (
//         <>
//             {/* Section 1 */}
//             <div className="flex flex-row items-center justify-center gap-x-5">
//                 <Image
//                     src="/test-img.png"
//                     alt="Website Image 1"
//                     className="w-1/2 h-auto rounded-md"
//                     width={500}
//                     height={500}
//                 />
//                 <div>
//                     <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Two-way&nbsp;<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">duck-human</mark>&nbsp;translation</h2>
//                     <p className="text-lg font-normal text-gray-500">Seamless communication between ducks and humans</p>

//                 </div>
//             </div>

//             {/* Section 2 */}
//             <div className="flex flex-row items-center justify-center gap-x-5">
//                 <div>
//                     <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Two-way&nbsp;<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">duck-human</mark>&nbsp;translation</h2>
//                     <p className="text-lg font-normal text-gray-500">Seamless communication between ducks and humans</p>

//                 </div>
//                 <Image
//                     src="/test-img.png"
//                     alt="Website Image 1"
//                     className="w-1/2 h-auto rounded-md"
//                     width={500}
//                     height={500}
//                 />
//             </div>

//             {/* Section 3 */}
//             <div className="flex flex-row items-center justify-center gap-x-5 mb-5">
//                 <Image
//                     src="/test-img.png"
//                     alt="Website Image 1"
//                     className="w-1/2 h-auto rounded-md"
//                     width={500}
//                     height={500}
//                 />
//                 <div>
//                     <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Two-way&nbsp;<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">duck-human</mark>&nbsp;translation</h2>
//                     <p className="text-lg font-normal text-gray-500">Seamless communication between ducks and humans</p>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default AboutInfo;


import 'animate.css';
import Image from 'next/image';

const AboutInfo = () => {
    return (
        <>
            {/* Section 1 */}
            <div className="flex flex-row items-center justify-center gap-x-5 mb-8">
                <Image
                    src="/test-img.png"
                    alt="Website Image 1"
                    className="w-1/2 h-auto rounded-md"
                    width={500}
                    height={500}
                />
                <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Unlock the World of Duck Communication</h2>
                    <p className="text-lg font-normal text-gray-500">Quek enables seamless communication between ducks and humans. Experience the joy of two-way translation.</p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-row items-center justify-center gap-x-5 mb-8">
                <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Web Extension: Translate Texts into Duck Language</h2>
                    <p className="text-lg font-normal text-gray-500">Install our browser extension to automatically translate your texts into duck language. It adds a touch of mystery to your conversations.</p>
                </div>
                <Image
                    src="/test-img.png"
                    alt="Website Image 2"
                    className="w-1/2 h-auto rounded-md"
                    width={500}
                    height={500}
                />
            </div>

            {/* Section 3 */}
            <div className="flex flex-row items-center justify-center gap-x-5 mb-8">
                <Image
                    src="/test-img.png"
                    alt="Website Image 3"
                    className="w-1/2 h-auto rounded-md"
                    width={500}
                    height={500}
                />
                <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">Simple Translation Website</h2>
                    <p className="text-lg font-normal text-gray-500">Explore our translation website that serves as a side feature for the extension. Type your text, and Quek will handle the translation with a touch of mystery.</p>
                </div>
            </div>
        </>
    );
}

export default AboutInfo;
