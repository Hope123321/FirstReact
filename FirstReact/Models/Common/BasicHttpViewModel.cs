
namespace FirstReact.Models
{
    public class BasicResponseViewModel
    {
        /// <summary>
        /// 回傳代碼
        /// </summary>
        public string ResponseNo { get; set; }
        /// <summary>
        /// 回傳訊息
        /// </summary>
        public string ResponseNa { get; set; }
        /// <summary>
        /// 回傳內容
        /// </summary>
        public object ResponseData { get; set; }
    }
}
