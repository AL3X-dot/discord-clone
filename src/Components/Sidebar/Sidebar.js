import React from 'react'
import './sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import AddIcon from '@material-ui/icons/Add'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'

import SidebarChannel from './SidebarChannel'

import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='header'>
                Alex Mercy
                <ExpandMoreIcon/>
            </div>

            <div className="channels">
                <div className="channel_header">
                    <span className="ch_he">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </span>
                    <AddIcon className="add_channel"/>
                </div>
                <div className="channel_list">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>

            <div className="voice">
                <SignalCellularAltIcon className='signal_icon' fontSize='large'/>
                <div className="voice_info">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="voice_icons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>

            <div className="profile">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEHFsPjasen9x3tGU3sRyMN9xeuUzptdTSg&usqp=CAU">A</Avatar>
                <div className="profile_info">
                    <h3>@bInArYz</h3>
                    <p>#12b378</p>
                </div>
                <div className="profile_icons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
