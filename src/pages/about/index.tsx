import { Separator } from "@/components/ui/separator"
import DeveloperDetails from '@/components/developer-details';
import developers from '@/data/data';
import AboutFooter from '@/components/about-footer';
import AboutInfo from '@/components/about-info';

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center bg-zinc-100 z-0" style={{ minHeight: '89vh' }}>
            <div className="container flex flex-col items-center justify-center gap-y-10 px-10 py-16">

                <div className='mb-4 flex justify-center items-center'>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Welcome to Quek!</h1>
                </div>

                {/* <div className="animate-bounce rounded-full bg-indigo-200 p-3 flex justify-center items-center">
                    <ArrowDown />
                </div> */}

                <AboutInfo />

                <Separator />

                {/* Developers Section */}
                <div className='my-5'>
                    <p className='text-center font-bold mb-10 text-3xl text-gray-800'>Meet Our Team</p>
                    <div className="w-full flex flex-row items-center justify-center gap-x-5">
                        {developers.map((developer) => (
                            <DeveloperDetails developer={developer} />
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Links */}
                <AboutFooter />
            </div>
        </main>
    );
};

export default Home;
