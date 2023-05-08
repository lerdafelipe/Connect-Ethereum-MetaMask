import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <main className='h-screen max-h-screen flex flex-col font-sans'>

      <header className='bg-white w-full h-12 border-b-[1px] border-solid border-slate-100'></header>

      <section className='flex w-full flex-auto'>

        <Sidebar />

        <section className='flex-auto bg-[#F9FAFB]'></section>

      </section>

    </main>
  )
}

export default App
