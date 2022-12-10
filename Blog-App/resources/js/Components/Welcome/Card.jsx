import React from 'react'
import { Link } from '@inertiajs/inertia-react'

function Card(props) {
    return (
        <>
            <div className="max-w-sm max-h-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link href={route('dashboard')}>
                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div class="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="mb-3 font-light text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card