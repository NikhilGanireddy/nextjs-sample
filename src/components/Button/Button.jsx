import Link from "next/link";

const Button=({text, url, className})=>{

    return <Link className={`${className} btn-primary`} href={url}>{text}</Link>
}
export default Button