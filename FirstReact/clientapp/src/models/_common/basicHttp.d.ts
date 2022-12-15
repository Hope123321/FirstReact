//共用的Request結構
export interface BasicRequest {
    RequestData?: object
}
//共用的Response結構
export interface BasicResponse {
    ResponseNo: string
    ResponseNa: string
    ResponseData?: object
}