function Messages() {
    //replace with route call:
    const getMessages = [
        {title: "message title one", text: "message text 1", email: "one@email.com", createdAt: "Sun Apr 17 2022 00:35:37 GMT+0000"},
        {title: "message title two", text: "message text 2", email: "two@email.com", createdAt: "Sun Apr 03 2022 20:31:37 GMT+0000"}
    ];

    return (
        <>
            {getMessages.length && getMessages.map((message) => (
                <article className="adminuItem">
                    <div className="adminuTitle">{message.title}</div>
                    <span className="adminuMeta">{message.createdAt}</span>
                    <div className="adminuText">{message.text}</div>
                    <button className="adminubutton" onClick={() => window.location = `mailto:${message.email}`}>••• Reply •••</button>
                    <span className="adminuSpace">•••</span>
                </article>
            ))}
            <button className="adminubutton">••• See All Previous Messages •••</button>
        </>
    )
}

export default Messages;