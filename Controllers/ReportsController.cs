using Microsoft.AspNet.Mvc;
using CollectionJson;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.AspNet.Mvc.Routing;

namespace Web
{
    [Route("api/reports")]
    public class ReportsController : Controller 
    {
        private const int PAGE_SIZE = 10;
        
        [Route("deals")]
        [HttpGet]
        public ReadDocument Deals(int page = 1) 
        {
            var deals = Enumerable
                            .Range(PAGE_SIZE * (page - 1), PAGE_SIZE)
                            .Select(idx => 
                                new Deal("Deal " + idx, true, idx * 1000, idx * 100, idx * 1.4f, idx * 5.6f));

            // Collection+JSON => http://amundsen.com/media-types/collection/format/
            var doc = new ReadDocument
            {
                Collection =
                {
                    Version = "1.0"
                }
            };

            foreach (var item in deals.Select(d => 
                        new Item
                        {
                            Data = new List<Data>
                            {
                                new Data { Name = "name", Prompt = "Name", Value = d.Name },
                                new Data { Name = "state", Prompt = "State", Value = d.State.ToString() },
                                new Data { Name = "revenue", Prompt = "Revenue", Value = d.Revenue.ToString() },
                                new Data { Name = "actions", Prompt = "Auctions", Value = d.Auctions.ToString() },
                                new Data { Name = "impressions", Prompt = "Impressions", Value = d.Impressions.ToString() },
                                new Data { Name = "avgClearingCpm", Prompt = "Avg Clearing Cpm", Value = d.AvgClearingCpm.ToString() }
                            }
                        })
                    )
            {
                doc.Collection.Items.Add(item);
            };
            
            // "links" : [
            //   {"href" : "...", "rel" : "first"},
            //   {"href" : "...", "rel" : "previous"},
            //   {"href" : "...", "rel" : "next"},
            //   {"href" : "...", "rel" : "last"}
            // ],                 
            
            doc.Collection.Links.Add(new Link
                {
                    Href = new Uri(Url.Action(new UrlActionContext 
                        { 
                            Action =  "Deals", 
                            Controller = "Reports", 
                            Values = new { page = 1 }, 
                            Protocol = Request.Scheme 
                        })),
                    Rel = "first"   
                });
                
            doc.Collection.Links.Add(new Link
                {
                    Href = new Uri(Url.Action(new UrlActionContext 
                        { 
                            Action =  "Deals", 
                            Controller = "Reports", 
                            Values = new { page = page == 1 ? 1 : page - 1 }, 
                            Protocol = Request.Scheme 
                        })),
                    Rel = "previous"
                });
            doc.Collection.Links.Add(new Link
                {
                    Href = new Uri(Url.Action(new UrlActionContext 
                        { 
                            Action =  "Deals", 
                            Controller = "Reports", 
                            Values = new { page = page == 20 ? 20 : page + 1 }, 
                            Protocol = Request.Scheme 
                         })),
                    Rel = "next"
                });
             doc.Collection.Links.Add(new Link
                {
                    Href = new Uri(Url.Action(new UrlActionContext 
                        { 
                            Action =  "Deals", 
                            Controller = "Reports", 
                            Values = new { page = 20 }, 
                            Protocol = Request.Scheme 
                        })),
                    Rel = "last"
                });
                
            return doc;
        }
    }

}