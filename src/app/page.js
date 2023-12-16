import Image from 'next/image'
import Link from 'next/link'
import SvgComponentLogo from './components/SvgComponentLogo'
import KakaoMap from './components/KakaoMap'
import Carousel from './components/NextJsCarousel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <SvgComponentLogo width={160} height={160} className="mx-auto mb-2"/>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl transition-all">
              부개역 <span className='text-red-600'>쿰</span> <span className='text-cyan-700'>정형외과</span>
            </h1>
            <p className="mt-6 px-6 text-lg sm:text-2xl leading-8 text-gray-600">
              BUGAESTN KOUM ORTHOPEDICS<br/>
              척추센터 관절센터 맞춤진료 근본치료 급성·만성 통증/비수술
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                원장 소개
              </Link>
              <Link 
                href="#" 
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                진료 시간 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          alt="front"
          src="/front01.jpeg"
          width={500}
          height={500}
          style={{
            width: '100%',
            height: 'auto'
          }}
          priority={true}
        />
        <Carousel/>
        <div>
          <table className="table-fixed sm:text-2xl lg:text-4xl transition-all duration-700">
            <thead>
              <tr className='sm:h-14 lg:h-20'>
                <th className='border-b-2 border-collapse border-black'>진료시간</th>
                <th className='border-b-2 border-collapse border-black'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='lg:h-16'>
                <td className='tracking-wider'>평 &nbsp;&nbsp;&nbsp; 일</td>
                <td>&nbsp;&nbsp;&nbsp; 오전 9:00 ~ 오후 7:00</td>
              </tr>
              <tr className='lg:h-16'>
                <td>점심시간</td>
                <td>&nbsp;&nbsp;&nbsp; 오후 1:00 ~ 오후 2:00</td>
              </tr>
              <tr className='lg:h-16'>
                <td className='tracking-wider'>토 요 일</td>
                <td>&nbsp;&nbsp;&nbsp; 오전 9:00 ~ 오후 2:00</td>
              </tr>
              <tr className='text-xs'>
                <td> &nbsp; </td>
              </tr>
              <tr>
                <td colSpan="2" className='text-sm sm:text-lg lg:text-2xl transition-all duration-700'>
                  ■ 일요일 및 공휴일은 휴진
                </td>
              </tr>
              <tr>
                <td colSpan="2" className='text-sm sm:text-lg lg:text-2xl transition-all duration-700'>
                  ■ 토요일은 점심시간 없이 진료합니다
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <KakaoMap/>
        <Image
          alt="front"
          src="/front02.jpeg"
          width={500}
          height={500}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
    </main>
  )
}
