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
          <h2 className="text-2xl">W kilku słowach</h2>
          <p className="indent-4">
            Jestem front end developerem z pasją do tworzenia nowoczesnych i
            responsywnych stron internetowych. Pracuję głównie w technologiach
            React i NextJS, które pozwalają mi na szybkie i efektywne budowanie
            interfejsów użytkownika. Moje projekty wykorzystują najnowsze
            standardy i praktyki, takie jak SSR, SSG, SEO, PWA i inne.
          </p>
          <p className="indent-4">
            Moje zainteresowanie programowaniem zaczęło się od mojej miłości do
            matematyki, którą ukończyłem na poziomie magisterskim. Matematyka
            nauczyła mnie logicznego myślenia, abstrakcyjnego rozwiązywania
            problemów i eleganckiego kodowania. Uważam, że matematyka jest
            nieodzownym narzędziem dla każdego developera, ponieważ pomaga w
            zrozumieniu złożonych algorytmów, struktur danych i wzorców
            projektowych.
          </p>
          <p className="indent-4">
            W mojej pracy staram się nieustannie rozwijać swoje umiejętności i
            poszerzać swoją wiedzę. Uczę się nowych technologii, bibliotek i
            frameworków, które mogą ułatwić mi pracę i poprawić jakość moich
            produktów. Nie boję się wyzwań i zawsze szukam okazji do nauki
            czegoś nowego. Lubię pracować w zespole i dzielić się swoimi
            doświadczeniami z innymi.
          </p>
          <p className="indent-4">
            Jestem front end developerem z pasją, matematykiem z wykształcenia i
            programistą z zamiłowania. Zapraszam do zapoznania się z moim
            portfolio i kontaktu, jeśli szukasz profesjonalnego i kreatywnego
            developera.
          </p>
        </div>
      </div>
    </SubpageWrapper>
  );
}
