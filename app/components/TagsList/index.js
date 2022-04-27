import { useAppContext } from '../../context/appContext';
import Tag from '../Tag';
import './styles.css';

function TagsList({ data }) {
    const { processedTagsList } = useAppContext();

    return (
        <div className='tags-list-wrapper'>
            {processedTagsList.map((tag, index) => {
                return <Tag key={`tags-list-${index}`} data={tag} className={'tags-list-item'} />
            })}
        </div>
    )
}

export default TagsList;