using Microsoft.AspNet.Mvc;

namespace Web
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}