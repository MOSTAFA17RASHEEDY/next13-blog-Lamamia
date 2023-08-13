
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog',
  description: 'this is a blog page ',
}


async function getData(){
  const apiUrl = process.env.API_URL
    const res = await fetch(`${apiUrl}/api/posts`,{cache : 'no-store'})

    if(!res.ok){
      throw new Error("Error in fetching data!")
    }

    return res.json()
}

const  Blog = async() => {

  const data = await getData()

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
