import Image from 'next/image'
import banner from '@/assets/banner.jpg'
export default function Banner() {
  return (
    <section className="p-0">
      <article className="text-center">
        <p className="pb-5 pt-10">
          {' '}
          삶을 그리는 프론트엔드 개발자 <strong>김영완</strong>의 블로그
        </p>
        <h2 className="text-3xl py-0 pb-4 font-bold">
          Coding LiFE __ 삶을 코딩하다 <br />
        </h2>
      </article>
      <Image
        className="mx-auto"
        src={banner}
        alt="블로그 배너 이미지"
        width={1024}
        height={500}
      />
    </section>
  )
}
