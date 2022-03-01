// import styles from '../styles/Home.module.css'
import { createClient  } from "contentful";

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

export default function Home({ product }) {
  console.log(product)
  return (
    <>
      {product.map(pro => 
        <div key={pro.fields.id}>
          {pro.fields.name}
        </div>
      )}
    </>
  )
}
