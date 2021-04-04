import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import MoreIcon from '@material-ui/icons/More';

export const SidebarItems = [
    {
        icon: <ChatIcon/>,
        text: "New Thread"
    },
    {
        icon: <InboxIcon/>,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon/>,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon/>,
        text: "Save Items"
    },
    {
        icon: <PeopleIcon/>,
        text: "Peoples & Groups"
    },
    {
        icon: <MoreIcon/>,
        text: "More"
    },  
]