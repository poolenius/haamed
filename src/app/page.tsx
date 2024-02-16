import Image from "next/image";
import Link from "next/link";
import Slide from "./components/Swiper";
const ButtonStyle =
  "relative flex mx-auto my-4 w-10/12 rounded-xl bg-white bg-opacity-10 p-3 text-white shadow-lg backdrop-blur-[18px] md:w-1/4 border-b-4 border-r-4 border-solid border-gray-600 hover:bg-white hover:text-black justify-center items-center hover:translate-x-1 hover:translate-y-1 hover:border-b-0 hover:border-r-0 transition-all duration-200 ease-in-out cursor-pointer select-none";

export default function Home() {
  return (
    <div className="absolute h-[100vh] w-[100vw] flex-col bg-[url('/images/background.gif')] bg-cover  bg-no-repeat">
      <div className="center flex-col items-center justify-center py-10 text-center">
        <div className="mx-auto w-max">
          <Link href="https://haamed.me">
            <h1 className="font-ventura text-3xl">HAAMED</h1>
            <h3 className="mb-10 text-xs text-red-600">Links</h3>
          </Link>
        </div>
        <Link
          href="https://www.instagram.com/haamedofficial"
          className={ButtonStyle}
        >
          <h3>instagram</h3>
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
          className={ButtonStyle}
        >
          <h3>Youtube</h3>
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
          className={ButtonStyle}
        >
          <h3>Soundcloud</h3>
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
          className={ButtonStyle}
        >
          <h3>Google</h3>
          <Image
            src="/images/googlelogo.png"
            alt="instagram logo"
            width={30}
            height={30}
            className="top-50 absolute right-2"
          />
        </Link>
        <div className="mx-auto flex w-[90%] select-none items-center  justify-center py-10 sm:max-w-md">
          <Slide />
        </div>
      </div>
    </div>
  );
}
