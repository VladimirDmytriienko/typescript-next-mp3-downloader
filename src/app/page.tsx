import Image from 'next/image'
import {Input} from '../components/Input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
          Song Fetcher
      </h1>

      <Input/>
     
    </main>
  )
}
