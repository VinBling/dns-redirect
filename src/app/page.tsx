import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = process.env.NEXT_PUBLIC_REDIRECT_URL;
      if (url) {
        window.location.replace(url);
      }
    }
  }, []);
  return null;
}
