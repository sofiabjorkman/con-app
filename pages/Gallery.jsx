import styles from '../styles/Gallery.module.css'
import { createClient  } from "contentful";

import ImageBlockC from "../components/ImageBlockC";

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'product' })

  return {
    props: {
      product: res.items
    }
  }
}

export default function Gallery({ product }) {
  return (
    <div className={styles.mainCon}>
      {product.map(pro => 
        <ImageBlockC key={pro.fields.id} pro={pro} /> 
      )}
    </div>
  )
}
