import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article className='shadow my-4'>
        <Link href="#" className='hover:opacity-75'>
            <Image
                src="http://source.unsplash.com/collection/1346951/1000x500?sig-1"
                alt=""
                width={1280}
                height={300} />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
            <Link href='#' className='text-blue-700 pb-4 font-bold'>
              Technology
            </Link>
            <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
              Next.jsの勉強中
            </Link>
            <p className='text-sm pb-3 text-slate-900'>
              Published on 2024/02/01
            </p>
            <Link href='#' className='text-slate-900 pb-6'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem veniam rerum magnam, architecto voluptates, in facilis sint quo nesciunt accusantium aperiam sit assumenda sunt nihil beatae. Aperiam dolore eveniet cupiditate.
            </Link>
            <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>

      <article className='shadow my-4'>
        <Link href="#" className='hover:opacity-75'>
            <Image
                src="http://source.unsplash.com/collection/1346951/1000x500?sig-10"
                alt=""
                width={1280}
                height={300} />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
            <Link href='#' className='text-blue-700 pb-4 font-bold'>
              Technology
            </Link>
            <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
              TypeScriptの勉強中
            </Link>
            <p className='text-sm pb-3 text-slate-900'>
              Published on 2024/01/31
            </p>
            <Link href='#' className='text-slate-900 pb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio temporibus maiores magni! Vitae vero natus aperiam illo distinctio neque nam explicabo doloribus dolor delectus ex ad quibusdam, consectetur mollitia obcaecati maiores itaque, quae molestiae voluptatibus deleniti non voluptatem nobis repellat. Totam commodi minus nisi explicabo ipsum quisquam itaque nemo. Delectus!
            </Link>
            <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
