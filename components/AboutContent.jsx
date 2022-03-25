import Image from 'next/image'

export default function AboutContent({ a }) {

  const { aboutImg, name, occupation } = a.fields;
  return (
    <div>
     <Image 
         src={'https:' + aboutImg.fields.file.url}
         width={400}
         height={280}
       />

    </div>
  )
}
