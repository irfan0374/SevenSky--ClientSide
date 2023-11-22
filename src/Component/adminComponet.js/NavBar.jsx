import React from 'react'
import { useDispatch } from 'react-redux'
import { adminLogout } from '../../Redux/Slice/adminSlice'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("adminToken")
  dispatch(adminLogout())
    navigate('/admin/')
  
  }
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">NestWay</a>
    </div>
    <div className="flex-none">
   
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-32 mx-1">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M19.5 7.14286V8M19.5 7.14286C18.777 7.14286 18.14 6.76405 17.7664 6.18888M19.5 7.14286C20.223 7.14286 20.86 6.76405 21.2336 6.18888M19.5 2.85714C20.223 2.85714 20.8601 3.236 21.2336 3.81125M19.5 2.85714C18.777 2.85714 18.1399 3.236 17.7664 3.81125M19.5 2.85714V2M22 3.28571L21.2336 3.81125M17.0003 6.71429L17.7664 6.18888M17 3.28571L17.7664 3.81125M21.9997 6.71429L21.2336 6.18888M21.2336 3.81125C21.4545 4.15141 21.5833 4.56023 21.5833 5C21.5833 5.43982 21.4545 5.84869 21.2336 6.18888M17.7664 3.81125C17.5455 4.15141 17.4167 4.56023 17.4167 5C17.4167 5.43982 17.5455 5.84869 17.7664 6.18888" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          </div>  
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar
