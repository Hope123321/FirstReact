namespace FirstReact.Models
{
    public record SignInRequestViewModel(string Account,string Password);

    public record SignInResponseViewModel(string UserNo,string UserNa,string Token);
}
