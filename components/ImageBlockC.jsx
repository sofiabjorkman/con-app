import Image from 'next/image';

import styles from '../styles/imageBlockC.module.css'

export default function ImageBlockC({ pro }) {

  const { name, description, featureImage } = pro.fields;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nameC}>
          <h3>{name}</h3>
        </div>

        <div className={styles.imageC}>
        <Image 
         src={'https:' + featureImage.fields.file.url}
        //  width={featureImage.fields.file.details.image.width}
        //  height={featureImage.fields.file.details.image.height}
         width={400}
         height={280}
         className={styles.image}
       />
       </div>

        <div className={styles.descriptionC}>
          <p>{description}</p>
        </div>
    </div>
    </>
  )
}
