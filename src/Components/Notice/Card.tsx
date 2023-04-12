import { useContext } from "react";
import moment from "moment";
import parse from "html-react-parser";

//Urql
import { useQuery } from "urql";
import { GET_NOTICE_LIST } from "@/Urql/Query/Notice/notice.query";
import { GetNoticeData } from "@/Urql/Types/Notice/notice.types";

//Context
import { NoticeContext } from "@/Context/notice.context";

const Card = () => {
    //Urql
    const [{ data, fetching, error }] = useQuery<GetNoticeData>({ query: GET_NOTICE_LIST, variables: { searchInput: { search: "" } } });

    //Context
    const { index } = useContext(NoticeContext);

    if (fetching) return <div className="w-full h-[200px]">
        <div className="animate-pulse h-full">
            <div className="w-full bg-gray-300 h-full rounded-md ">
            </div>
        </div>
    </div>

    if (error) return (
        <div className="p-4">
            <p className="text-red-600 text-center">{error.message}</p>
        </div>
    )
    const notice = data?.getNotices[index]
    return (
        <div className="border-2 border-solid border-main p-3 rounded-md">
            <div className="p-5 bg-main rounded-md text-white">
                <p className="text-base font-semibold opacity-95"><span>Notice: </span>{notice?.title}</p>
                <p className="text-base mt-px"><span>Date: </span>{moment(notice?.created_at).format("dddd, MMMM Do")}</p>
                <div className="my-4 text-sm">
                    {parse(notice?.description || "")}
                </div>
                <p className="text-sm"><span>Publisher: </span>{notice?.createdBy?.name || notice?.createdBy?.phone}</p>
            </div>
        </div>
    );
};

export default Card;