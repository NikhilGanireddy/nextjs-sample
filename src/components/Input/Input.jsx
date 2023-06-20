const Input=({type, placeholder, className})=>{

    return <input type={type} placeholder={placeholder} className={`${className} w-full bg-transparent outline-none px-6 py-3 border border-violet-600 rounded-2xl`}/>
}

export default Input