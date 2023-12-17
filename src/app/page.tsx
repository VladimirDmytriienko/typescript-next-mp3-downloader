import Image from 'next/image'
import { Input } from '../components/Input'


const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Song Fetcher
      </h1>

      <Input />

    </main>
  )
}
const ButtonCard = () => {
  return (
    <div className="px-8 py-32">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-0 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="pr-6 text-gray-100">Labs Release 2021.09</span>
            </span>
            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
          </button>
        </div>


        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-0 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="pr-6 text-gray-100">Labs Release 2021.09</span>
            </span>
            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <>
    {/* <ButtonCard /> */}
      <Input />

    </>

    
  );
}






// export default function Home() {
//   return (
//     <div className="bg-zinc-800 min-h-screen flex items-center justify-center px-16">
//       <div className="relative w-full max-w-lg">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         <div className="m-8 relative space-y-4">
//           {/* <div className="p-5 bg-gray-900 rounded-lg flex items-center justify-between space-x-8">
//             <div className="flex-1">
//               <div className="h-4 w-48 bg-gray-600 rounded"></div>
//             </div>
//             <div>
//               <div className="w-24 h-6 rounded-lg bg-purple-600"></div>
//             </div>
//           </div>
//           <div className="p-5 bg-gray-900 rounded-lg flex items-center justify-between space-x-8">
//             <div className="flex-1">
//               <div className="h-4 w-56 bg-gray-600 rounded"></div>
//             </div>
//             <div>
//               <div className="w-20 h-6 rounded-lg bg-yellow-600"></div>
//             </div>
//           </div>
//           <div className="p-5 bg-gray-900 rounded-lg flex items-center justify-between space-x-8">
//             <div className="flex-1">
//               <div className="h-4 w-44 bg-gray-600 rounded"></div>
//             </div>
//             <div>
//               <div className="w-28 h-6 rounded-lg bg-pink-600"></div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

