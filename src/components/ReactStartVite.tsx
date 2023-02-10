import vite from "../img/vite.png";

export const ReactStartVite: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-5xl text-right mb-4 w-full">Vite</p>
      <p className="mb-3">
        Vite is rapidly gaining popularity among frontend developers. Compared to create-react-app it is much faster due to modifying how
        packages are bundled - dependencies like component libraries are still bundled but with far quicker esbuild, while source code is
        transformed and served on browsers request in separate packages. This approach mitigates the problem of long server startup, and in
        case of large applications, noticeable HMR (update caused by overwriting file with source code) lag.
      </p>
      <p className="mb-3">
        Vite enables you to start working on your application almost seamlessly. All you need to do is download Vite itself by following the
        instructions 
        <a
          className="contents text-theme-1"
          target="_blank"
          href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project"
        >
          here
        </a>
        , type in `npm vite create` and fill in information about the project like so:
      </p>
      <img
        className="w-[500px] my-4 p-4 bg-[#1d1d1d] rounded-xl"
        src={vite}
        alt="vite-demo"
      />

      <p className="mb-3">
        After running commands you will see on successful project creation, very basic app is going to be available out-of-the-box.
      </p>
      <p className="mb-3">
        Note that Vite provides you with possibility to choose other frameworks, like Vue or just vanilla, as well as including TypeScript.
        Vite also offers replacing Babel with SWC. They are both used to transform modern ECMAScript to backwards compatible JavaScript, but
        SWC comes with improved performance. Choosing either probably won't affect your developing experience too much. One last thing to
        consider is JavaScript vs TypeScript. TypeScript affects the way your code look only in development, as it is going to be
        transformed to pure JavaScript anyway, however it may force you to be more mindful about how you design data structures and improve
        code readability.
      </p>
    </div>
  );
};
