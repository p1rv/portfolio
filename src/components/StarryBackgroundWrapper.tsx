import { lazy, PropsWithChildren, Suspense } from "react";
const StarryBackground = lazy(() => import("./StarryBackground"));

export const StarryBackgroundWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Suspense
        fallback={
          <div
            className="stars-wrapper fixed inset-0 w-[130vw] h-[130vh] -translate-y-[15vh] -translate-x-[15vw] z-[-1] blur-sm"
            style={{
              background: "radial-gradient(circle at 50% 150%, #0a1234, black)",
            }}
          />
        }
      >
        <StarryBackground />
      </Suspense>
      {children}
    </div>
  );
};
