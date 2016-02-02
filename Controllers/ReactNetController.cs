using Microsoft.AspNet.Mvc;

namespace Web
{
    public class ReactNetController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}