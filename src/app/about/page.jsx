import React from "react";
import Button from "@/components/Button/Button";

const About = () => {
    return <div className="py-4 flex flex-col gap-12">
        <div className=" relative about-bg w-full min-h-[40vh]">
            <div className="text-white absolute bottom-6 left-6 bg-violet-600 p-6 rounded-lg">
                <h1 className="text-4xl font-bold">Digital storytellers</h1>
                <h1 className="text-xl font-semibold">Hand crafting award winning digital experiences</h1>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-12">
                <h1 className="capitalize text-4xl font-bold">Who are we?</h1>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend sapien nec augue
                        ultricies,
                        eget
                        hendrerit risus accumsan. Proin vel dictum risus, in sagittis libero. Ut congue sed tellus sit
                        amet
                        luctus. V
                    </p>
                    <br/>
                    <p>
                        estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Integer
                        scelerisque sed dui at convallis. Etiam eget justo at turpis luctus vehicula. Cras eu nulla
                        tincidunt,
                        rutrum orci a, lacinia sem.
                        Integer elit mi, placerat et sodales ut, aliquet vitae lacus. Vestibulum
                        aliquam, velit vitae scelerisque interdum, tortor sem pellentesque nulla, id sodales justo felis
                        at
                        ligula.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-12">
                <h1 className="capitalize text-4xl font-bold">What we do?</h1>
                <p>
                    Nam arcu nisi, facilisis eget nunc at, pulvinar gravida ex. In nibh est, sodales pellentesque libero
                    vitae, condimentum suscipit velit. Curabitur mattis ligula eget odio lacinia faucibus. Ut sagittis
                    ipsum felis. Maecenas blandit faucibus feugiat. Donec pulvinar turpis et ultricies facilisis.
                    Curabitur at purus a lorem finibus venenatis a eu ex.
                </p>
                <Button text={"Contact"} url={"/portfolio"} className={"w-max"}/>
            </div>
        </div>
    </div>;
};

export default About;
