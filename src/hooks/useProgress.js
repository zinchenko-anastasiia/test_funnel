import { useLocation } from "react-router-dom";

const useProgress = () => {
  const location = useLocation();
  const routes = [
    { path: "/", progress: 20 },
    { path: "/agreement", progress: 40 },
    { path: "/email", progress: 60 }
  ];

  const getProgress = (pathname) => {
    const route = routes.find((r) => r.path === pathname);
    return route ? route.progress : 0;
  };

  return getProgress(location.pathname);
};

export default useProgress;
