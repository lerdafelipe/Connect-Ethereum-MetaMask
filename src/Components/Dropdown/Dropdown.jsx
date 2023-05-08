import {useState} from 'react'
import { DownIcon, UpIcon } from "../../svg/svg"

export const Dropdown = ({children, Icon, text}) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = isOpen ? 'list-none pl-7 py-2 flex flex-col gap-2' : 'hidden'

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <div className='w-full'>
      <button onClick={handleOpen} className='w-full flex flex-row items-center gap-2'>
        {Icon && <Icon className='text-xl' color={isOpen? '#00000' : '#6B7280'} />}
        <span className='font-medium'>{text}</span>
        <span className='flex-auto flex justify-end pl-4 pr-1'>{isOpen? <UpIcon/> : <DownIcon />}</span>
      </button>
      <ul className={classes}>
        {children}
      </ul>
    </div>
  )
}


export const DropdownItem = ({text, href}) => {
  return (
    <li className='font-medium'><a className='cursor-pointer w-full' href={href}>{text}</a></li>
  )
}