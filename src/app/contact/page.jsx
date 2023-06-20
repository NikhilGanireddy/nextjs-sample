import React from "react";
import Input from "@/components/Input/Input";

const Contact = () => {
    return <div className={"flex justify-center items-center"}>
        <form className="flex justify-center items-center flex-col gap-6 max-w-md">
            <h1 className="text-5xl font-bold title-gradient mb-12">Let's keep in touch</h1>

            <Input type={"text"} placeholder={"Name"}/>
            <Input type={"email"} placeholder={"Email"}/>
            <textarea className={"border w-full px-6 py-3 outline-none min-h-[200px] bg-transparent rounded-2xl border-violet-600"} placeholder={"Your message"}/>
            <button type={"submit"} className={"btn-primary"}>Send</button>
        </form>
    </div>;
};

export default Contact;
