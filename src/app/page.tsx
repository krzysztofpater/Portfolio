import CtaBtn from "@/components/CtaBtn";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/bgimage.jpg"
        blurDataURL="/bgimage-blur.jpg"
        fill
        alt="color background"
        placeholder="blur"
        className="h-screen object-cover object-center mx-auto"
      />
      <section className="bg-gray-50 bg-opacity-50 dark:bg-inherit dark:bg-opacity-inherit dark:backdrop-brightness-75 absolute inset-0 flex flex-col items-end justify-center p-8 w-screen h-screen">
        <h1 className="animate-slidein [--slidein-delay:100ms] opacity-inherit text-gray-900 dark:text-gray-100 text-6xl font-bold mb-8">
          Frontend
        </h1>
        <h3 className="animate-slidein [--slidein-delay:300ms] opacity-inherit text-gray-900 dark:text-gray-100 text-4xl font-bold">
          React - NextJS
        </h3>
        <h3 className="animate-slidein [--slidein-delay:500ms] opacity-inherit text-gray-900 dark:text-gray-100 text-4xl font-bold">
          Strony - aplikacje
        </h3>
      </section>
      <CtaBtn
        to="/portfolio"
        color="bg-gradient-to-tr from-pink-500 to-yellow-500"
      />
    </div>
  );
}
