import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/Swiper";
const LinkStyle = `relative my-2 flex w-10/12 cursor-pointer select-none items-center justify-center rounded-xl border-b-4 border-r-4 border-solid border-gray-600 bg-white bg-opacity-10 p-2 text-white shadow-lg backdrop-blur-[18px] transition-all duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:border-b-0 hover:border-r-0 hover:bg-white hover:text-black md:w-1/3`;

export default function Home() {
  return (
    <main className="h-full w-screen bg-[url('/images/background.gif')] bg-cover  bg-no-repeat">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-max py-10">
          <Link href="https://haamed.me">
            <h1 className="font-ventura text-4xl text-white">HAAMED</h1>
            <h3 className="text-s  text-red-600">Links</h3>
          </Link>
        </div>
        <Link
          href="https://www.instagram.com/haamedofficial"
          className={LinkStyle}
        >
          <h2>instagram</h2>
          <Image
            src="/images/iglogo.png"
            alt="instagram logo"
            width={30}
            height={30}
            className="top-50 absolute right-2"
          />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCxKmk8sUyIWh7exR8DsyOAQ"
          className={LinkStyle}
        >
          <h2>Youtube</h2>
          <Image
            src="/images/youtubelogo.png"
            alt="instagram logo"
            width={30}
            height={30}
            className="top-50 absolute right-2"
          />
        </Link>
        <Link
          href="https://soundcloud.com/haamed-833167988"
          className={LinkStyle}
        >
          <h2>Soundcloud</h2>
          <Image
            src="/images/soundcloudlogo.png"
            alt="instagram logo"
            width={30}
            height={30}
            className="top-50 absolute right-2"
          />
        </Link>
        <Link
          href="https://www.google.com/search?sca_esv=c24955e436027d1c&sxsrf=ACQVn0_NiPVQljLFFJ0CfZW0pcTIcsmyqg:1708031495064&q=Haamed&si=AKbGX_rOAlAWZm8yZPZsiL6aVCbdD97y3lZlG6WCaiU0tO9pRzERN9zed7sPLgV_NWhlsdePQE0FkZmAtvIRX_j-IeUz1Lk3tnj3soelz8FrqO27Xc4mNg_fj7HeCvxasrnUnS_7SpDtUuQHI_GAUoeRe-0QShOgcJq_zj6VOsa3gGR_Apu_VLk%3D&sa=X&ved=2ahUKEwjE3pyUoa6EAxUdLFkFHZ0KBLYQ6RN6BAgvEAE&biw=1920&bih=993&dpr=1"
          className={LinkStyle}
        >
          <h2>Google</h2>
          <Image
            src="/images/googlelogo.png"
            alt="instagram logo"
            width={30}
            height={30}
            className="top-50 absolute right-2"
          />
        </Link>
        {/* <div className="h-[352px] w-full bg-transparent">
          <Carousel />
        </div> */}
        <p className="py-10 text-white">© Copyright 2024, Haamed.</p>
      </div>
    </main>
  );
}
