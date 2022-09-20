import React,{useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import Root from '../../../assets/Root.png'
import './Loading'

const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      })
    }, [])

  return (
    <div className="App">
      <header className="App-header">
            <ClipLoader size={50} color={'#F39405'} loading={loading}/>
      </header>
    </div>
  )
}

export default Loading