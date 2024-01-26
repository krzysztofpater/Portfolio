import SubpageWrapper from "@/components/SubpageWrapper";
import Image from "next/image";

export default function About() {
  return (
    <SubpageWrapper>
      <h1 className="text-center text-4xl lg:text-6xl animate-slidein [--slidein-delay:100ms] opacity-0">
        Poznajmy się
      </h1>
      <div className="max-w-screen-xl mx-auto my-16 flex flex-col items-center md:flex-row justify-center gap-8 px-6">
        <div className="relative w-[300px] md:min-w-[400px] aspect-square max-w-[400px] overflow-hidden rounded-full md:flex-1 md:self-start animate-slidein [--slidein-delay:300ms] opacity-0">
          <Image
            src="/profile_photo.jpg"
            fill
            alt="photo of the author"
            className="object-cover object-center mx-auto"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6 max-w-2xl animate-slidein [--slidein-delay:700ms] opacity-0">
          <h2>kilka słów o autorze</h2>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
          <p className="indent-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi nesciunt alias illum reiciendis ab labore. Quas eius beatae
            consequatur nesciunt culpa dolorum facilis eaque cumque minima
            asperiores, commodi nisi.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facilis rerum dolores consectetur error eos sequi sint illum hic
            nobis.
          </p>
          <p className="indent-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            voluptatum ea possimus dolorem delectus!
          </p>
        </div>
      </div>
    </SubpageWrapper>
  );
}
