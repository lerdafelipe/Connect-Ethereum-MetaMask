import { AdjustmentsIcon, ClipboardIcon, ClockIcon, CollectionIcon, HelpIcon, InboxIcon, LockIcon, OverviewIcon, PagesIcon, SalesIcon, SettingsIcon, WorldIcon } from "../../svg/svg"
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown'
import { useAuth } from '../../Context/AuthContext'

const Sidebar = () => {
  const {user, Login, Logout} = useAuth()

  return (
    <nav className="flex flex-col border-r-[1px] border-solid border-slate-100">
      <div className="p-4 flex flex-col gap-3 border-b-[1px] border-solid border-slate-100">
        
        <Redirecto Icon={OverviewIcon} text="Overview" />

        <Dropdown Icon={PagesIcon} text='Pages'/>

        <Dropdown Icon={SalesIcon} text='Sales'>
          <DropdownItem text='Product List' />
          <DropdownItem text='Billing' />
          <DropdownItem text='Invoices' />
        </Dropdown>

        <FutureRoute text='Messages' Icon={InboxIcon} />

        <Dropdown Icon={LockIcon} text='Authentication' />

      </div>

      <div className="p-4 flex flex-col gap-2">
        <Redirecto Icon={ClipboardIcon} text="Docs" />
        <Redirecto Icon={CollectionIcon} text="Components" />
        <Redirecto Icon={HelpIcon} text='Help' />
      </div>

      <div className="p-4 pb-6 flex flex-col justify-end items-center gap-5 flex-auto">
        <div className='w-full'>
          { user 
            ? <button className='py-1 w-full border-[1px] border-solid border-red-500 rounded-md text-red-500 text-sm' onClick={Logout}>Disconnect Wallet</button>
            : <button className='py-1 w-full border-[1px] border-solid border-slate-200 rounded-md text-zinc-950 text-sm' onClick={Login}>Connect Wallet</button>
          }
        </div>

        <div className='flex flex-row gap-4 text-xl'>
          <a className='cursor-pointer'><AdjustmentsIcon /></a>
          <a className='cursor-pointer'><SettingsIcon /></a>
          <a className='cursor-pointer'><WorldIcon /></a>
        </div>
      </div>

    </nav>
  )
}

export default Sidebar



const Redirecto = ({Icon, href, text}) => {
  return (
    <a href={href} className='cursor-pointer flex flex-row gap-2 items-center text-base'>
      {Icon && <Icon className="text-xl" color="#6B7280"  />}
      <span className="font-medium">{text}</span>
    </a>
  )
}


const FutureRoute = ({Icon, text}) => {
  return (
    <div className='cursor-pointer w-full flex flex-row items-center gap-2'>
        {Icon && <Icon className='text-xl' color='#6B7280' />}
        <span className='font-medium'>{text}</span>
        <span className='flex-auto flex justify-end pl-4'>
          <picture className='bg-slate-200 p-1 rounded-full'>
            <ClockIcon color='#9B1C1C'/>
          </picture>
        </span>
    </div>
  )
}