import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex w-full py-5">
        <li className="mx-5">
          <Link href={'/'}>HOME</Link>
        </li>
        <li className="mx-5">
          <Link href={'/blog'}>BLOG</Link>{' '}
        </li>
        <li className="mx-5">
          <Link href={'/projects'}>PROJECT</Link>{' '}
        </li>
        <li className="mx-5">
          <Link href={'/contact'}>CONTACT</Link>{' '}
        </li>
      </ul>
    </nav>
  )
}
