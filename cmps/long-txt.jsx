const { useState } = React

export function LongTxt({ txt, length = 100 }) {
    console.log('txt, length:', txt, length)
    const [isWholeText, setIsWholeText] = useState(false)

    function setTextDisplay() {
        if (isWholeText) return txt
        return txt.slice(0, length) + '...'
    }


    return <section>
        <p onClick={() => setIsWholeText(!isWholeText)}>{setTextDisplay()}</p>

        <button onClick={() => setIsWholeText(!isWholeText)}>{isWholeText ? 'Read Less' : 'Read More'}</button>
    </section>
}