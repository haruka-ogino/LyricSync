import '../styles/collections.css'
import { useCollections } from '../hooks/useCollections'
import Collections from './Collections'

export default function Home() {
  const { data, isLoading, isError } = useCollections()

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (data) {
    return (
      <>
        {/* <p className="page-title">Collections</p> */}
        <Collections />
      </>
    )
  }
}
