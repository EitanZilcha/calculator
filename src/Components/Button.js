/**
 * generate a button component
 * @param { Object } props - properties of the button
 */
export default function Button(props){
    if(props.className === undefined){
        return (
            <input type="button" onClick={props.onclick} value={props.children}/>
        )
    }
    return (
        <input type="button" onClick={props.onclick} value={props.children} className={props.className}/>
    )
}