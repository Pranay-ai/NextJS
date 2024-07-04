import { useState } from 'react'
import { fileExplorer } from '../public/data'
import Folder from './Folder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <p className="text-5xl text-orange-500">Hello</p> */}
      <Folder folderData={fileExplorer}/>
    </>

  )
}

export default App
