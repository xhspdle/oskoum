import Link from 'next/link'
import SvgComponentLogo from './SvgComponentLogo'
import SvgComponentCompany from './SvgComponentCompany'

export default function Header(props) {

    return (
        <header className='sticky top-0 inset-x-0 z-50 bg-white opacity-80'>
            <div className='flex lg:flex-1'>
                <Link href="#" className='p-1.5 flex ml-3 mt-3'>
                    <SvgComponentLogo width={45} height={45}/>
                    <SvgComponentCompany height={38} className="ml-2"/>
                </Link>
            </div>
        </header>

    )
}