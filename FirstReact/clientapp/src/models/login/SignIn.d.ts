//菜單結構
export interface SingInRequest {
    Account: string
    Password: string
    Remember: boolean
}
//菜單結構
export interface SingInResponse {
    UserNo: string
    UserNa: string
    Token?: object
}