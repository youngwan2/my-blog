import { FiMenu } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import Nav from './Nav'
export default function Header() {
  return (
    <>
      <header className="flex justify-between p-5 ">
        <button>
          <FiMenu />
        </button>
        <h1 className="font-bold">
          {' '}
          <Link href={'/'}>Coding Life</Link>
        </h1>
        <button>
          <FiSearch />
        </button>
      </header>
      <Nav />
      <hr />
    </>
  )
}
