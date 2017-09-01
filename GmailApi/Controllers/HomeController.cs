using GmailApi.Entities;
using GmailApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GmailApi.Controllers
{
    public class HomeController : Controller
    {
        HomeService _service;
        public HomeController()
        {
            _service = new HomeService();
        }
        [HttpGet]
        public ActionResult Index()
        {
            //_service.GetSimple();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult GetInformations()
        {
            var getInformationsViewModel = _service.GetInformations();
            return Json(getInformationsViewModel, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult AddUser()
        {

            return View();
        }
        [HttpPost]
        public ActionResult AddNewUser(User user)
        {

            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}