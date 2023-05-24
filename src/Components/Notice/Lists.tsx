import { useContext } from "react";
import moment from "moment";

//Urql
import { useQuery } from "urql";
import { GET_NOTICE_LIST } from "@/Urql/Query/Notice/notice.query";
import { GetNoticeData } from "@/Urql/Types/Notice/notice.types";

//Context
import { NoticeContext } from "@/Context/notice.context";

const Lists = () => {
    //Urql
    const [{ data, fetching, error }] = useQuery<GetNoticeData>({ query: GET_NOTICE_LIST, variables: { searchInput: { search: "" } } });

    //Context
    const { setIndex } = useContext(NoticeContext);

    if (fetching) return (
        <div className="bg-white p-4 shadow-[0px 20px 24px -4px rgba(85,_105,_135,_0.04)] rounded-lg">
            {[...Array(8)].map((_, i) => (
                <div className={`w-full h-[25px] ${([...Array(8)].length - 1) === i ? "mb-0" : "mb-2"}`} key={i}>
                    <div className="animate-pulse h-full">
                        <div className="w-full bg-gray-300 h-full rounded-md ">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    if (error) return (
        <div className="bg-white p-4 shadow-[0px 20px 24px -4px rgba(85,_105,_135,_0.04)] rounded-lg">
            <p className="text-red-600 text-center">{error.message}</p>
        </div>
    )
    return (
        <div>
            <div className="bg-white px-4 py-3 shadow-[0px 20px 24px -4px rgba(85,_105,_135,_0.04)] rounded-lg">
                <ul>
                    {data?.getNotices.map((item, i) => (
                        <li className="flex gap-2 my-3 cursor-pointer" onClick={() => setIndex(i)} key={i}>
                            <p className="basis-[17%] lsm:basis-[17%] msm:basis-[20%] sm:basis-[24%] xxs:basis-[33%] text-sm font-semibold">{moment(item.created_at).format("DD MMM YYYY")}</p>
                            <p className="flex-1 line-clamp-1 xs:line-clamp-1 xxs:line-clamp-2 text-sm opacity-60 select-none">{item.title}</p>
                            <p className="basis-[15%] smd:basis-[15%] lsm:basis-[20%] sm:basis-[24%] xxs:basis-[30%] text-sm opacity-60">{moment(item.created_at).fromNow()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Lists;