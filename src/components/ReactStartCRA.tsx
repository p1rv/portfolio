export const ReactStartCRA: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-5xl text-right w-full mb-4">CRA</p>
      <p className="mb-3">
        create-react-app is one of the oldest and most popular tools used to manage React applications. It is very well tested and, not
        dissimilar to Vite, provides you with basic, examplary application. However, its main drawback is speed - Webpack (bundling tool
        used by CRA) takes on average about 10-100× longer to bundle everything on server startup than Vite. That huge a time difference is,
        among others, the result of Webpack being JavaScript-based bundler, while ESBuild used in Vite is written in Go.
      </p>
      <p>
        If you decide on using create-react-app, follow instructions available on their 
        <a
          className="text-theme-1"
          href="https://create-react-app.dev/"
          target="_blank"
        >
          official website
        </a>
        . If you don't mind longer bundling, development server startup, or even HMR times, this is probably a saver option. Choosing this
        environment might actually save you some work if you run into some corner cases nobody else did yet when working with Vite, which is
        still relatively new.
      </p>
    </div>
  );
};
