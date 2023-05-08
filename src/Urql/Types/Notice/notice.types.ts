export interface NoticeData {
    id: string;
    title: string;
    description: string;
    pdf: string;
    createdBy: {
        name: string;
        phone: string;
    }
    created_at: Date;
}

export interface GetNoticeData {
    getNotices: NoticeData[]
}