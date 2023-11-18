import Image from 'next/image'
import SvgComponentTalk from './SvgComponentTalk'
import SvgComponentCalender from './SvgComponentCalender'
import SvgComponentCall from './SvgComponentCall'
import SvgComponentBlog from './SvgComponentBlog'

export default function Header(props) {
    return (
        <>
            <nav className='sticky top-0 bg-gray-800/80'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex h-16 items-center justify-between'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile menu button */}
                        <button type="button" className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false'>
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open main menu</span>
                            {/* 
                                Icon when menu is closed.
                                Menu open: "hidden", Menu closed: "block"
                            */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* 
                                Icon when menu is open.
                                Menu open: "block", Menu closed: "hidden"
                            */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            {/* <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
                            </div> */}
                            <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <SvgComponentTalk width={32} height={32}/>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">카카오톡</a>
                                <SvgComponentCalender width={32} height={32}/>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">진료예약</a>
                                <SvgComponentCall width={32} height={32}/>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">전화상담</a>
                                <SvgComponentBlog width={32} height={32}/>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">블로그</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    <SvgComponentTalk width={32} height={32}/>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">카카오톡</a>
                    <SvgComponentCalender width={32} height={32}/>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">진료예약</a>
                    <SvgComponentCall width={32} height={32}/>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">전화상담</a>
                    <SvgComponentBlog width={32} height={32}/>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">블로그</a>
                    </div>
                </div>
            </nav>
        </>
    )
}