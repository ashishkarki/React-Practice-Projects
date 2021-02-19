import React, {useEffect, useRef} from "react";

// Works a lot like useState
// 1. similar to useState, useRef preserves the value
// 2. unlike useSate, DOES NOT trigger a re-render
// 3. Most popular use case is: targeting DOM nodes/elements
const UseRefBasics = () => {
    /*
    * useRef returns a mutable ref object whose .current property is
    * initialized to the passed argument (initialValue).
    * The returned object will persist for the full lifetime of the component.
     */
    const randTxtContainer = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(randTxtContainer.current.value)
    }

    useEffect(() => {
        console.log(randTxtContainer.current)
        // focus on the randomInput each time we render the form
        randTxtContainer.current.focus()
    }) // since useRef doesn't re-render everytime, we don't need empty [] dependency list

    return (
        <>
            <h3>UseRefBasics Example</h3>

            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="randomText" ref={randTxtContainer}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default UseRefBasics
