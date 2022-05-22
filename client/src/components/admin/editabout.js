function EditAbout() {
    const aboutText = "bota IS CIRCULAR COSMETICS FOR BODY & PLANET HEALTH INFORMED BY ANCESTRAL KNOWLEDGE, OUR FORMULAS ARE CREATED WITH METICULOUS ATTENTION TO EVERY DETAIL - EFFICACY, BEAUTY, AND SENSORY PLEASURE."

    return (
        <>
            <article className="adminuItem">
                <div className="adminuSpace">•••</div>
                <textarea className="adminuText" defaultValue={aboutText}></textarea>
                <button className="adminubutton">••• Update About Text •••</button>
            </article>
        </>
    )
}

export default EditAbout;