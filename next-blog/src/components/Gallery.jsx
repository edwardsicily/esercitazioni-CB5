import React from "react";
import Image from "next/image";
import styles from "@/styles/Gallery.module.scss";

function Gallery() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>My Gallery</div>
      <div className={styles.Gallery}>
        <Image
          src="https://picsum.photos/300?random=1"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=2"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=3"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=4"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=5"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=6"
          alt="Picture of the author"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
}

export default Gallery;
