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
            string ret = "";
            if (
                source!=null 
                && !string.IsNullOrEmpty(source.Account)
                && !string.IsNullOrEmpty(source.Password)
                ) {

                SignInResponseViewModel res = new(_jwt.GenerateToken(source.Account));
                ret = JsonSerializer.Serialize(res);
            }
            return ret;
        }

    }
}