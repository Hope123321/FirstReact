using FirstReact.Models;
using FirstReact.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace FirstReact.Controllers
{
    [ApiController]
    [Route("api/[controller]/[Action]")]
    public class LoginController : ControllerBase
    {
        private readonly JwtService _jwt;
        private readonly ILogger<WeatherForecastController> _logger;

        public LoginController(ILogger<WeatherForecastController> logger, JwtService jwt)
        {
            _logger = logger;
            _jwt=jwt;
        }

        [HttpPost]
        public string SignIn(SignInRequestViewModel source)
        {
            BasicResponseViewModel ret=new BasicResponseViewModel();
            if (
                source != null
                && !string.IsNullOrEmpty(source.Account)
                && !string.IsNullOrEmpty(source.Password)
                )
            {

                SignInResponseViewModel res = new("sa", "管理者", _jwt.GenerateToken(source.Account));
                ret.ResponseNo = "0000";
                ret.ResponseData = res;
            }
            else {
                ret.ResponseNo = "9999";
                ret.ResponseNa = "輸入資料不正確!";
            }
            return JsonSerializer.Serialize(ret);
        }

    }
}