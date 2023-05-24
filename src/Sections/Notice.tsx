import { useState } from "react";

//Container
import Container from "@/Components/Common/Container";

//Components
import Lists from "@/Components/Notice/Lists";
import Card from "@/Components/Notice/Card";

//Context
import { NoticeContext } from "@/Context/notice.context";

const Notice = () => {
    //State
    const [index, setIndex] = useState<number>(0);
    return (
        <section id="notice">
            <Container className="py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Notice Board</h1>
                    <p className="w-[60%] mx-auto mt-2">Welcome to the school notice board! This is the go-to destination for all important announcements and information regarding the school community.</p>
                </div>
                <NoticeContext.Provider value={{ index, setIndex }}>
                    <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-10 mt-10">
                        <Lists />
                        <Card />
                    </div>
                </NoticeContext.Provider>
            </Container>
        </section>
    );
};

export default Notice;