import { useEffect, useState } from "react";

export default function Tag() {
  const tags = ["Catalyst", "Partner", "Ally"];
  const [currentTag, setCurrentTag] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % tags.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <span>{tags[currentTag]}</span>;
}
