import { useQuery } from '@apollo/client';
import { QUERY_ALL_NOTES } from '../utils/queries'

function Messages() {
    const { data } = useQuery(QUERY_ALL_NOTES);
    const notes = data?.notes || [];

    //create button and query to see all previously read messages... someday

    return (
        <>
            {notes.map((message) => (
                <article className="adminuItem">
                    <div className="adminuTitle">{message.name}</div>
                    <span className="adminuMeta">{message.createdAt}</span>
                    <div className="adminuText">{message.message}</div>
                    <button className="adminubutton" onClick={() => window.location = `mailto:${message.email}`}>••• Reply •••</button>
                    <span className="adminuSpace">•••</span>
                </article>
            ))}
            <button className="adminubutton">••• See All Previous Messages •••</button>
        </>
    )
}

export default Messages;