import SvgComponentTalk from './SvgComponentTalk'
import SvgComponentCalender from './SvgComponentCalender'
import SvgComponentCall from './SvgComponentCall'
import SvgComponentBlog from './SvgComponentBlog'
import Link from 'next/link'

export default function Header(props) {
    return (
        <nav className='fixed bottom-0 z-50 left-1/2 -translate-x-1/2 bg-white-800/70'>
                <div className='relative flex h-20 items-center justify-between'>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex space-x-0 bg-white opacity-80 rounded-full">
                            <Link href="/" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium">
                                <SvgComponentTalk width={40} height={40} className="fill-current transition text-cyan-700 hover:text-yellow-500"/>
                            </Link>
                            <Link href="/" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium">
                                <SvgComponentCall width={40} height={40} className="fill-current transition text-cyan-700 hover:text-blue-600"/>
                            </Link>
                            <Link href="/" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium">
                                <SvgComponentCalender width={40} height={40} className="fill-current transition text-cyan-700 hover:text-red-700"/>
                            </Link>
                            <Link href="/" className="text-gray-900 hover:bg-gray-200 hover:text-white rounded-full px-3 py-2 text-sm font-medium">
                                <SvgComponentBlog width={40} height={40} className="fill-current transition text-cyan-700 hover:text-green-600"/>
                            </Link>
                        </div>
                    </div>
                </div>
        </nav>
    )
}