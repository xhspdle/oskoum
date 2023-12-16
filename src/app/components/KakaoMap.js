import Script from 'next/script';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import SvgComponentMapIcon from './SvgComponentMapIcon';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center py-10 mb-10'>
            <h4 className="text-xs sm:text-base font-bold text-gray-400/80 mb-2">부 개 역 쿰 정 형 외 과</h4>
            <h2 className="text-xl sm:text-4xl font-bold tracking-tight text-gray-900/80 transition-all mb-10">
              오시는 길
            </h2>
            <div className='w-11/12 h-[25vh] sm:h-[32.5vh] border'>
                <Script src={KAKAO_SDK_URL} strategy='beforeInteractive'/>
                <Map 
                    center={{ lat: 37.48902451482127, lng: 126.74007565258832 }} 
                    style={{ width: '100%', height: '100%' }}
                    level={3}
                >
                    <MapMarker  position={{ lat: 37.48898308686478, lng: 126.7397563476378 }}>
                        <div className='font-semibold text-center pl-2 '>부개역<span className='text-red-600'>쿰</span>정형외과</div>
                    </MapMarker>
                    <MapTypeControl position={"TOPRIGHT"}/>
                    <ZoomControl position={"RIGHT"}/>
                </Map>
                <p className='p-4 font-bold text-center text-[#222546] bg-[#F4F5F8] flex justify-center border'>
                <SvgComponentMapIcon width={22} height={22} className='mr-3'/>
                <span>인천시 부평구 부일로 87 301호</span>
                </p>
            </div>
        </div>
    )
}

export default KakaoMap;

