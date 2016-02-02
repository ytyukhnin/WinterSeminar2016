using Microsoft.AspNet.Mvc;

namespace Web
{
    public class MoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}