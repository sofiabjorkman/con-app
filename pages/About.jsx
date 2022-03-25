

import { createClient  } from "contentful";
import AboutContent from "../components/AboutContent";

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'about' })

  return {
    props: {
      about: res.items
    }
  }
}

export default function About({ about }) {
  console.log(about)
  return (
    <>
      {about.map(a => {
        <div>
          <AboutContent key={a.fields.id} a={a} />
        </div>
      })}
    </>
  )
}
