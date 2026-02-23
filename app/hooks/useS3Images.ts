import { useEffect, useState } from "react";

export function useS3Images(carpeta: string) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bucketUrl = process.env.NEXT_PUBLIC_S3_BUCKET_URL;

    fetch(`${bucketUrl}?list-type=2&prefix=${carpeta}/&delimiter=/`)
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const keys = [...xml.querySelectorAll("Key")]
          .map((el) => el.textContent ?? "")
          .filter((key) => /\.(jpg|jpeg|png|webp|gif)$/i.test(key));

        const urls = keys.map((key) => `${bucketUrl}/${key}`);
        setImages(urls);
      })
      .finally(() => setLoading(false));
  }, [carpeta]);

  return { images, loading };
}