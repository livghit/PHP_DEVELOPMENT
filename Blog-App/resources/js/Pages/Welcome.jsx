import { Link, Head } from '@inertiajs/inertia-react';
import Card from '@/Components/Welcome/Card'

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="bg-white/5  px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="flex justify-end items-endtext-sm text-gray-700 dark:text-gray-200 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <div className='flex gap-5 justify-end items-end'>
                                <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-200 underline">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className=" text-sm text-gray-700 dark:text-gray-200 underline"
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div className='text-white flex flex-col md:flex-row justify-center items-center mt-5 gap-3'>
                    <Card title='About Me' description='If you want to get more information about me , thna please follow this link :)' />
                    <Card title='My Projects' description='Following this link will get you to my Github repo! Here you can see all my projects and contributions!' />
                    <Card title='To the Shop' description='If you want to get more information about me , thna please follow this link :)' />
                </div>
            </div>
        </>
    );
}
