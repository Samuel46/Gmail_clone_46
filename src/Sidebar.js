import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';

import DuoIcon from '@material-ui/icons/Duo';
import PhotoIcon from '@material-ui/icons/Photo';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose"
            onClick={() => dispatch(openSendMessage())}
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={40} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={540} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={20} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={30} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={70} />


            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhotoIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
