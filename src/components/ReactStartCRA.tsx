export const ReactStartCRA: React.FC = () => {
  return (
    <div>
      create-react-app is one of the oldest and most popular tools used to manage React applications. It is very well tested and, not
      dissimilar to Vite, provides you with basic, examplary application. However, its main drawback is speed - Webpack (bundling tool used
      by CRA) takes on average about 30 seconds to refresh changes you made since last bundle, while Vite does that usually under 1 second.
      That huge a time difference is the result of not bundling dependancies (e.g. component libraries) everytime source code changes -
      effectively only files you changed and ones depending on them are bundled again.
    </div>
  );
};
