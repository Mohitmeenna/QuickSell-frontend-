import { ReactComponent as NoPriorityIcon } from '../icons_FEtask/No-priority.svg';
import { ReactComponent as LowPriorityIcon } from '../icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../icons_FEtask/Img - High Priority.svg';
import { ReactComponent as UrgentIcon } from '../icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as BacklogIcon } from '../icons_FEtask/Backlog.svg';
import { ReactComponent as TodoIcon } from '../icons_FEtask/To-do.svg';
import { ReactComponent as InProgressIcon } from '../icons_FEtask/in-progress.svg';
import { ReactComponent as DoneIcon } from '../icons_FEtask/Done.svg';
import { ReactComponent as CanceledIcon } from '../icons_FEtask/Cancelled.svg';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": 
            return <NoPriorityIcon width="16" height="16" />;
        
        case "Low": 
            return <LowPriorityIcon width="16" height="16" />;
        
        case "Medium": 
            return <MediumPriorityIcon width="16" height="16" />;
        
        case "High": 
            return <HighPriorityIcon width="16" height="16" />;
        
        case "Urgent": 
            return <UrgentIcon width="16" height="16" />;
        
        default: 
            return <AiFillWarning color='#fc7840' size={14} />;
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": 
            return <BacklogIcon width="16" height="16" />;
        
        case "Todo": 
            return <TodoIcon width="16" height="16" />;
        
        case "In progress": 
            return <InProgressIcon width="16" height="16" />;
        
        case "Done": 
            return <DoneIcon width="16" height="16" />;
        
        case "Canceled": 
            return <CanceledIcon width="16" height="16" />;
        
        default: 
            return <AiFillCloseCircle color='#94a2b3' size={16} />;
    }
}
