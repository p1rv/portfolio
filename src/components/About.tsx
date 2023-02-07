import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { ContactIcon } from "../svg/ContactIcon";
import { LinkIcon } from "../svg/LinkIcon";
import { ReactIcon } from "../svg/ReactIcon";
import { WeatherIcon } from "../svg/WeatherIcon";

const aboutText: IMessagesWithLanguage = {
  header: {
    EN: `More about the website...`,
    PL: `Więcej o stronie...`,
  },
  technologies: {
    EN: (
      <>
        This website is using React + TypeScript. Built by Vite, which is a faster and more versatile CRA alternative.
        <br />
        TailWindCSS was used to style almost entire website, with few minor inline styling tweaks. As far as CSS libraries I am aware of go,
        TailWind is offering most freedom of all of them. <br />
        Components that are not displayed all of the time or are needed later on incoroporate lazy load to reduce index bundle weight.
      </>
    ),
    PL: (
      <>
        Strona używa React + Typescript. Została zbudowana przy pomocy Vite, który jest znacznie szybszy i bardziej wszechstronny niż CRA.
        <br />
        Do zastosowania odpowiednich stylów został wykorzystany TailWindCSS (w kilku przypadkach wymagane były style w linii). Biorąc pod
        uwagę wszystkie biblioteki CSS które znam, TailWind jako jedyny nie narzuca w żadnym stopniu struktury komponentów, przez co oferuje
        największą wszechstronność.
        <br />
        Komponenty które nie są wyświetlane w momencie załadowania aplikacji lub są na innych podstronach są ładowane z opóźnieniem, w celu
        zredukowania wagi głównego bundla.
      </>
    ),
  },
  react: {
    EN: (
      <>
        /react subpage is meant to show easy to follow, accessible and (for now) basic guide on how to start building your own websites
        using React, but at this moment it is under continuous development.
      </>
    ),
    PL: (
      <>
        podstrona /react docelowo będzie prezentować prosty, przystępny i (początkowo) podstawowy poradnik jak zacząć budować strony
        wykorzystując React, ale na ten moment ta część aplikacji jest w trakcie rozwoju.
      </>
    ),
  },
  weather: {
    EN: (
      <>
        /weather is ready to use - you can type in address, which then will be submitted to Google's GeoCoding API* in order to get
        geographical coordinates. In case of an error, you will be notified to try more precise phrase. After response is successfully
        received, coordinates are saved to Redux store, as well as to IndexedDB (using localforage library) with original search term. In
        the next step actions to fetch forecast data from available sources' APIs will be dispatched*. Some of them allow very few requests
        per day (as few as 10), so, naturally, limit is reached pretty often. In that case error message will be shown in place of chart. If
        GET request did not contain errors, incoming response will be parsed to the same format and saved in Redux store (+ in IndexedDB*),
        resulting in chart components' update and displayed forecast. <br />
        On the left of search bar you can choose to collapse data into single chart - values from all sources will be averaged, containing
        as many days as available in any of them. Additionally, there is a filters dropdown on the other side of the screen, allowing
        switching between wind and temperature lines, plus toggling precipitation bars. <br />
        Library responsible for rendering charts is Visx. That was a recent change, because previously implemented one was causing troubles
        in rendering times on older mobile devices and on certain browsers. Visx requires more configuration and sometimes working directly
        with svg elements, but offers more customization and is incomparably faster.
        <br />
        <br />* - localforage is saving or overwriting every redux state change if it comes from fetch response. Addresses are saved
        permanently, as they will not need updating and every user will most likely search for similar locations. Forecast data with
        corresponding provider and coordinates is saved with `expires` value containing time of response + 1 day. If forecast expired, is
        not available for searched location or address is not present, fetch requests will be called. Otherwise data will be read from
        IndexedDB and saved in store. Solution reduces amount of requests that would normally be made.
      </>
    ),
    PL: (
      <>
        /weather jest gotowa do użycia - po otwarciu możemy wpisać adres, który będzie przekazany do GeoCoding API Google'a* w celu
        uzyskania współrzędnych geograficznych. W przypadku błędu (adres nie znaleziony) wyświetlony zostanie komunikat z prośbą o
        doprecyzowanie wyszukiwanego adresu. Jeżeli odpowiedź nie będzie zawierać błędu, otrzymane współrzędne zostaną zapisane w store
        Reduxa i w pamięci IndexedDB (za pomocą biblioteki localforage) wraz z oryginalnym zapytaniem. W kolejnym kroku wykonane zostaną
        zapytania do wszystkich obsługiwanych dostawców prognozy pogody*. Niektórzy z nich pozwalają na tylko kilka zapytań/dzień, więc
        dzienny limit jest osiągany dosyć często. W tym przypadku wyświetlona zostanie wiadomość błędu z miejscu wykresu. Jeśli nie ma
        błędów, przychodzące dane zostaną dostosowane do obsługiwanego formatu i zapisane w magazynie Redux i IndexedDB*, co będzie
        skutkowało aktualizacją komponentów i wyświetleniem wykresów.
        <br />
        Po lewej stronie paska wyszukiwania dostępna jest opcja "zwinięcia" danych od wszystkich dostawców w jeden wykres, to znaczy
        obliczenia średniej z dostępnych wartości dla każdego dnia. Po drugiej stronie ekranu znajdziemy przycisk otwierający listę
        możliwych kombinacji danych - możliwe jest przełączanie pomiędzy krzywą temperatur lub wiatru, a także włączanie/wyłączanie słupków
        opadów atmosferycznych.
        <br />
        Biblioteką odpowiedzialną za wyświetlanie wykresu jest Visx. Poprzednio wykorzystywana była inna, prostsza, jednak znacznie bardziej
        wymagająca obliczeniowo, co powodowało długie ładowanie strony na starszych urządzeniach mobilnych i w niektórych przeglądarkach.
        Visx wymaga większej ilości kodu, co jest jedynym minusem - czas ładowania i możliwości dostosowania interfejsu wykresu są
        nieporównywalnie lepsze.
        <br />
        <br />* - localforage zapisuje lub nadpisuje każdą zmianę stanu aplikacji jeżeli była spowodowana nowym zapytaniem. Dane prognoz są
        zapisywane z odpowiadającym dostawcą usług, współrzędnymi i czasem wygaśnięcia równym czasowi otrzymania odpowiedzi + 1 dzień, a
        adresy bez limitu czasowego. Jeżeli prognoza jest odczytana po czasie wygaśnięcia, nie istnieje dla danej lokacji lub adres nie
        został wcześniej przetłumaczony, zostanie wykonane nowe zapytanie. W innym przypadku dane zostaną odczytane z IndexedDB i przekazane
        do odpowiedniego reducera. Rozwiązanie pozwala znacznie zaoszczędzić ilość wykonywanych zapytań.
      </>
    ),
  },
};

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col w-4/5 bg-[#fefcfb0f] md:w-[95vw] rounded-[30px] p-8 md:p-4 [&>div]:mb-8 [&>div]:[&>div]:text-[20px] md:[&>div]:[&>div]:text-[18px]">
      <div>
        <div className="flex !text-5xl md:!text-2xl md:text-center mb-8">{aboutText.header[language]}</div>
        <div>{aboutText.technologies[language]}</div>
      </div>
      <div>
        <div className="flex justify-center group">
          <ReactIcon
            className="w-16 h-16"
            infinite
          />
        </div>
        <div>{aboutText.react[language]}</div>
      </div>
      <div>
        <div className="flex justify-center group">
          <WeatherIcon
            className="w-16 h-16"
            fill="#00000000"
          />
        </div>
        <div>{aboutText.weather[language]}</div>
      </div>
      <div>
        <div className="flex justify-center group mb-4">
          <ContactIcon className="w-16 h-16" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center text-[20px]">
            karol.p.krol@gmail.com
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:karol.p.krol@gmail.com";
                e.preventDefault();
              }}
              className="group hover:text-theme-1 transition-colors duration-200 flex flex-row justify-center items-center"
            >
              <LinkIcon className="w-4 h-4 ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
